import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <header class="masthead mb-auto">
                    <div class="inner">
                        <h1 class="masthead-brand">DCCS Task Manager</h1>
                        <p class="lead">Welcome to the DCCS Task Manager App.</p>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header
