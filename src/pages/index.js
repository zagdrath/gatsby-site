// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import {Helmet} from "react-helmet";
import { StaticImage } from 'gatsby-plugin-image'

// Define component
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Zagdrath</title>
        <meta charset="UTF-8"></meta>
        <meta name="icon" href="../images/favicon.ico"/>
        <meta name="theme-color" content="#ebdbb2"></meta>
        <meta name="description" content="Zagdrath's personal website"></meta>
        <script src="https://kit.fontawesome.com/97db0162e4.js" crossorigin="anonymous"></script>
      </Helmet>
      <body>
        <h1 id="fancyboi">Zagdrath</h1>
        <p>Information Technology Specialist</p>
        <hr></hr>
        <h3>About</h3>
        <p>Hey, my name is Cody Wellman, but I usually go by Zagdrath online and, I am an information technology specialist working towards getting my associate's degree in computer networking systems and security. On the side, I am also a software developer, but that is mainly just a hobby. I am also a huge advocate of free software and the GNU/Linux operating systems.</p>
        <h3>Contact</h3>
        <dl>
          <dt>~{'>'} <a href="mailto:zagdrath@member.fsf.org"><i class="fas fa-envelope"></i> Email</a></dt>
          <dt>~{'>'} <a href="https://github.com/zagdrath"><i class="fab fa-github"></i> GitHub</a></dt>
        </dl>
        <hr></hr>
        <h3>Stuff</h3>
        <dl>
          <dt>~{'>'} <Link to="projects"><i class="fas fa-project-diagram"></i> Projects</Link></dt>
          <dt>~{'>'} <Link to="links"><i class="fas fa-link"></i> Links</Link></dt>
          <dt>~{'>'} <Link to="quotes"><i class="fas fa-quote-right"></i> Quotes</Link></dt>
          <dt>~{'>'} <Link to="music"><i class="fas fa-music"></i> Music</Link></dt>
          <dt>~{'>'} <a href="http://files.zagdrath.xyz:8081/"><i class="fas fa-folder"></i> Files</a></dt>
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
export default IndexPage
