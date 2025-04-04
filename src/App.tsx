import Header from "./components/common/Header";
import MainContainer from "./components/common/MainContainer";

import AboutSection from "./components/presentation/home/AboutSection";
import { CareerSection } from "./components/presentation/home/CareerSection";
import SkillSection from "./components/presentation/home/SkillSection";
import ProjectSection from "./components/presentation/home/ProjectSection";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <>
      <Header />
      <MainContainer className="home">
        <AboutSection />
        <SkillSection />
        <CareerSection />
        <ProjectSection />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
