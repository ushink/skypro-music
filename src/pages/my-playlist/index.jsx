import MainNav from "../../components/NavMenu/NavMenu";
import MainSidebar from "../../components/Sidebar/Sidebar";
import Filter from "../../components/TrackFilter/TrackFilter";
import CenterblockSearch from "../../components/TrackList/centerblockSearch";
import ContentTitle from "../../components/TrackList/ContentTitle";
// import PlaylistContent from "../../components/TrackListContent/TracklistContent";
import * as S from "./styles";
import { useGetFavTrackQuery } from "../../services/trackQuery";

export const MyPlaylist = ({ isLoaded }) => {
  const { data = [] } = useGetFavTrackQuery();

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
                {!isLoaded ? (
                  `В этом плейлисте нет треков`
                ) : (
                  <ul>
                    {data.map((item) => (
                      <li key={item.id}>{item.name}</li>
                    ))}
                  </ul>
                )}
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
