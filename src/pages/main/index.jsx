import { useState, useEffect } from "react";
import MainNav from "../../components/NavMenu/NavMenu.jsx";
import MainTracklist from "../../components/TrackList/TrackList.jsx";
import MainSidebar from "../../components/Sidebar/Sidebar.jsx";
import BarPlayer from "../../components/AudioPlayer/AudioPlayer.jsx";
import * as S from "./styles.js";

export const Main = () => {
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
};
