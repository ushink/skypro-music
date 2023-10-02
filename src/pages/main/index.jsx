import { useState, useEffect } from "react";
import MainNav from "../../components/NavMenu/NavMenu.jsx";
import MainTracklist from "../../components/TrackList/TrackList.jsx";
import MainSidebar from "../../components/Sidebar/Sidebar.jsx";
import BarPlayer from "../../components/AudioPlayer/AudioPlayer.jsx";
import * as S from "./styles.js";
import { getTodos } from "../../api.js";

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

  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTodos().then((todos) => {
      setTracks(todos);
    });
  }, []);

  const [currentTodo, setCurrentTodo] = useState(null);

  const handleTodoClick = (track) => {
    setCurrentTodo(track);
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav />
            <MainTracklist
              isLoaded={isLoaded}
              tracks={tracks}
              handleTodoClick={handleTodoClick}
            />
            <MainSidebar isLoaded={isLoaded} />
          </S.Main>
          {currentTodo ? (
            <BarPlayer isLoaded={isLoaded} currentTodo={currentTodo} />
          ) : null}
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
