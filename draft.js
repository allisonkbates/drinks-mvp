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
    this.setState({
      
    });
  }

  render() {
    const apiKey = process.env.API_KEY;
  /* {
  "fields": {
    "drink-pretty-name": "Negroni",
    "ingredients-short": "Gin, Campari & sweet vermouth"
  }
 }*/
    return (
      <div className="container">
        <Nav />
        <div className="messages"> {/* Expand this for styling based on response */}
          {/*<p>{response.message}</p>*/}
        </div>
        <div className="form-container">
          <h1>Add Your Favorite Cocktail</h1>
          <p>Tell us about your favorite cocktail & we'll add it to our database :) </p>
          <form action={`https://api.airtable.com/v0/appAO4a1ExR0c5Upn/Drinks?api_key=${apiKey}`} method='post' onSubmit={handleSubmit}>
            <label for="cocktailName">Cocktail Name</label>
            <input type="text" for="cocktailName"></input>
            <label for="ingredients">What ingredients are in your cocktail?</label>
            <input type="text" name="ingredients"></input>
            <label for="prep">Tell us how to make your cocktali</label>
            <input type="text" name="prep"></input>
            <label for="alcohol">Select the alcohol type:</label>
            <select id="alcohol" name="alcohol">
              <option value="vodka">Vodka</option>
              <option value="gin">Gin</option>
              <option value="whiskey">Whiskey</option>
              <option value="rum">Rum</option>
            </select>
          {/*<label for="upload">Upload a Photo</label>
            <input type="file" name="upload"></input>*/}
            <label for="submit">Submit</label>
            <input type="submit" name="submit"></input>
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

