import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import BookList from './component/BookList';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

const INITIAL_STATE = {
  books: [],
  searchTerm: ''
}

class App extends Component {

  state = {
    ...INITIAL_STATE
  }
  componentDidMount() {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+flower`)
      .then(({ data: { items } }) => {
        console.log(items)
        this.setState({ books: items })
      })
  }
  onChange = ({ target }) => {
    this.setState({ searchTerm: target.value })
  }
  onSubmit = (event) => {
    event.preventDefault();
    const { searchTerm } = this.state;
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=search+${searchTerm}`)
      .then(({ data: { items } }) => {
        this.setState({ books: items })
      })
  }

  render() {
    const { books, searchTerm } = this.state;
    return (
      <Paper align='center'>
        <Typography variant='h2' margin='normal' gutterBottom> Bookshelf meets IMDB </Typography>
        <form onSubmit={this.onSubmit} >
          <TextField name='title' defaultValue="Flower" autoFocus="true" label='Keyword' value={searchTerm} onChange={this.onChange} margin='none' />
          <span className="search" ><Button type='submit' variant="outlined" size="medium" margin='normal'> Search  </Button></span>
        </form>
        <BookList books={books} />
      </Paper>
    );
  }
}

export default App;
