import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoChevronForwardOutline } from "react-icons/io5";

import { theme } from "../../theme";
import TextInput from "../reusable-ui/TextInput";
import { BsPersonCircle } from "react-icons/bs";
import PrimaryButton from "../reusable-ui/Button";
import { authenticateUser } from "../../api/user";
import Welcome from "./Welcome";

const LoginForm = () => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  // comportements
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userReceived = await authenticateUser(username);
    setUsername("");
    navigate(`order/${userReceived.username}`);
    // navigate("/order", { replace: true, state: { username } });
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <Welcome />

      <TextInput
        value={username}
        onChange={handleChange}
        placeholder={"Entre ton prénom"}
        required
        Icon={<BsPersonCircle />}
        className="input-login"
        version={"normal"}
      />

      <PrimaryButton
        label={"Accéder à mon espace"}
        Icon={<IoChevronForwardOutline />}
        version="normal"
      />
    </LoginFormStyled>
  );
};

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Amatic SC", cursive;
  padding: 0rem 2rem 2rem;
  border-radius: ${theme.borderRadius.round};
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  text-align: center;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: ${theme.gridUnit * 5}px;
    width: 100%;
  }

  h1 {
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P5};
  }

  h2 {
    color: ${theme.colors.greySemiDark};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.P4};
  }
  h4 {
    color: ${theme.colors.white};
    margin: 20px 10px 10px;
    font-size: ${theme.fonts.size.P3};
  }

  .input-login {
    margin: 18px 0;
  }
`;

export default LoginForm;
