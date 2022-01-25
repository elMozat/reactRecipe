import React from 'react';
import Forma from './Forma.css';

function Form() {
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Form;
