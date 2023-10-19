import { useState, useEffect } from "react";
import MainNav from "../../components/NavMenu/NavMenu.jsx";
import MainTracklist from "../../components/TrackList/TrackList.jsx";
import MainSidebar from "../../components/Sidebar/Sidebar.jsx";
import BarPlayer from "../../components/AudioPlayer/AudioPlayer.jsx";
import { setAllTracks, setTrack } from "../../Store/action/creators/track";
import * as S from "./styles.js";
import { getTracks } from "../../api.js";
import { useDispatch, useSelector } from "react-redux";
import { trackPlaySelector } from "../../Store/selectors/track.js";

export const Main = ({ setUser }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  // const [tracks, setTracks] = useState(["", "", "", "", ""]);
  // const [currentTrack, setCurrentTrack] = useState(null);
  const [addTrackError, setAddTrackError] = useState(null);

  const dispatch = useDispatch();
  const currentTrack = useSelector(trackPlaySelector);

  useEffect(() => {
    async function fetchTracks() {
      try {
        await getTracks().then((Tracks) => {
          dispatch(setAllTracks(Tracks));
          // setTracks(Tracks);
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
    dispatch(setTrack(track));
    // setCurrentTrack(track);   
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav handleLogout={handleLogout} />
            <MainTracklist
              isLoaded={isLoaded}
              // tracks={tracks}
              currentTrack={currentTrack}
              handleTrackClick={handleTrackClick}
              addTrackError={addTrackError}
            />
            <MainSidebar isLoaded={isLoaded} handleLogout={handleLogout} />
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
