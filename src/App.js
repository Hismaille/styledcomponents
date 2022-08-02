import React from "react";
import { GlobalStyled } from "./Components/globalStyled";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";

function App() {
  return (
    <>
      <GlobalStyled />
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
