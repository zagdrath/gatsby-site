// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet";
import favicon from '../images/favicon.ico'
import { StaticImage } from 'gatsby-plugin-image'

// Define component
const QuotesPage = () => {
  return (
    <main>
      <Helmet>
        <title>Quotes</title>
        <meta charset="UTF-8"></meta>
        <link rel="icon" href={favicon}/>
        <meta name="theme-color" content="#ebdbb2"></meta>
        <meta name="description" content="Zagdrath's personal website"></meta>
        <script src="https://kit.fontawesome.com/97db0162e4.js" crossorigin="anonymous"></script>
      </Helmet>
      <body>
        <h1 id="fancyboi">Quotes</h1>
        <hr></hr>
        <Link style={{ float: `right` }} to="/"> {'<-'} Back</Link>
        <h3>Noam Chomsky</h3>
        <p>“We shouldn't be looking for heroes, we should be looking for good ideas.”</p>
        <p>“If we don't believe in freedom of expression for people we despise, we don't believe in it at all.”</p>
        <h3>Julian Assange</h3>
        <p>“You have to start with the truth. The truth is the only way that we can get anywhere. Because any decision-making that is based upon lies or ignorance can't lead to a good conclusion.”</p>
        <p>“One of the best ways to achieve justice is to expose injustice.”</p>
        <p>“The only way to keep a secret is to never have one.”</p>
        <h3>Edward Snowden</h3>
        <p>“Arguing that you don't care about the right to privacy because you have nothing to hide is no different than saying you don't care about free speech because you have nothing to say.”</p>
        <p>“Under observation, we act less free, which means we effectively are less free.”</p>
        <h3>Linus Torvalds</h3>
        <p>“Intelligence is the ability to avoid doing work, yet getting the work done.”</p>
        <p>“Only wimps use tape backup. Real men just upload their important stuff on ftp and let the rest of the world mirror it.”</p>
        <p>"Microsoft isn't evil, they just make really crappy operating systems."</p>
        <h3>Terry A. Davis</h3>
        <p>"What's reality? I don't know. When my bird was looking at my computer monitor I thought, that bird has no idea what he's looking at. And yet what does the bird do? Does he panic? No, he can't really panic, he just does the best he can."</p>
        <p>"If you guys have ideas for things to do, let me know. I probably will ignore them."</p>
        <h3>H. P. Lovecraft</h3>
        <p>"The oldest and strongest emotion of mankind is fear, and the oldest and strongest kind of fear is fear of the unknown."</p>
        <p>"The most merciful thing in the world... is the inability of the human mind to correlate all its contents."</p>
        <p>"The world is indeed comic, but the joke is on mankind."</p>
        <h3>Gene Ween</h3>
        <p>“In life sometimes, in the universe, you have to close some doors to have others open”</p>
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
export default QuotesPage
