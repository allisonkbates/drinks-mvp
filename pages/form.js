import React, { Component } from 'react';
import Nav from '../components/Nav';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cocktailName: '',
      ingredients: '',
      preparation: '',
      alcohol: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let inputName = event.target.name;
    let val = event.target.value;
    this.setState({[inputName]: val});
  }

  handleSubmit(event) {
    event.preventDefault();
    let fields = {
      fields: {
        cocktailName: this.state.cocktailName,
        ingredients: this.state.ingredients,
        preparation: this.state.preparation,
        alcohol: this.state.alcohol

      }
    }
    const res = fetch(`https://api.airtable.com/v0/appAO4a1ExR0c5Upn/Drinks?api_key=`, {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: { 'Content-Type': 'application/json' }
      });
    console.log(res);
  }

  /*handleSubmit(event) {
    event.preventDefault();
    try {
      const res = fetch(`https://api.airtable.com/v0/appAO4a1ExR0c5Upn/Drinks?api_key=`, {
        method: 'POST',
        body: JSON.stringify(cocktail),
        headers: { 'Content-Type': 'application/json' }
      });

      const json = res.json();

      if (json.success) {
        setResponse({
          type: 'success',
          message: 'Thank you for reaching out to us.'
        });
        console.log(response);
        console.log(cocktail);
      } else {
        setResponse({
          type: 'error',
          message: json.message
        });
        console.log(response);
        console.log(cocktail);
      }
    } catch (e) {
      console.log('An error occurred', e);
      setResponse({
        type: 'error',
        message: 'An error occured while submitting the form'
      });
      console.log(response);
      console.log(cocktail);
    }
  };*/
  
  /* {
  "fields": {
    "drink-pretty-name": "Negroni",
    "ingredients-short": "Gin, Campari & sweet vermouth"
  }
 }*/render() {
    return (
      <div className="container">
        <Nav />
        <div className="messages"> {/* Expand this for styling based on response */}
          <p></p>
        </div>
        <div className="form-container">
          <h1>Add Your Favorite Cocktail</h1>
          <p>Tell us about your favorite cocktail & we'll add it to our database :) </p>
          <form onSubmit={this.handleSubmit}> {/*action={`https://api.airtable.com/v0/appAO4a1ExR0c5Upn/Drinks?api_key=keyQQoRmHWp7ZAgP9`} method='post' onSubmit={handleSubmit}*/}
            <label htmlFor="cocktailName">Cocktail Name</label>
            <input type="text" name="cocktailName" onChange={this.handleChange}></input>
            <label htmlFor="ingredients">What ingredients are in your cocktail?</label>
            <input type="text" name="ingredients" onChange={this.handleChange}></input>
            <label htmlFor="preparation">Tell us how to make your cocktali</label>
            <input type="text" name="preparation" onChange={this.handleChange}></input>
            <label htmlFor="alcohol">Select the alcohol type:</label>
            <select id="alcohol" name="alcohol" onChange={this.handleChange}>
              <option value="vodka">Vodka</option>
              <option value="gin">Gin</option>
              <option value="whiskey">Whiskey</option>
              <option value="rum">Rum</option>
            </select>
          {/*<label for="upload">Upload a Photo</label>
            <input type="file" name="upload"></input>*/}
            <label htmlFor="submit">Submit</label>
            <button type="submit" name="submit">Submit</button>
          </form>
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
          }
          .form-container {
            background-color: white;
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
            width: 50vw;
            min-height: 600px;
            margin: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-family: sans-serif;
          }

          form {
            display: flex;
            flex-direction: column;
          }

          label {
            padding: 8px 0px;
          }

          input {
            margin-bottom: 12px;
          }
        `}</style>
      </div>
    )
  }
}

export default Form;

