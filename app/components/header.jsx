import { Alignment, Button, Navbar } from "@blueprintjs/core";

const Header = () => (
  <Navbar align={Alignment.CENTER}>
    <Navbar.Group align={Alignment.LEFT}></Navbar.Group>
    <Navbar.Group>
      <Navbar.Heading>MockIT</Navbar.Heading>
    </Navbar.Group>
    <Navbar.Group align={Alignment.RIGHT}>
      <Button className="bp3-minimal" text="New Account" />
      <Navbar.Divider />
      <Button className="bp3-minimal" text="Login" />
    </Navbar.Group>
  </Navbar>
);

export default Header;
