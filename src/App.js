import React, { Component } from 'react'

class App extends Component {
  
  state = {
    name: '',
    email: '',
    password: '',
  }
  
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault()
          
          console.log(this.state)
          
          
        }}
      >
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            minLength="2"
            maxLength="128"
            onChange={e => this.setState({ name: e.target.value })}
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
            onChange={e => this.setState({ email: e.target.value })}
            value={this.state.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            minLength="7"
            maxLength="128"
            required
            onChange={e => this.setState({ password: e.target.value })}
            value={this.state.password}
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    )
  }
}

export default App
