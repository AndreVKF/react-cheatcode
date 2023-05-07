import React from "react"
import Book from "./Book"

import "./BookList.css"

import { books } from "./utils/books"

const mapArray = true

const BookList = () => {
  if (mapArray) {
    return (
      <section className="booklist">
        {books.map((book, index, number) => {
          return (
            // <Book
            //   key={index}
            //   bookUrl={book.bookUrl}
            //   title={book.title}
            //   author={book.author}
            // />
            <Book {...book} key={index} /> // spread out props
          )
        })}
      </section>
    )
  }

  return (
    <div className="booklist">
      <Book
        bookUrl="https://images-na.ssl-images-amazon.com/images/I/51wftSlLhjL._AC_UL600_SR600,400_.jpg"
        title="Café com Deus Pai"
        author="Júnior Rostirola"
      >
        <p>
          Aliqua incididunt fugiat qui laboris. Ipsum nisi enim nostrud eiusmod
          ex dolore dolor cupidatat proident enim aliquip et dolore deserunt.
          Esse magna ullamco nulla in fugiat. Fugiat excepteur qui adipisicing
          aliquip reprehenderit proident ad ullamco minim occaecat nisi id sit.
        </p>
      </Book>
      <Book
        bookUrl="https://images-na.ssl-images-amazon.com/images/I/81iqH8dpjuL._AC_UL600_SR600,400_.jpg"
        title="A Biblioteca da Meia-Noite"
        author="Matt Haig"
      />
      <Book
        bookUrl="https://images-na.ssl-images-amazon.com/images/I/719l8zrOFrL._AC_UL600_SR600,400_.jpg"
        title="Minha Primeira Biblioteca"
        author="Ciranda Cultural"
      />
    </div>
  )
}

export default BookList
