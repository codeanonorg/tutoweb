from django.conf import settings
from django.conf.urls import url
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from wagtail.api.v2.router import WagtailAPIRouter
from wagtail.api.v2.serializers import PageSerializer
from wagtail.api.v2.views import PagesAPIViewSet as WagtailPagesAPIViewSet

from home.models import HomePage

api_router = WagtailAPIRouter("wagtailapi")


class BasePagesAPIViewSet(WagtailPagesAPIViewSet):
    required_scopes = ['read']

    base_serializer_class = PageSerializer

    meta_fields = WagtailPagesAPIViewSet.meta_fields + [
        'html_url',
        'url_path',
        'slug',
    ]


class PagesAPIViewSet(BasePagesAPIViewSet):
    """
    Gets live content.
    """

    def detail_view_by_path(self, _r, path):
        """
        Same as the default view but getting the page by its path
        """
        self.lookup_field = 'url_path'
        self.lookup_url_kwarg = 'path'
        self.kwargs[self.lookup_url_kwarg] = '/{}/{}'.format(HomePage.default_slug, path)
        if getattr(settings, "APPEND_SLASH", True):
            self.kwargs[self.lookup_url_kwarg] += "/"
            self.kwargs[self.lookup_url_kwarg].replace("//", "/")

        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    @classmethod
    def get_urlpatterns(cls):
        """
        Extends the default Wagtail list of viewsets.
        """
        url_patterns = list(super().get_urlpatterns())
        url_patterns.append(
            url(r'^with-path/(?P<path>[\w/-]*)$', cls.as_view({'get': 'detail_view_by_path'}), name='detail_by_path')
        )
        return url_patterns


class PreviewPagesAPIViewSet(BasePagesAPIViewSet):
    """
    Same as Pages API ViewSet but returns page content related to a revision.
    """

    def get_queryset(self):
        return self.model.objects.all().order_by('id')

    def get_object(self):
        """
        Returns the page with id == the one passed in for a particular revision.
        The revision can be selected by using the query param `revision-id` which defaults to the latest one.
        """
        obj = super().get_object()

        revision_id = self.request.query_params.get('revision-id')
        if revision_id:
            revision = get_object_or_404(obj.revisions, id=revision_id)
        else:
            revision = obj.revisions.order_by('-created_at').first()

        # in case of no revisions, return the object (edge case)
        if not revision:
            return obj

        base = revision.as_page_object()
        return base.specific

    @classmethod
    def get_urlpatterns(cls):
        """
        Only get page by id allowed.
        """
        return [
            url(r'^(?P<pk>\d+)/$', cls.as_view({'get': 'detail_view'}), name='detail'),
        ]


api_router.register_endpoint('pages', PagesAPIViewSet)
api_router.register_endpoint('preview-pages', PreviewPagesAPIViewSet)
