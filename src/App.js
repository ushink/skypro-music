import { useState } from "react";
import { AppGlobal } from "./App.styles.global.js";
import { AppRoutes } from "./routes";
import { UserContext } from "./Context/UserContext.js";
import { useSelector } from "react-redux";
import { trackPlaySelector } from "./Store/selectors/track.js";
import BarPlayer from "./components/AudioPlayer/AudioPlayer.jsx";

function App() {
  const [user, setUser] = useState(window.localStorage.getItem("user") || null);
  const currentTrack = useSelector(trackPlaySelector);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppGlobal />
      <AppRoutes user={user} setUser={setUser} />
      {currentTrack ? <BarPlayer currentTrack={currentTrack} /> : null}
    </UserContext.Provider>
  );
}

export default App;
