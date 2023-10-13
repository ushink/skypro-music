import { useState } from "react";
import { AppGlobal } from "./App.styles.global.js";
import { AppRoutes } from "./routes";
import { UserContext } from "./Context/UserContext.js";

function App() {
  const [user, setUser] = useState(window.localStorage.getItem("user") || null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppGlobal />
      <AppRoutes user={user} setUser={setUser} />
    </UserContext.Provider>
  );
}

export default App;
