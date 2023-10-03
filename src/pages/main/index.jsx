import { useState, useEffect } from "react";
import MainNav from "../../components/NavMenu/NavMenu.jsx";
import MainTracklist from "../../components/TrackList/TrackList.jsx";
import MainSidebar from "../../components/Sidebar/Sidebar.jsx";
import BarPlayer from "../../components/AudioPlayer/AudioPlayer.jsx";
import * as S from "./styles.js";
import { getTracks } from "../../api.js";

export const Main = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [tracks, setTracks] = useState(["", "", "", "", ""]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [addTrackError, setAddTrackError] = useState(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        await getTracks().then((Tracks) => {
          setTracks(Tracks);
        });
        setAddTrackError(false);
      } catch (error) {
        setAddTrackError(error.message);
      } finally {
        setIsLoaded(false);
      }
    }
    fetchTracks();
  }, []);

  const handleTrackClick = (track) => {
    setCurrentTrack(track);
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
              handleTrackClick={handleTrackClick}
              addTrackError={addTrackError}
            />
            <MainSidebar isLoaded={isLoaded} />
          </S.Main>
          {currentTrack ? (
            <BarPlayer isLoaded={isLoaded} currentTrack={currentTrack} />
          ) : null}
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
