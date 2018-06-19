// component that contains the logic to delete a product
import React, { Component } from 'react'

import axios from 'axios'
import './App.css'

    class DeleteProductComponent extends Component {
    // on mount, change header text

    
         constructor(props, context) {
    super(props, context);
    this.onDelete = this.onDelete.bind(this);
   
  }
    componentDidMount(){
      //  $('.page-header h1').text('Delete Product');
    }
    
    // handle single row deletion
    onDelete(){
    
        // product to delete
        var productId = this.props.productId;
    
        // submit form data to api

    axios.post("http://www.api-training.sclmedia.ca/product/delete.php", {
      data: JSON.stringify({'id' : productId})
    })
    .then(response => {
      console.log(response);
        this.props.changeAppMode('read');
      //form.reset()
    })
    .catch(function(error) {
      console.log(error);
      //form.reset()
    });

    }
 
    render(){
 
        return (
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <div className='panel panel-default'>
                        <div className='panel-body text-align-center'>Are you sure?</div>
                        <div className='panel-footer clearfix'>
                            <div className='text-align-center'>
                                <button onClick={this.onDelete}
                                    className='btn btn-danger m-r-1em'>Yes</button>
                                <button onClick={() => this.props.changeAppMode('read')}
                                    className='btn btn-primary'>No</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>
        );
    }
};

export default DeleteProductComponent
