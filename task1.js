/* for loop:- 
const books = [
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "year": 1960
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "year": 1949
    }
  ]
  for (let i = 0; i < books.length; i++) {
    console.log(books[i].title);
    console.log(books[i].author);
    console.log(books[i].year);
  }
  */
//-----------------------------------------------
/* for...in loop:-
const books = [
        {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "year": 1925
      },
      {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1960
      },
      {
        "title": "1984",
        "author": "George Orwell",
        "year": 1949
      }
  ];
  
  for (const index in books) {
    console.log(books[index].title);
    console.log(books[index].author);
    console.log(books[index].year);
  } 
  */
  //-------------------------------------------
/*for...of loop:-
  const books = [
        {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "year": 1925
      },
      {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1960
      },
      {
        "title": "1984",
        "author": "George Orwell",
        "year": 1949
      }
  ];
  
  for (const book of books) {
    console.log(book.title);
    console.log(book.author);
    console.log(book.year);
  }
*/
//------------------------------------------------
const books = [
    {
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "year": 1925
      },
      {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1960
      },
      {
        "title": "1984",
        "author": "George Orwell",
        "year": 1949
      }
  ];
  
  books.forEach((book) => {
    console.log(book.title);
    console.log(book.author);
    console.log(book.year);
  });
  
