import { useState, useEffect } from "react";
import MainNav from "./components/NavMenu/NavMenu.jsx";
import MainTracklist from "./components/TrackList/TrackList.jsx";
import MainSidebar from "./components/Sidebar/Sidebar.jsx";
import BarPlayer from "./components/AudioPlayer/AudioPlayer.jsx";
import * as S from "./App.styles.js";
import { AppGlobal } from "./App.styles.global.js";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      const timeout = setTimeout(() => {
        setIsLoaded(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isLoaded]);

  return (
    <>
      <AppGlobal />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav />
            <MainTracklist isLoaded={isLoaded} />
            <MainSidebar isLoaded={isLoaded} />
          </S.Main>
          <BarPlayer isLoaded={isLoaded} />
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
