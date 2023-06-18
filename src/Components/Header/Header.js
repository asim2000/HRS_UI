import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-light text-dark p-5">
          <div className="container bg-light p-5">
            <h1 className="display-4 fw-bold">Welcome to Admin Dashboard</h1>
          </div>
</div>
      </div>
    )
  }
}
