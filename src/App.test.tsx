import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("Checks RTL works fine", () => {
  test("App should render without crashing", () => {
    render(<App />);
  });
})
