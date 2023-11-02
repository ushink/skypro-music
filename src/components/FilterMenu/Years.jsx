import * as S from "./FilterMenu.styles.js";

const Years = ["По умолчанию", "Сначала старые", "Сначала новые"];

const list = Years.map((Year) => (
  <li>
    <S.FilterListItem href="#">{Year}</S.FilterListItem>
  </li>
));

export default function ShowYears() {
  return (
    <S.FilterMenu>
      <S.FilterList>{list}</S.FilterList>
    </S.FilterMenu>
  );
}
