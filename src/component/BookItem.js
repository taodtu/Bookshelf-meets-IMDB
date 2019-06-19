import React, { Component } from 'react';
import Details from './Detail';
import Movie from './Movie'
import axios from 'axios';
import { ListItemText } from '@material-ui/core'

class BookItem extends Component {
  state = {
    detail: '',
    movie: null
  }

  handleClick = ({ target }) => {
    const { name } = target;
    if (name === 'selfLink') { this.showSelfLink(this.props.book.selfLink) };
    if (name === 'movie') { this.showMovie(this.props.book.volumeInfo.title) };
  }
  showSelfLink = (link) => {
    axios.get(link)
      .then(result => {
        console.log(result.data.volumeInfo.description)
        this.setState({ detail: result.data.volumeInfo.description, movie: null })
      })
  }
  showMovie = (title) => {
    axios.get(`http://www.omdbapi.com/?t=${title}&apikey=3db2d290`)
      .then(result => {
        console.log(result)
        this.setState({ detail: '', movie: result.data })
      })
  }
  render() {
    const { book } = this.props;
    const { detail, movie } = this.state;
    return (
      <div>
        <ListItemText primary={book.volumeInfo.title}>{book.volumeInfo.title}</ListItemText>
        <ListItemText > {book.volumeInfo.authors} </ListItemText>
        <button name="selfLink" onClick={this.handleClick} >Show more details</button>
        <button name="movie" onClick={this.handleClick}>Find relevent movies</button>
        {detail && <Details detail={detail} />}
        {movie && <Movie movie={movie} />}
      </div>
    );
  }
};

export default BookItem;