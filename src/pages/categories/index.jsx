import { useParams } from "react-router-dom";
import { Categories } from "../../components/SidebarListContent/SidebarListContent";
import * as S from "./styles";

export const Category = () => {
  const params = useParams();
  const category = Categories.find(
    (category) => category.id === Number(params.id)
  );

  return (
    <S.header>
      <h1>
        {category.playlistName} № {category.id}
      </h1>
    </S.header>
  );
};
