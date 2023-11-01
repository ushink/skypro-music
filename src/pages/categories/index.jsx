import { useParams } from "react-router-dom";
import { Categories } from "../../components/SidebarListContent/SidebarListContent";
import MainNav from "../../components/NavMenu/NavMenu";
import Filter from "../../components/TrackFilter/TrackFilter";
import CenterblockSearch from "../../components/TrackList/centerblockSearch";
import ContentTitle from "../../components/TrackList/ContentTitle";
import SidebarPersonal from "../../components/Sidebar/SidebarPersonal";
import PlaylistItem from "../../components/PlaylistItem/PlaylistItem.jsx";
import * as S from "./styles";
import { useDispatch } from "react-redux";

export const Category = ({ isLoaded, handleLogout }) => {
  const params = useParams();
  const dispatch = useDispatch();

  const category = Categories.find(
    (category) => category.id === Number(params.id)
  );

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav handleLogout={handleLogout} />
            <S.MainCenterblock>
              <CenterblockSearch />
              <S.CenterblockH2>{category.playlistName}</S.CenterblockH2>
              <Filter />
              <S.CenterblockContent>
                <ContentTitle />
                <S.ContentPlaylist>
                  {/* {favTracks.length === 0 && "В этом плейлисте нет треков"}

                  {favTracks.map((track, index) => (
                    <PlaylistItem
                      isLoaded={isLoaded}
                      onClick={() => handleTrackClick(track, index)}
                      id={track.id}
                      name={track.name}
                      remix={track.remix}
                      author={track.author}
                      album={track.album}
                      seconds={track.duration_in_seconds}
                      isLiked={true}
                    />
                  ))} */}
                </S.ContentPlaylist>
              </S.CenterblockContent>
            </S.MainCenterblock>
            <S.MainSidebar>
              <SidebarPersonal handleLogout={handleLogout} />
            </S.MainSidebar>
          </S.Main>
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
