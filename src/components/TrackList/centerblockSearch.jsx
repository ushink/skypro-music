import * as S from "./TrackList.styles.js";

export default function CenterblockSearch({ onChange }) {
  return (
    <S.CenterblockSearch>
      <S.SearchSvg>
        <use xlinkHref="../img/icon/sprite.svg#icon-search"></use>
      </S.SearchSvg>
      <S.SearchText
        type="search"
        placeholder="Поиск"
        name="search"
        onChange={(event) => onChange(event.target.value.toLowerCase())}
      />
    </S.CenterblockSearch>
  );
}
