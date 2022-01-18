// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import {Helmet} from "react-helmet";
import { StaticImage } from 'gatsby-plugin-image'

// Define component
const MusicPage = () => {
  return (
    <main>
      <Helmet>
        <title>Music</title>
        <meta charset="UTF-8"></meta>
        <meta name="icon" href="../images/favicon.ico"/>
        <meta name="theme-color" content="#ebdbb2"></meta>
        <meta name="description" content="Zagdrath's personal website"></meta>
        <script src="https://kit.fontawesome.com/97db0162e4.js" crossorigin="anonymous"></script>
      </Helmet>
      <body>
        <h1 id="fancyboi">Music</h1>
        <hr></hr>
        <Link style={{ float: `right` }} to="/"> {'<-'} Back</Link>
        <h3>Rock / Metal</h3>
        <dl>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Pink_Floyd">Pink Floyd</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Syd_Barrett">Syd Barrett</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Blue_%C3%96yster_Cult">Blue Öyster Cult</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Ween">Ween</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Tool_(band)">TOOL</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Neutral_Milk_Hotel">Neutral Milk Hotel</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/UFO_(band)">UFO</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/The_Alan_Parsons_Project">The Alan Parsons Project</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/King_Crimson">King Crimson</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Soundgarden">Soundgarden</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Frank_Zappa">Frank Zappa</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/The_Mothers_of_Invention">The Mothers Of Invention</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/David_Bowie">David Bowie</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Tenacious_D">Tenacious D</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Weezer">Weezer</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Foo_Fighters">Foo Fighters</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Nirvana_(band)">Nirvana</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Metallica">Metallica</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Greta_Van_Fleet">Greta Van Fleet</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Ghost_(Swedish_band)">Ghost</a></dt>
        </dl>
        <h3>Hip-Hop / Rap</h3>
        <dl>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Yung_Gravy">Yung Gravy</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Bbno$">bbno$</a></dt>
          <dt>~{'>'} <a href="https://open.spotify.com/artist/7Gz6VlTVwlNtBNMYV4OI3w">Shotgun Willy</a></dt>
          <dt>~{'>'} <a href="https://open.spotify.com/artist/62F9BiUmjqeXbBztCwiX1U">Lil Darkie</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Cypress_Hill">Cypress Hill</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Warren_G">Warren G</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Tupac_Shakur">2Pac</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Ice_Cube">Ice Cube</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Dr._Dre">Dr. Dre</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Snoop_Dogg">Snoop Dogg</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/The_Notorious_B.I.G.">The Notorious B.I.G.</a></dt>
        </dl>
        <h3>Pop / Indie</h3>
        <dl>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Billie_Eilish">Billie Eilish</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Cavetown">Cavetown</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Clairo">Clairo</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Ricky_Montgomery">Ricky Montgomery</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Chloe_Moriondo">chloe moriondo</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Aurora_(singer)">AURORA</a></dt>
          <dt>~{'>'} <a href="https://no.wikipedia.org/wiki/Silja_Sol">Silja Sol</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Girl_in_Red">girl in red</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Jack_Stauber">Jack Stauber</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Porter_Robinson">Porter Robinson</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Dodie_(singer)">dodie</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Mxmtoon">mxmtoon</a></dt>
        </dl>
        <h3>Soundtracks</h3>
        <dl>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Hamilton_(album)">Hamilton</a></dt>
          <dt>~{'>'} <a href="https://en.wikipedia.org/wiki/Dear_Evan_Hansen">Dear Evan Hansen</a></dt>
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
export default MusicPage
