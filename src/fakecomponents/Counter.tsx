import React, { Component } from 'react'

export default class Counter extends Component {
    state = { counter: 0}
    render() {
        return (
            <div>
                <button data-testid="counter-button">{this.state.counter}</button>
            </div>
        )
    }
}
