import * as S from "./Authors.styles.js";

export default function ShowAuthors({ tracks, handleAuthorClick }) {
  const Authors = [...new Set(tracks?.map((track) => track.author))].sort();

  const list = Authors?.map((author) => (
    <li>
      <S.FilterListItem href="#" onClick={() => handleAuthorClick(author)}>
        {author}
      </S.FilterListItem>
    </li>
  ));

  return (
    <S.FilterMenu>
      <S.FilterList>{list}</S.FilterList>
    </S.FilterMenu>
  );
}
