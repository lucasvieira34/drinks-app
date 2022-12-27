import { useFonts } from "expo-font";
import { NativeBaseProvider, StatusBar } from "native-base";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import { Menu } from "./src/screens/Menu";
import { THEME } from "./src/styles/theme";

export default function App() {
  const [isFontLoaded] = useFonts({
    "GeneralSans-400": require("./src/assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-600": require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-700": require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {isFontLoaded ? <Menu /> : <Loading />}
    </NativeBaseProvider>
  );
}
