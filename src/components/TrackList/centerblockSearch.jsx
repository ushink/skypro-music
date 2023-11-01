import * as S from "./TrackList.styles.js";

export default function CenterblockSearch() {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="../img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText type="search" placeholder="Поиск" name="search" />
    </S.CenterblockSearch>
  );
}
