/**
 * @format
 */
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

import 'react-native';
import React from 'react';
import App from '../App';
import {render, screen} from '@testing-library/react-native'
import { Layout } from '../components/Layout';

import { useAppSelector, useAppDispatch } from '@company/core';

jest.mock('@company/core')

;(useAppDispatch as jest.Mock).mockReturnValue(() => {})
;(useAppSelector as jest.Mock).mockReturnValue({
  name: 'Luke skywalker',
  isLoading: false,
  isAuthenticated: true
})


describe('App', () => {
  it('renders correctly', () => {
    render(<App />, { wrapper: Layout });
    expect(screen).toMatchSnapshot()
    expect(screen.queryAllByTestId('block--user-name')).toHaveLength(1)
    expect(screen.getByTestId('block--user-name').children.includes('Luke skywalker')).toBeTruthy()
  });
})
