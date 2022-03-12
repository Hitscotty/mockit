const { FormGroup, InputGroup } = require("@blueprintjs/core");

export default function Login() {
  return (
    <>
      <FormGroup label="Login" labelFor="login" labelInfo="(required)">
        <InputGroup id="username" placeholder="Username or Email" />
        <InputGroup id="password" placeholder="Password" />
      </FormGroup>
    </>
  );
}
