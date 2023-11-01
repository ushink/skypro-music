import * as S from "./TrackList.styles.js";

export default function ContentTitle() {
  return (
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
  );
}
