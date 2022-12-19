import {renderHook, act} from '@testing-library/react-native';
import useLayout from './useLayout';

it('useLayout Drawer', async () => {
  const {result} = renderHook(() => useLayout());
  expect(result.current.isDrawerOpen).toBeFalsy();

  act(() => {
    result.current.toggleDrawer();
  });
  expect(result.current.isDrawerOpen).toBeTruthy();
});
