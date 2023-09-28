import { AppGlobal } from "./App.styles.global.js";
import { AppRoutes } from "./routes";
import { useState } from "react";

function App() {
  const [user] = useState(false);

  return (
    <>
      <AppGlobal />
      <AppRoutes user={user} />
    </>
  );
}

export default App;
