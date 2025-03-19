import Header from "./components/common/Header";
import MainContainer from "./components/common/MainContainer";

import AboutSection from "./components/presentation/home/AboutSection";
import { CareerSection } from "./components/presentation/home/CareerSection";
import SkillSection from "./components/presentation/home/SkillSection";

function App() {
  return (
    <>
      <Header />
      <MainContainer className="home">
        <AboutSection />
        <SkillSection />
        <CareerSection />
      </MainContainer>
    </>
  );
}

export default App;
