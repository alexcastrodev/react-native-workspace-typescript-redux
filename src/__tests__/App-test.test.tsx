/**
 * @format
 */
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

import 'react-native';
import React from 'react';
import App from '../App';
import {render, screen} from '@testing-library/react-native';
import {Layout} from '../components/Layout';

import {useAppSelector, useAppDispatch} from '@company/core';

jest.mock('@company/core');

describe('App', () => {
  it('renders correctly', () => {
    (useAppDispatch as jest.Mock).mockReturnValue(() => {});
    (useAppSelector as jest.Mock).mockReturnValue({
      name: 'Luke skywalker',
      isLoading: false,
      isAuthenticated: true,
      isError: false,
    });

    render(<App />, {wrapper: Layout});
    expect(screen).toMatchSnapshot();
    expect(screen.queryAllByTestId('block--user-name')).toHaveLength(1);
    expect(
      screen
        .getByTestId('block--user-name')
        .children.includes('Luke skywalker'),
    ).toBeTruthy();
    expect(screen.queryAllByTestId('block--bar-notification')).toHaveLength(0);
  });
  it('renders render a error page', () => {
    (useAppDispatch as jest.Mock).mockReturnValue(() => {});
    (useAppSelector as jest.Mock).mockReturnValue({
      name: '',
      isLoading: false,
      isAuthenticated: false,
      isError: true,
    });

    render(<App />, {wrapper: Layout});
    expect(screen.queryAllByTestId('block--bar-notification')).toHaveLength(1);
  });
});
