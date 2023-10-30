import { useState, useEffect } from "react";
import MainNav from "../../components/NavMenu/NavMenu.jsx";
import MainTracklist from "../../components/TrackList/TrackList.jsx";
import MainSidebar from "../../components/Sidebar/Sidebar.jsx";
import {
  setAllTracks,
  setCurrentPage,
  setCurrentPlaylist,
  setTrack,
} from "../../Store/slices/trackSlice.js";
import * as S from "./styles.js";
import { useDispatch } from "react-redux";
import { useGetTrackQuery } from "../../services/trackQuery.js";

export const Main = ({ handleLogout }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [addTrackError, setAddTrackError] = useState(null);

  const dispatch = useDispatch();
  const { data = [] } = useGetTrackQuery();

  useEffect(() => {
    try {
      dispatch(setAllTracks(data));
      dispatch(setCurrentPage("Main"));
    } catch (error) {
      setAddTrackError(error.message);
    } finally {
      setIsLoaded(false);
    }
  });

  const handleTrackClick = (track, index) => {
    dispatch(setTrack({ track, index }));
    dispatch(setCurrentPlaylist());
  };

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav handleLogout={handleLogout} />
            <MainTracklist
              isLoaded={isLoaded}
              handleTrackClick={handleTrackClick}
              addTrackError={addTrackError}
            />
            <MainSidebar isLoaded={isLoaded} handleLogout={handleLogout} />
          </S.Main>
          {/* {currentTrack ? (
            <BarPlayer isLoaded={isLoaded} />
          ) : null} */}
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
