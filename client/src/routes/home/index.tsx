import { h } from "preact";
import {Hero} from "preact-bulma";

interface Props {}
const Home: preact.FunctionalComponent<Props> = props => {
    return (
      <Hero.Hero color="primary">
        <Hero.Body>
          <h1 class="title">Tutoweb</h1>
          <h2 class="subtitle">Site du tutorat PACES de l'<strong>Université Toulouse 3</strong> Paul Sabatier.</h2>
        </Hero.Body>
      </Hero.Hero>
    );
};

export default Home;
