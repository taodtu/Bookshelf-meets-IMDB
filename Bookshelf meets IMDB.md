

# Bookshelf meets IMDB

You will make your own virtual bookshelf react app using the Google Books api (and, if you choose, the OMDB Movie Database api) - see bottom of the readme for info re: accessing these apis.

The main focus of this task is doing api requests on LIFECYCLE methods. **Use api requests to the google books api to get the bookshelf data**

---

## User stories:

A user of your site should be able to:

- search for all books with a keyterm (making a new api request for each search term, not an emoji-search-esque filter)
- see a list of all the books that satisfy that keyterm
- each book in the list should be shown as a book ‘card’ which shows:
  - title
  - author
  - rating
- be able to click a book ‘card’ to either:

  - make another request **to see if there is a movie adaptation of this book using the OMDB api** (see notes below for links to this api). This will display information about the movie adaptation (poster, release date, director etc.), or a message saying that no movies exist for this title name.

  OR/

  - make another request to get **more info for that book using the book’s Google Books ‘selfLink’**, displaying the book’s description. NOTE this description needs to come from second request, one for that specific book (not the description available from the first request with a keyword)

- visualise some part of the data in a graphs (i.e. rating, release date)

Think about which React lifecycle methods which you’ll need to use to control when each ‘get’ request happens. The main focus of this is LIFECYCLE methods, so make sure to get these working before looking at graphs like in the lecture.

---

## API Info

### Google Books:

Have a look at the endpoints for the Google Books API here: https://developers.google.com/books/docs/v1/using#intro

Getting all volumes by keyword: https://developers.google.com/books/docs/v1/using#WorkingVolumes
Getting info for one book: https://developers.google.com/books/docs/v1/using#RetrievingVolume

### OMDB (Movie Database)

Using the OMDB api will need an apikey - this is easy to obtain from their website (can do this using the top right link in the OMDB api website/docs)

OMDB api docs: http://www.omdbapi.com

Use the ‘`s`’ query to search by a keyword: e.g. http://www.omdbapi.com/?s=jurassic&apikey=${your-api-key-here}

Use the ‘`t`’ query to search by a specific title: http://www.omdbapi.com/?t=shrek&apikey=${your-api-key-here}
