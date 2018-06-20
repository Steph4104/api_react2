import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import TopActionsComponent from './topactionscomponent';
import ProductsTable from './producttablecomponent';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';


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
     document.getElementById('header').innerHTML = 'Read Products';
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
      var object = this.refs.header;
      console.log(object);
        //$('.page-header h1').text('Read Products');
    return (
      <div>
        <Grid>    
          <Col xs={12} md={3}> 
            <TopActionsComponent changeAppMode={this.props.changeAppMode} />
          </Col>
          <Col xs={12} mdOffset={3} md={3}> 
          <InputGroup>
      <InputGroup.Addon><Glyphicon glyph="search" /></InputGroup.Addon>
              <FormControl
      id="search"
      name="search"
      type="text"
      label="Text"
      placeholder="search"
      onChange={this.handleInput}/>
           </InputGroup>
             </Col>
          <Col xs={12} md={3}> 

          <FormGroup controlId="formControlsSelect">
      
      <FormControl componentClass="select" placeholder="All" onChange={this.handleClick}>
        <option value="all">All</option>
          <option value="upper">Upper</option>
          <option value="core">Core</option>
          <option value="lower">Lower</option>
          <option value="total">Total</option>
      </FormControl>
   
    </FormGroup>       
      </Col>
          <Col xs={12} md={12}> 
        <ProductsTable
          products={this.state.products}
        changeAppMode={this.props.changeAppMode} />
        </Col>
       </Grid> 
      </div>
    )
  }
}

export default ReadProductsComponent
