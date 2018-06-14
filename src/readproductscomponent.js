import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import TopActionsComponent from './topactionscomponent';
import TopFiltersComponent from './topfiltercomponent';
import ProductsTable from './producttablecomponent';
const home_link = 'http://www.api-training.sclmedia.ca/product/';
class ReadProductsComponent extends Component {
    // initial mode is 'read' mode
     constructor(props, context) {
    super(props, context);
      this.state = {
            products: [],
            value:'select'
    };
  };

  componentDidMount() {
        console.log(home_link);
        axios.get(home_link+"read.php").then(response => this.setState({products: response.data.records}))
      }


    handleInput(event){
        // this.setState({search: event.target.value});
      var value = event.target.value;
      console.log(value);
      axios.get(home_link+"search.php?s=watch").then(response => {this.setState({products: response.data.records});
    })
    }

    // on unmount, kill product fetching in case the request is still pending
    // componentWillUnmount() {
    //      source.cancel('Operation canceled by the user.');
    // }

  render() {
     var filteredProducts = this.state.products;
       // $('.page-header h1').text('Read Products');
    return (
      <div className='overflow-hidden'>
            
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
                <TopFiltersComponent/>

                <input type='text' name='search' defaultValue="watch" onChange={this.handleInput}/>
    
                <ProductsTable
                    products={this.state.products}
                    changeAppMode={this.props.changeAppMode} />
            </div>
    )
  }
}

export default ReadProductsComponent
