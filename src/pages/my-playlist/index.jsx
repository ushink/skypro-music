import MainNav from "../../components/NavMenu/NavMenu";
import MainSidebar from "../../components/Sidebar/Sidebar";
import Filter from "../../components/TrackFilter/TrackFilter";
import CenterblockSearch from "../../components/TrackList/centerblockSearch";
import ContentTitle from "../../components/TrackList/ContentTitle";
import * as S from "./styles";
import { useGetFavTrackQuery } from "../../services/trackQuery";
import PlaylistItem from "../../components/PlaylistItem/PlaylistItem";

export const MyPlaylist = ({ isLoaded }) => {
  const { favTracks = [] } = useGetFavTrackQuery();

  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav />
            <S.MainCenterblock>
              <CenterblockSearch />
              <S.CenterblockH2>Мой плейлист</S.CenterblockH2>
              <Filter />
              <S.CenterblockContent>
                <ContentTitle />
                <S.ContentPlaylist>
                {favTracks.length === 0 && "В этом плейлисте нет треков"}

                  {favTracks.map((track) => (
                    <PlaylistItem
                      isLoaded={isLoaded}
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
            <MainSidebar />
          </S.Main>
          <S.Footer></S.Footer>
        </S.Container>
      </S.Wrapper>
    </>
  );
};
// export default MyPlaylist;
