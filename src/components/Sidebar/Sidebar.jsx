import SidebarList from "../SidebarListContent/SidebarListContent.jsx";
import SkeletonSidebarList from "../skeleton/SkeletonSidebar.jsx";
import * as S from "./Sidebar.styles.js";
import SidebarPersonal from "./SidebarPersonal.jsx";

export default function MainSidebar({ isLoaded, handleLogout }) {
  return (
    <S.MainSidebar>
      <SidebarPersonal handleLogout={handleLogout} />
      <S.SidebarBlock>
        {isLoaded ? <SkeletonSidebarList /> : <SidebarList />}
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
