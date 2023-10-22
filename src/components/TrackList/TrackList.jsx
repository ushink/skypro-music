import PlaylistContent from "../TrackListContent/TracklistContent.jsx";
import Filter from "../TrackFilter/TrackFilter.jsx";
import CenterblockSearch from "./centerblockSearch.jsx";
import * as S from "./TrackList.styles.js";
import ContentTitle from "./ContentTitle.jsx";

export default function MainTracklist({
  tracks,
  isLoaded,
  handleTrackClick,
  addTrackError,
}) {
  return (
    <S.MainCenterblock>
      <CenterblockSearch />
      <S.CenterblockH2>Треки</S.CenterblockH2>
      <Filter />
      <S.CenterblockContent>
        <ContentTitle />
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
