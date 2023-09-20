import "./Sidebar.css";
import SidebarList from "../SidebarListContent.jsx";
import SkeletonSidebarList from "../skeleton/SkeletonSidebar.jsx";

export default function MainSidebar({ isLoaded }) {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        {isLoaded ? <SidebarList /> : <SkeletonSidebarList />}
      </div>
    </div>
  );
}
