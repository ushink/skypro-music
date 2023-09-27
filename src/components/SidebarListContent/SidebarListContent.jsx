import * as S from "./SidebarListContent.styles.js";
import { Link } from "react-router-dom";

export const Categories = [
  {
    id: 1,
    playlistName: "day's playlist",
    artwork: "img/playlist01.png",
  },
  {
    id: 2,
    playlistName: "100 dance hits",
    artwork: "img/playlist02.png",
  },
  {
    id: 3,
    playlistName: "indie charge",
    artwork: "img/playlist03.png",
  },
];

const list = Categories.map((category) => (
  <S.SidebarItem key={category.id}>
    <Link to={`/category/${category.id}`}>
      {" "}
      <S.SidebarLink href="#">
        <S.SidebarImg src={category.artwork} alt={category.playlistName} />
      </S.SidebarLink>
    </Link>
  </S.SidebarItem>
));

export default function SidebarList() {
  return <S.SidebarList>{list}</S.SidebarList>;
}
