import {renderHook} from '@testing-library/react-native';
import useThemeHelper from '..';

const mockedColorScheme = jest.fn();

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  ...jest.requireActual('react-native/Libraries/Utilities/useColorScheme'),
  useColorScheme: mockedColorScheme,
}));

it('should return theme helper', () => {
  const hook = renderHook(() => useThemeHelper());

  expect(hook.result.current).toEqual({isDarkMode: false});
});
