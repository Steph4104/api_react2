import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

const home_link = 'http://www.api-training.sclmedia.ca/product/';

class CreateProductComponent extends Component {

 // initial mode is 'read' mode
    constructor(props, context) {
    super(props, context);
    this.onNameChange = this.onNameChange.bind(this);
    this.onCategoryChange = this.onCategoryChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onSave = this.onSave.bind(this);
      this.state = {
          categories: [],
            selectedCategoryId: -1,
            name: '',
            description: '',
            price: '',
            successCreation: null
    };
  }

      componentDidMount() {

        axios.get('http://www.api-training.sclmedia.ca/category/read.php').then(categories => 
          this.setState({categories: categories.data.records})
      )

       //$('.page-header h1').text('Create product');
      }

      onCategoryChange(e){
        this.setState({selectedCategoryId: e.target.value});
    }
    
    // handle name change
    onNameChange(e){
        this.setState({name: e.target.value});
    }
    
    // handle description change
    onDescriptionChange(e){
        this.setState({description: e.target.value});
    }
    
    // handle price change
    onPriceChange(e){
        this.setState({price: e.target.value});
    }
    
    // handle save changes button clicked
    onSave(e){
        // data in the form
        var form_data={
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category_id: this.state.selectedCategoryId
        };
    console.log(form_data);
        // submit form data to api


    axios.post("http://www.api-training.sclmedia.ca/product/create.php", {
      data: JSON.stringify(form_data)
    })
    .then(response => {
      console.log(response);
       this.setState({successCreation: response.data.message});
      //form.reset()
    })
    .catch(function(error) {
      console.log(error);
      //form.reset()
    });
    
        e.preventDefault();
    }

  render() {
     var categoriesOptions = this.state.categories.map(function(category){
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            );
        });
    return (

    <div>
                {
                this.state.successCreation == "Product was created." ?
                    <div className='alert alert-success'>
                        Product was saved.
                    </div>
                : null
                }
     
                {
                    this.state.successUpdate == "Unable to create product." ?
                        <div className='alert alert-danger'>
                            Unable to update product. Please try again.
                        </div>
                    : null
                }
     
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
                            <td>
                                <input
                                    type='text'
                                    className='form-control'
                                    value={this.state.name}
                                    required
                                    onChange={this.onNameChange} />
                            </td>
                        </tr>
     
                        <tr>
                            <td>Description</td>
                            <td>
                                <textarea
                                    type='text'
                                    className='form-control'
                                    required
                                    value={this.state.description}
                                    onChange={this.onDescriptionChange}></textarea>
                            </td>
                        </tr>
     
                        <tr>
                            <td>Price ($)</td>
                            <td>
                                <input
                                    type='number'
                                    step="0.01"
                                    className='form-control'
                                    value={this.state.price}
                                    required
                                    onChange={this.onPriceChange}/>
                            </td>
                        </tr>
     
                        <tr>
                            <td>Category</td>
                            <td>
                                <select
                                    onChange={this.onCategoryChange}
                                    className='form-control'
                                    value={this.state.selectedCategoryId}>
                                    <option value="-1">Select category...</option>
                                    {categoriesOptions}
                                    </select>
                            </td>
                        </tr>
     
                        <tr>
                            <td></td>
                            <td>
                                <button
                                    className='btn btn-primary'
                                    onClick={this.onSave}>Save Changes</button>
                            </td>
                        </tr>
     
                        </tbody>
                    </table>
                </form>
            </div>

    )
  }
};

export default CreateProductComponent
