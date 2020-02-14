import { Fragment, h } from "preact";
import { Button, Container, Control, Field, Hero, Section } from "preact-bulma";
import Helmet from "preact-helmet";
import Markup from "preact-markup";
import { useEffect, useState } from "preact/hooks";
import { getPage, isHomePage, Page } from "../../api";
import { usePage } from "../../api/hooks";
import StreamBlock from "../../components/StreamBlock";

interface Props {
}

const Home: preact.FunctionalComponent<Props> = props => {
  const {loading, error, pageData} = usePage(3);
  if(error) {
    return <Hero.Hero>
      <Hero.Body>
        <p class="has-text-centered is-error">Erreur:</p>
        <pre><code>{JSON.stringify(error)}</code></pre>
      </Hero.Body>
    </Hero.Hero>
  }

  if (loading) {
    return <Hero.Hero>
      <Hero.Body>
        <p class="has-text-centered">Loading...</p>
      </Hero.Body>
    </Hero.Hero>
  }
  if (isHomePage(pageData)) {
    return (<Fragment>
        <Helmet title={pageData?.meta.seoTitle ?? pageData?.title ?? "TAT"}/>
        <Hero.Hero color="primary" bold={true}>
          <Hero.Body>
            <Container>
              <h1 class="title">{pageData?.title}</h1>
              <h2 class="subtitle"><Markup class="content" markup={pageData.subtitle}/></h2>
              <div class="columns is-mobile">
                <div class="column is-half is-offset-3">
                  <Field hasAddons={true}>
                    <Control>
                      <Button color="primary" inverted={true}>Découvrir la PACES</Button>
                    </Control>
                    <Control><Button color="primary" inverted={true}>Les services du tutorat</Button></Control>
                  </Field>
                </div>
              </div>
            </Container>
          </Hero.Body>
        </Hero.Hero>
        {pageData.content.map(s => (
          <Section><StreamBlock block={s}/></Section>))}
      </Fragment>
    );
  }
  return <p class="has-text-danger">Autre page</p>
};

export default Home;
