import * as S from "./Sidebar.styles.js";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext.js";

export default function SidebarPersonal({ handleLogout }) {
  // const { user } = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <S.SidebarPersonal>
      <S.SidebarPersonalName>{user.email}</S.SidebarPersonalName>
      <S.SidebarIcon onClick={handleLogout}>
        <svg alt="logout">
          <use xlinkHref="../img/icon/sprite.svg#logout"></use>
        </svg>
      </S.SidebarIcon>
    </S.SidebarPersonal>
  );
}
