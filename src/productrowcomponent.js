import React, { Component } from 'react'
import './App.css'
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

class ProductRow extends Component {
  render() {
    return (
      <tr>
            <td>{this.props.product.name}</td>
            <td>{this.props.product.description}</td>
            <td>{this.props.product.price}</td>
            <td>{this.props.product.category_name}</td>
            <td>
                <ButtonToolbar>
                    <Button bsStyle="info"
                        onClick={() => this.props.changeAppMode('readOne', this.props.product.id)}>Read One
                    </Button>
                     <Button bsStyle="primary"
                        onClick={() => this.props.changeAppMode('update', this.props.product.id)}>Edit
                    </Button>
                    <Button bsStyle="danger"
                        onClick={() => this.props.changeAppMode('delete', this.props.product.id)}>Delete
                    </Button>
                </ButtonToolbar>
            </td>
        </tr>
    )
  }
}

export default ProductRow
