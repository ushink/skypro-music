import * as S from "./FilterMenu.styles.js";

const Authors = [
  "Nero",
  "Tom Boxer",
  "Calvin Harris, Disciples",
  " minthaze",
  "Nero",
  "Tom Boxer",
  "Calvin Harris, Disciples",
];
const list = Authors.map((Author) => (
  <li>
    <S.FilterListItem href="#">{Author}</S.FilterListItem>
  </li>
));

export default function ShowAuthors() {
  return (
    <S.FilterMenu>
      <S.FilterList>{list}</S.FilterList>
    </S.FilterMenu>
  );
}
