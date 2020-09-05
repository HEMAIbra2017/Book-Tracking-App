import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

/* functional component */
const AddBook = (props) => {
    const {currentBooks} = props
    return (
        <div className='open-search'>
               <Link to={{ pathname:'/search',
                   state: { booksFromHomepage: currentBooks }}}/>
        </div>
    )
}

/*  type_checking on the props for a component */

AddBook.PropTypes = {
    currentBooks:PropTypes.array.isRequired
}
export default AddBook
