import React from 'react';
import PropTypes from 'prop-types';

function NewAlcoholForm(props){
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleNewAlcoholFormSubmission(event) {
    event.preventDefault();
    props.onNewAlcoholCreation({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value});
    _name.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
    _remaining.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewAlcoholFormSubmission}>
        <input
          type='text'
          id='name'
          placeholder='name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder='brewer'
          ref={(input) => {_location = input;}}/>
        <input
          type='text'
          id='description'
          placeholder='description'
          ref={(input) => {_location = input;}}/>
        <input
          type='text'
          id='abv'
          placeholder='alcohol content'
          ref={(input) => {_location = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='sell price'
          ref={(input) => {_location = input;}}/>
        <input
          type='text'
          id='remaining'
          placeholder='amount in stock'
          ref={(input) => {_location = input;}}/>
        <button type='submit'>Add</button>
      </form>
    </div>
  );

}

NewAlcoholForm.propTypes = {
  onNewAlcoholCreation: PropTypes.func
};

export default NewAlcoholForm;
