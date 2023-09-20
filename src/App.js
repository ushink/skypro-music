import "./App.css";
import { useState, useEffect } from "react";
import MainNav from "./components/NavMenu/NavMenu.jsx";
import MainTracklist from "./components/TrackList/TrackList.jsx";
import MainSidebar from "./components/Sidebar/Sidebar.jsx";
import BarPlayer from "./components/AudioPlayer/AudioPlayer.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      const timeout = setTimeout(() => {
        setIsLoaded(true);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isLoaded]);

  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <MainTracklist isLoaded={isLoaded} />
          <MainSidebar isLoaded={isLoaded} />
        </main>
        <BarPlayer isLoaded={isLoaded} />
        <footer className="footer"></footer>
      </div>
    </div>
  );
}

export default App;
