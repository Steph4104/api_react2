import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import TopActionsComponent from './topactionscomponent';
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
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  componentDidMount() {
    axios.get(home_link+"read.php").then(response => this.setState({products: response.data.records}))
  }

  handleInput(event){
    var value = event.target.value;
      axios.get(home_link+"search.php?s="+value).then(response => {this.setState({products: response.data.records});
    })
  }

  handleClick(event){
    var value = event.target.value;
      axios.get(home_link+"filter.php?category="+value).then(response => {this.setState({products: response.data.records});
    })
  }

  render() {

       // $('.page-header h1').text('Read Products');
    return (
      <div className='overflow-hidden'>
            
        <TopActionsComponent changeAppMode={this.props.changeAppMode} />

        <input type='text' name='search' onChange={this.handleInput}/>
                  
        <select onChange={this.handleClick}>
        <option value="all">All</option>
          <option value="upper">Upper</option>
          <option value="core">Core</option>
          <option value="lower">Lower</option>
          <option value="total">Total</option>
        </select>
    
        <ProductsTable
          products={this.state.products}
        changeAppMode={this.props.changeAppMode} />
      </div>
    )
  }
}

export default ReadProductsComponent
