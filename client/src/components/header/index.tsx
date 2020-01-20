import { FunctionalComponent, h } from "preact";
import { Container, Navbar } from "preact-bulma";
import { useCallback, useState } from "preact/hooks";


const Header: FunctionalComponent = () => {
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive(!active), [active]);
  return (<Navbar.Navbar class="is-secondary">
    <Container>
      <Navbar.Brand active={active} onToggleExpand={toggleActive}><span>TAT</span></Navbar.Brand>
      <Navbar.Menu active={active}>
        <Navbar.Menu side="start">
          <Navbar.Dropdown title="Le Tutorat">
            <Navbar.DropdownItem>Présentation</Navbar.DropdownItem>
            <Navbar.DropdownItem>Agréments & Soutien</Navbar.DropdownItem>
          </Navbar.Dropdown>
          <Navbar.MenuItem>Services Proposés</Navbar.MenuItem>
        </Navbar.Menu>
      </Navbar.Menu>
    </Container>
  </Navbar.Navbar>);
};

export default Header;
