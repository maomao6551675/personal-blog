import LandingPage from "./pages/LandingPage";
import { NextUIProvider, createTheme } from "@nextui-org/react";

const lightRetro = createTheme({
  type: "light",
  className: "light-retro",
});
function App() {
  return (
    <NextUIProvider theme={lightRetro}>
      <LandingPage />
    </NextUIProvider>
  );
}

export default App;
