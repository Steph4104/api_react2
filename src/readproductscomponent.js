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
        console.log(home_link);
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

                <input type='text' name='search' onChange={this.handleInput}/>
                  
                 <select onChange={this.handleClick}>
  <option value="books">books</option>
  <option value="movies">movie</option>
  <option value="fashion">fashion</option>
  <option value="electronics">electronics</option>
  <option value="">all</option>
  
</select>
    
                <ProductsTable
                    products={this.state.products}
                    changeAppMode={this.props.changeAppMode} />
            </div>
    )
  }
}

export default ReadProductsComponent
