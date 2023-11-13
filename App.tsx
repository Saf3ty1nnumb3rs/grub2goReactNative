import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { RestaurantsScreen } from 'features/restaurants/screens/RestaurantsScreen';

import { useAppFonts } from 'hooks/useAppFonts';
import { theme } from 'theme';

export default function App() {
  const { oswaldLoaded, latoLoaded } = useAppFonts(); // add fun fonts here and check below
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </ThemeProvider>
  );
}
