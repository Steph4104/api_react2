import React, { Component } from 'react'

import axios from 'axios'
import './App.css'

const home_link = 'http://www.api-training.sclmedia.ca/product/';

class ReadOneProductComponent extends Component {

 // initial mode is 'read' mode
     constructor(props, context) {
    super(props, context);
   // this.changeAppMode = this.changeAppMode.bind(this);
      this.state = {
            id: 0,
            name: '',
            description: '',
            price: 0,
            category_name: ''
    };
  }

      componentDidMount() {
var productId = this.props.productId;


        console.log(home_link);
        axios.get(home_link+"read_one.php?id="+productId).then(response => {
          this.setState({category_name: response.data.category_name}),
          this.setState({id: response.data.id}),
          this.setState({name: response.data.name}),
          this.setState({description: response.data.description}),
          this.setState({price: response.data.price})
      })
      }

    //       componentWillUnmount() {
    //     this.axios.abort();
    // }

  render() {
     console.log("test");
    return (

     <div>
                <a href='#'
                    onClick={() => this.props.changeAppMode('read')}
                    className='btn btn-primary margin-bottom-1em'>
                    Read Products
                </a>
     
                <form onSubmit={this.onSave}>
                    <table className='table table-bordered table-hover'>
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{this.state.name}</td>
                        </tr>
     
                        <tr>
                            <td>Description</td>
                            <td>{this.state.description}</td>
                        </tr>
     
                        <tr>
                            <td>Price ($)</td>
                            <td>${parseFloat(this.state.price).toFixed(2)}</td>
                        </tr>
     
                        <tr>
                            <td>Category</td>
                            <td>{this.state.category_name}</td>
                        </tr>
     
                        </tbody>
                    </table>
                </form>
            </div>
    )
  }
};

export default ReadOneProductComponent
