import React from 'react'
import PropTypes from 'prop-types'

/* functional component */
const HomePageTitle = (props) => {
    return (
        <div className='list-books-title'>
            <h1>{props.title}</h1>
        </div>
    )
}

/* Default prop value */
HomePageTitle.defaultProps = {
    title: 'Book Tracking App'
}

/* typechecking on the props for a component */
HomePageTitle.PropTypes = {
    title: PropTypes.string.isRequired
}

export default HomePageTitle
