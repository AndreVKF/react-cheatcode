import React from "react"

import "./Book.css"

const Book = ({ bookUrl, title, author, number, children }) => {
  // if event on form
  // must prevent default

  const buyBook = (title) => {
    console.log(title)
  }

  // destruct props
  return (
    <div className="book">
      <h2>{title}</h2>
      <p>{author}</p>
      <img src={bookUrl} alt="book img" />
      {children && children}
      {number && <span className="number"># {number + 1}</span>}
      <button type="button" onClick={() => buyBook(title)}>
        {" "}
        {/* buyBook(title) tries to invoke it immeditialy */}
        Buy Book
      </button>
    </div>
  )
}

export default Book
