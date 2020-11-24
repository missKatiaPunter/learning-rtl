import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Counter from './Counter';

test("the Counter component using a wrapper variable", () => {
    const wrapper = render(<Counter />);
    wrapper.debug();
    expect(wrapper.getByText('0').tagName).toBe('BUTTON');
    expect(wrapper.getByTestId('counter-button').tagName).toBe('BUTTON');
});

// You can use data attribute to select elements for testing with RTL

test("the Counter component", () => {
    const { debug, getByTestId } = render(<Counter />);
    debug();
    expect(getByTestId('counter-button').tagName).toBe('BUTTON');
})