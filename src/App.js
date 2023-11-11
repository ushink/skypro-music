import { useState } from "react";
import { AppGlobal } from "./App.styles.global.js";
import { AppRoutes } from "./routes";
import { UserContext } from "./Context/UserContext.js";
import { useSelector } from "react-redux";
import { trackPlaySelector } from "./Store/selectors/track.js";
import BarPlayer from "./components/AudioPlayer/AudioPlayer.jsx";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user") || null);
  const currentTrack = useSelector(trackPlaySelector);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    window.location.reload(); // перезагрузка страницы
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppGlobal />
      <AppRoutes user={user} setUser={setUser} handleLogout={handleLogout} />
      {currentTrack ? <BarPlayer currentTrack={currentTrack} /> : null}
    </UserContext.Provider>
  );
}

export default App;
