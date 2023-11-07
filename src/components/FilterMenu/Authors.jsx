import * as S from "../Filter/TrackFilter.styles";

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
    <S.FilterMenuAuthor>
      <S.FilterListAuthor>{list}</S.FilterListAuthor>
    </S.FilterMenuAuthor>
  );
}
