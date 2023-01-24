import { GlobalStyled } from "./styles/global";

import { Container } from "./components/Container/Container";
import i18next from './i18n/i18n'

import './i18n'

function App() {
  return (
    <>
      <Container />
      <GlobalStyled/>
    </>
  );
}

export default App;
