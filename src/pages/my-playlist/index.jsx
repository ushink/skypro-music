import MainNav from "../../components/NavMenu/NavMenu";
import MainSidebar from "../../components/Sidebar/Sidebar";
import Filter from "../../components/TrackFilter/TrackFilter";
import CenterblockSearch from "../../components/TrackList/centerblockSearch";
import ContentTitle from "../../components/TrackList/ContentTitle";
import PlaylistItem from "../../components/PlaylistItem/PlaylistItem.jsx";
import * as S from "./styles";
import { useGetFavTrackQuery } from "../../services/trackQuery";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../../Store/selectors/track";
import { setTrack } from "../../Store/slices/trackSlice";

export const MyPlaylist = ({ isLoaded, handleLogout }) => {
  const dispatch = useDispatch();

  const auth = useSelector(authSelector);
  const { data = [] } = useGetFavTrackQuery({ auth });
  console.log(data);

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
                  {data.length === 0 && "В этом плейлисте нет треков"}

                  {data.map((track, index) => (
                    <PlaylistItem
                      isLoaded={isLoaded}
                      onClick={() => dispatch(setTrack({ track, index }))}
                      id={track.id}
                      name={track.name}
                      remix={track.remix}
                      author={track.author}
                      album={track.album}
                      seconds={track.duration_in_seconds}
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
