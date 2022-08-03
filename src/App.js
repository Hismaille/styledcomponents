import React, {useState} from "react";
import { temaClaro, temaEscuro } from './Components/UI/temas'
import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from "./Components/globalStyled";
import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { BtnTema } from "./Components/UI";
import SwitherTema from "./Components/SwitherTema";


function App() {
  const [tema, setTema] = useState(true);

  const toggleTema = () => {
    setTema((tema) => !tema)
  }

  return (
   <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyled />
      <BtnTema onClick={toggleTema}>
        <SwitherTema tema={tema} /> 
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
