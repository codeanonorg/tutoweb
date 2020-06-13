from wagtail.core.models import Site, Page


def menu(request):
    site: Site = Site.find_for_request(request)
    page: Page = site.root_page
    return {
        'menu': page.get_children().live().in_menu()
    }
