import React, { Component } from 'react'
import './App.css'

class TopFiltersComponent extends Component {
   // initial mode is 'read' mode
     constructor(props, context) {
    super(props, context);
      this.state = {
        value:'select'
    };
  };
  render() {
    var filteredProducts = this.state.products;
    return (
       <div>
                 <select onChange={this.handleClick} defaultValue="Books" value={this.state.value}>
  <option value="books">books</option>
  <option value="movies">movie</option>
  <option value="fashion">fashion</option>
  <option value="electronics">electronics</option>
  <option value="">all</option>
  
</select>

            </div>
    )
  }
}

export default TopFiltersComponent
