import { useState } from "react";
import "./App.css";
import PrimaryInput from "./components/input/PrimaryInput";
import { Button, Spacer } from "@chakra-ui/react";
import useIdentityMutation from "./hooks/useIdentityMutation";

function App() {
  const { mutate } = useIdentityMutation();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const submit = () => {
    mutate({
      email,
      firstName,
      lastName,
    });
  };

  return (
    <div className="fullScreen">
      <div className="container">
        <form>
          <div className="name-form-container">
            <PrimaryInput
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              name="firstName"
              label="Primeiro Nome"
              placeholder="ex: Eledilson"
            />
            <PrimaryInput
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              name="lastName"
              label="Sobrenome"
              placeholder="ex: Bernardes"
            />
          </div>

          <Spacer height={2} />

          <PrimaryInput
            value={lastName}
            onChange={(event) => setlastName(event.target.value)}
            name="email"
            label="E-mail"
            placeholder="ex: fulano@email.com"
          />

          <Button colorScheme="blackAlpha" w="50%" mt={6} onClick={submit}>
            Enviar
          </Button>
        </form>

        <Spacer w={2} maxW={6} />

        <div className="product-details">
          <h2>Assinatura Mensal</h2>
          <Spacer w={2} maxW={6} />
          <p>Você irá pagar</p>
          <span>R$ 250,00</span>
          <Spacer w={2} maxW={6} />
          <p>
            Regras: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iure.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
