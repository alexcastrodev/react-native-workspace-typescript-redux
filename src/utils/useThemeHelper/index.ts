import {useColorScheme} from 'react-native';

export default function useThemeHelper() {
  const isDarkMode = useColorScheme() === 'dark';

  return {
    isDarkMode,
  };
}
