import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Login from './SignInScreen';

describe('Login component', () => {
  test('should handle login with valid credentials', () => {
    const { getByTestId } = render(<Login />);
    const usernameInput = getByTestId('username-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-button');

    fireEvent.changeText(usernameInput, 'admin');
    fireEvent.changeText(passwordInput, 'password');
    fireEvent.press(loginButton);

    // Assert the login success scenario, e.g., redirect to home screen or show a success message
    // You can use the assertions provided by the testing library of your choice
  });

  test('should handle login with invalid credentials', () => {
    const { getByTestId } = render(<Login />);
    const usernameInput = getByTestId('username-input');
    const passwordInput = getByTestId('password-input');
    const loginButton = getByTestId('login-button');

    fireEvent.changeText(usernameInput, 'user');
    fireEvent.changeText(passwordInput, 'wrong_password');
    fireEvent.press(loginButton);

    // Assert the login failure scenario, e.g., show an error message or stay on the login screen
    // You can use the assertions provided by the testing library of your choice
  });
});
