import MainNav from "../../components/NavMenu/NavMenu";
import MainSidebar from "../../components/Sidebar/Sidebar";
import Filter from "../../components/TrackFilter/TrackFilter";
import CenterblockSearch from "../../components/TrackList/centerblockSearch";
import ContentTitle from "../../components/TrackList/ContentTitle";
import PlaylistItem from "../../components/PlaylistItem/PlaylistItem.jsx";
import * as S from "./styles";
import { useLazyGetFavTrackQuery } from "../../services/trackQuery";
import { useDispatch, useSelector } from "react-redux";
import {
  authSelector,
  favoritePlaylistSelector,
} from "../../Store/selectors/track";
import {
  setCurrentPage,
  setCurrentPlaylist,
  setFavoritePlaylist,
  setTrack,
} from "../../Store/slices/trackSlice";
import { useEffect } from "react";

export const MyPlaylist = ({ isLoaded, handleLogout }) => {
  const dispatch = useDispatch();

  const auth = useSelector(authSelector);
  const [fetchFavTracks, { data }] = useLazyGetFavTrackQuery({ auth });
  // console.log(data);

  useEffect(() => {
    fetchFavTracks()
      .unwrap()
      .then((data) => {
        dispatch(setFavoritePlaylist(data));
        dispatch(setCurrentPage("Favorite"));
      })
      .catch((error) => console.error(error));
  }, [data]);

  const favTracks = useSelector(favoritePlaylistSelector);
  console.log(favTracks);

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
            <S.MainCenterblock>
              <CenterblockSearch />
              <S.CenterblockH2>Мои треки</S.CenterblockH2>
              <Filter />
              <S.CenterblockContent>
                <ContentTitle />
                <S.ContentPlaylist>
                  {favTracks.length === 0 && "В этом плейлисте нет треков"}

                  {favTracks.map((track, index) => (
                    <PlaylistItem
                      track={track}
                      isLoaded={isLoaded}
                      onClick={() => handleTrackClick(track, index)} // сделать slice для FavTracks
                      id={track.id}
                      name={track.name}
                      remix={track.remix}
                      author={track.author}
                      album={track.album}
                      seconds={track.duration_in_seconds}
                      isFavorite={(track.stared_user ?? []).find(
                        ({ id }) => id === auth.id
                      )}
                      Like={true}
                    />
                  ))}
                </S.ContentPlaylist>
              </S.CenterblockContent>
            </S.MainCenterblock>
            <MainSidebar handleLogout={handleLogout} />
          </S.Main>
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
