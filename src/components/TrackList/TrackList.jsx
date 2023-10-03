import PlaylistContent from "../TrackListContent/TracklistContent.jsx";
import Filter from "../TrackFilter/TrackFilter.jsx";
import * as S from "./TrackList.styles.js";

export default function MainTracklist({
  tracks,
  isLoaded,
  handleTrackClick,
  addTrackError,
}) {
  return (
    <S.MainCenterblock>
      <S.CenterblockSearch>
        <S.SearchSvg>
          <use xlinkHref="img/icon/sprite.svg#icon-search"></use>
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </S.CenterblockSearch>
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter />
      <S.CenterblockContent>
        <S.ContentTitle>
          <S.PlaylistTitleCol>
            <S.Col01>Трек</S.Col01>
          </S.PlaylistTitleCol>
          <S.PlaylistTitleCol>
            <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
          </S.PlaylistTitleCol>
          <S.PlaylistTitleCol>
            <S.Col03>АЛЬБОМ</S.Col03>
          </S.PlaylistTitleCol>
          <S.PlaylistTitleCol>
            <S.Col04>
              <S.PlaylistTitleSvg alt="time">
                <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
              </S.PlaylistTitleSvg>
            </S.Col04>
          </S.PlaylistTitleCol>
        </S.ContentTitle>
        {addTrackError ? (
          `Не удалось загрузить плейлист, попробуйте позже. ${addTrackError}`
        ) : (
          <PlaylistContent
            isLoaded={isLoaded}
            tracks={tracks}
            handleTrackClick={handleTrackClick}
          />
        )}
      </S.CenterblockContent>
    </S.MainCenterblock>
  );
}
