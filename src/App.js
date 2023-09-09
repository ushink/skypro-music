import "./App.css";
import MainNav from "./components/NavMenu.jsx";
import MainTracklist from "./components/TrackList.jsx";
import MainSidebar from "./components/Sidebar.jsx";
import BarPlayer from "./components/AudioPlayer.jsx";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <MainTracklist />
          <MainSidebar />
        </main>
        <BarPlayer />
        <footer className="footer"></footer>
      </div>
  </div>
  );
}

export default App;
