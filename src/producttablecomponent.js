import React, { Component } from 'react'
import './App.css'
import ProductRow from './productrowcomponent'
import Table from 'react-bootstrap/lib/Table';


class ProductsTable extends Component {
  render() {
    var rows = this.props.products
        .map(function(product, i) {
            return (
                <ProductRow
                    key={i}
                    product={product}
                    changeAppMode={this.props.changeAppMode} />
            );
        }.bind(this));
   return(
            !rows.length
                ? <div className='alert alert-danger'>No products found.</div>
                :
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Category</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
        );
  }
}

export default ProductsTable
