import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

/* functional component */
const ShelfCompartment = (props) => {
    const {compartmentIndex,books,onChangeShelf} = props
    return(
        <div>
            <div className="bookshelf-books" key={compartmentIndex}>
                <ol className="books-grid">
                    {books.map( (book) => (
                        <Book
                            key={book.id}
                            book={book}
                            onChangeShelf={onChangeShelf}
                        />
                    ))}
                </ol>
            </div>
        </div>
        )
}

/* PropTypes are used to run typechecking */

ShelfCompartment.PropTypes = {
    compartmentIndex: PropTypes.number.isRequired,
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default ShelfCompartment
