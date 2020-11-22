import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe("Checks RTL works fine", () => {
  test("App should render without crashing and should render text RTL", () => {
    render(<App />);
    screen.debug();
    screen.getByText("Learning RTL");
  });
})
