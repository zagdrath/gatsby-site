// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import {Helmet} from "react-helmet";
import favicon from '../images/favicon.ico'
import { StaticImage } from 'gatsby-plugin-image'

// Define component
const ProjectsPage = () => {
  return (
    <main>
      <Helmet>
        <title>Projects</title>
        <meta charset="UTF-8"></meta>
        <link rel="icon" href={favicon}/>
        <meta name="theme-color" content="#ebdbb2"></meta>
        <meta name="description" content="Zagdrath's personal website"></meta>
        <script src="https://kit.fontawesome.com/97db0162e4.js" crossorigin="anonymous"></script>
      </Helmet>
      <body>
        <h1 id="fancyboi">Projects</h1>
        <hr></hr>
        <Link style={{ float: `right` }} to="/"> {'<-'} Back</Link>
        <dl>
          <dt>~{'>'} <Link to="nokiaip440"> Nokia IP440 Firewall</Link></dt>
          <dt>~{'>'} <Link to="gnulinux"> An Introduction to GNU/Linux</Link></dt>
          <dt>~{'>'} <Link to="unixphilosophy"> An Introduction to Unix Philosophy</Link></dt>
          <dt>~{'>'} <Link to="stuff"> An Introduction to Web Browser Security</Link></dt>
        </dl>
        <hr></hr>
        <div>
          <StaticImage style={{ marginRight: `10px` }} alt="LearnHTMLToday" src="../images/learn.png"/>
          <StaticImage style={{ marginRight: `10px` }} alt="InternetPrivacyNow" src="../images/privacy.gif"/>
          <StaticImage style={{ marginRight: `10px` }} alt="#FreeAssangeNOW" src="../images/assange.png"/>
          <StaticImage style={{ marginRight: `10px` }} alt="MadeOnGNU/Linux" src="../images/gnu-linux.png"/>
          <StaticImage style={{ marginRight: `10px` }} alt="GNU" src="../images/gnu.png"/>
          <StaticImage style={{ marginRight: `10px` }} alt="RightToRepair" src="../images/right-to-repair.png"/>
          <StaticImage style={{ marginRight: `10px` }} alt="FSF" src="../images/fsf.png"/>
        </div>
        <p>This website is licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GNU General Public License v3.0</a>.</p>
      </body>
    </main>
  )
}

// Export component
export default ProjectsPage
