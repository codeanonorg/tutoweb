import { FunctionalComponent, h } from "preact";
import { Navbar } from "preact-bulma";
import { useCallback, useState } from "preact/hooks";


const Header: FunctionalComponent = () => {
  const [active, setActive] = useState(false);
  const toggleActive = useCallback(() => setActive(!active), [active]);
  return (<Navbar.Navbar class="is-secondary">
    <Navbar.Brand active={active} onToggleExpand={toggleActive}><span>Tutoweb</span></Navbar.Brand>
    <Navbar.Menu active={active}>
      <Navbar.Menu side="start">
        <Navbar.MenuItem href="#">Navbar item</Navbar.MenuItem>
      </Navbar.Menu>
    </Navbar.Menu>
  </Navbar.Navbar>);
};

export default Header;
