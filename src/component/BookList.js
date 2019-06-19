import React from 'react';
import BookItem from './BookItem';
import { List, ListItem } from '@material-ui/core'

const BookList = ({ books }) => {
 return (
  <List align='center'>
   {books.map(book => {
    return <ListItem key={book.id}>
     <BookItem book={book} />
    </ListItem>
   })}
  </List>
 );
};

export default BookList;