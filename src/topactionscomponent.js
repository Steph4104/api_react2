import React, { Component } from 'react'
import './App.css'
import Button from 'react-bootstrap/lib/Button';

class TopActionsComponent extends Component {
  render() {
    return (
      <div>
                <Button bsStyle="primary"
                    onClick={() => this.props.changeAppMode('create')}> Create product
                </Button>
            </div>
    )
  }
}

export default TopActionsComponent
