// Import React
import * as React from 'react'
import { Helmet } from "react-helmet";
import favicon from '../images/favicon.ico'

// Define component
const NotFoundPage = () => {
  return (
    <main>
      <Helmet>
        <title>Error 404 - Not Found</title>
        <meta charset="UTF-8"></meta>
        <link rel="icon" href={favicon}/>
        <meta name="theme-color" content="#ebdbb2"></meta>
        <meta name="description" content="Zagdrath's personal website"></meta>
      </Helmet>
      <center>
        <h1>Error 404 - Not Found</h1>
        <p>The requested URL was not found on this server.</p>
      </center>
    </main>
  )
}

// Export component
export default NotFoundPage
