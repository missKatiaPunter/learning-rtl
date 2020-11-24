import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test("the Counter component using a wrapper variable", () => {
    const wrapper = render(<Counter />);
    wrapper.debug();
    expect(wrapper.getByText('0').tagName).toBe('BUTTON');
    expect(wrapper.getByTestId('counter-button').tagName).toBe('BUTTON');
});

//Get element with getByTestId (data api)
// You can use data attribute to select elements for testing with RTL

test("the Counter component", () => {
    const { debug, getByTestId } = render(<Counter />);
    debug();
    expect(getByTestId('counter-button').tagName).toBe('BUTTON');
    expect(getByTestId('counter-button').textContent).toBe('0');
})

// Using fireEvent

test("the Counter component with fire event", () => {
    const { getByTestId } = render(<Counter />);
    const counterButton = getByTestId('counter-button');
    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('1');
    fireEvent.click(counterButton);
    expect(counterButton.textContent).toBe('2');
})