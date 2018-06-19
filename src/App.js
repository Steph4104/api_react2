import React, { Component } from 'react';
import './App.css';
import ReadOneProductComponent from './readonecomponent';
import CreateProductComponent from './createproductcomponent';
import UpdateProductComponent from './updateproductcomponent';
import DeleteProductComponent from './deleteproductcomponent';
import ReadProductsComponent from './readproductscomponent';


// component that decides which main component to load: read or create/update
  class MainApp extends Component {
 
    // initial mode is 'read' mode
     constructor(props, context) {
    super(props, context);
    this.changeAppMode = this.changeAppMode.bind(this);
      this.state = {
            currentMode: 'read',
            productId: null
    };
  }
 

    // used when use clicks something that changes the current mode
    changeAppMode (newMode, productId) {
     // console.log(newMode);

         this.setState({currentMode: newMode});
            if(productId !== undefined){
            this.setState({productId: productId});
        }
    }
 
    // render the component based on current or selected mode
    render(){
 
        var modeComponent =
            <ReadProductsComponent
            changeAppMode={this.changeAppMode} />;
 console.log(this.state.currentMode);
        switch(this.state.currentMode){
            case 'read':
                break;
            case 'readOne':
            console.log('here');
                modeComponent = <ReadOneProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'create':
                modeComponent = <CreateProductComponent changeAppMode={this.changeAppMode}/>;
                break;
            case 'update':
                modeComponent = <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }
 
        return (
          
          modeComponent
          
          )
    }
};

export default MainApp
