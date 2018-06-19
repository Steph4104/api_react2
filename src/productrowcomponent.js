import React, { Component } from 'react'
import './App.css'

class ProductRow extends Component {
  render() {
    return (
      <tr>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.description}</td>
            <td>${parseFloat(this.props.product.price).toFixed(2)}</td>
            <td>{this.props.product.category_name}</td>
            <td>
                <button type="button"
                    onClick={() => this.props.changeAppMode('readOne', this.props.product.id)}
                    className='btn btn-info m-r-1em'> Read One
                </button>
                 <button type="button"
                    onClick={() => this.props.changeAppMode('update', this.props.product.id)}
                    className='btn btn-primary m-r-1em'> Edit
                </button>
                <button type="button"
                    onClick={() => this.props.changeAppMode('delete', this.props.product.id)}
                    className='btn btn-danger'> Delete
                </button>
            </td>
        </tr>
    )
  }
}

export default ProductRow
