import SidebarList from "../SidebarListContent/SidebarListContent.jsx";
import SkeletonSidebarList from "../skeleton/SkeletonSidebar.jsx";
import * as S from "./Sidebar.styles.js";

export default function MainSidebar({ isLoaded }) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        {isLoaded ? <SidebarList /> : <SkeletonSidebarList />}
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
