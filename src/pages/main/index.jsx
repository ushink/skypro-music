import { useState, useEffect } from "react";
import MainNav from "../../components/NavMenu/NavMenu.jsx";
import MainTracklist from "../../components/TrackList/TrackList.jsx";
import MainSidebar from "../../components/Sidebar/Sidebar.jsx";
import BarPlayer from "../../components/AudioPlayer/AudioPlayer.jsx";
import * as S from "./styles.js";
import { getTodos } from "../../api.js";

export const Main = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [tracks, setTracks] = useState(["", "", "", "", ""]);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [addTodoError, setAddTodoError] = useState(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        await getTodos().then((todos) => {
          setTracks(todos);
        });
        setAddTodoError(false);
      } catch (error) {
        setAddTodoError(error.message);
      } finally {
        setIsLoaded(false);
      }
    }
    fetchTracks();
  }, []);

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
              addTodoError={addTodoError}
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
