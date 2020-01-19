import { Fragment, h } from "preact";
import { Container, Hero, Section } from "preact-bulma";
import html from "preact-html";
import { useEffect, useState } from "preact/hooks";
import { getPage, isHomePage, Page } from "../../api";

interface Props {
}

const Home: preact.FunctionalComponent<Props> = props => {
  const [data, setData] = useState<Page | null>(null);
  useEffect(() => {
    getPage(3).then(setData);
  }, []);
  if (!data) {
    return <Hero.Hero>
      <Hero.Body>
        <p class="has-text-centered">Loading...</p>
      </Hero.Body>
    </Hero.Hero>
  }
  if (isHomePage(data)) {
    return (<Fragment>
        <Hero.Hero color="primary">
          <Hero.Body>
            <h1 class="title">{data?.title}</h1>
            <h2 class="subtitle">{data.subtitle}</h2>
          </Hero.Body>
        </Hero.Hero>
        <Section>
          {data.content.map(s => (<Container>{html(s.value)}</Container>))}
        </Section>
      </Fragment>
    );
  }
  return <p class="has-text-danger">Autre page</p>
};

export default Home;
