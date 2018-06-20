import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import YouTube from 'react-youtube';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';

const home_link = 'http://www.api-training.sclmedia.ca/product/';

class ReadOneProductComponent extends Component {

 // initial mode is 'read' mode
  constructor(props, context) {
    super(props, context);

    this.state = {
      id: 0,
      name: '',
      description: '',
      price: 0,
      category_name: '',
      player: null,
    };
  }

  componentDidMount() {
    var productId = this.props.productId;

    axios.get(home_link+"read_one.php?id="+productId).then(response => {  
      this.setState({id: response.data.id}),
      this.setState({name: response.data.name}),
       this.setState({category_name: response.data.category_name}),
      this.setState({description: response.data.description}),
      this.setState({price: response.data.price})
    })
  }

 onReady = (event) => {
    console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
    this.setState({
      player: event.target,
    });
  }

  onPlay = (event) => {
    this.setState({
      title: this.state.player.getVideoData().title,
    });
  }

  render() {
    return (

     <div>
       <Grid>    
          <Col xs={12} md={3}> 
        <Button bsStyle="primary"
          onClick={() => this.props.changeAppMode('read')}>Read Products
        </Button>
        </Col>
        <Col xs={12} md={9}> 
          <div class="d-block mx-auto"><YouTube videoId={this.state.description} onReady={this.onReady} onPlay={this.onPlay}/>
        </div>  
        </Col>
        <Col xs={12} md={12}>              
          <Table striped bordered condensed hover>
            <tbody>
              <tr>
                  <td>Name</td>
                  <td>{this.state.name}</td>
              </tr>
     
              <tr>
                  <td>Video id</td>
                  <td>{this.state.description}</td>
              </tr>
     
              <tr>
                  <td>Temps</td>
                  <td>{this.state.price}</td>
              </tr>
     
              <tr>
                  <td>Category</td>
                  <td>{this.state.category_name}</td>
              </tr>
            </tbody>
          </Table>    
            </Col>
          </Grid>  
      </div>
    )
  }
};

export default ReadOneProductComponent
