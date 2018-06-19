import React, { Component } from 'react'
import './App.css'

class TopActionsComponent extends Component {
  render() {
    return (
      <div>
                <button type='button'
                    onClick={() => this.props.changeAppMode('create')}
                    className='btn btn-primary margin-bottom-1em'> Create product
                </button>
            </div>
    )
  }
}

export default TopActionsComponent
