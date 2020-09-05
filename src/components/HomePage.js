import React from 'react'
import HomePageTitle from './HomePageTitle'
import BookShelf from './BookShelf'

/* functional component */
const HomePage = () => {
    return(
        <div className="list-books">
           <HomePageTitle/>
           <BookShelf/>
        </div>
    )
}

export default HomePage
