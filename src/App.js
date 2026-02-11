import { GlobalStyled } from "./styles/global";
import ReactGA from 'react-ga';


import { Container } from "./components/Container/Container";

import './i18n'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_ID_METRIC_GA);
  }, []);

  return (
    <>
      <Container />
      <GlobalStyled/>
    </>
  );
}

export default App;
