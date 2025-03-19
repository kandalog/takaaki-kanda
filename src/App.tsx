import Header from "./components/common/Header";
import MainContainer from "./components/common/MainContainer";

import AboutSection from "./components/presentation/home/AboutSection";
import SkillSection from "./components/presentation/home/SkillSection";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <AboutSection />
        <SkillSection />
      </MainContainer>
    </>
  );
}

export default App;
