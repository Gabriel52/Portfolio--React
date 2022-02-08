import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router} from "react-router-dom";
import { GlobalStyled } from "./styles/global";
import { ShowCase } from "./components/ShowCase/ShowCase";
import { AboutSection } from "./components/AboutSection/AboutSection";
import { SectionService } from "./components/SectionService/SectionService";
import { PortfolioSection } from "./components/PortfolioSection/PortfolioSection";
import { ContactServices } from "./components/ContactServices/ContactServices";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <ShowCase/>
        <AboutSection />
        <SectionService/>
        <PortfolioSection />
        <ContactServices />
        <Footer />
      </Router>
      <GlobalStyled/>
    </>
  );
}

export default App;
