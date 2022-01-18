// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from "react-helmet";
import favicon from '../images/favicon.ico'
import { StaticImage } from 'gatsby-plugin-image'

// Define component
const LinksPage = () => {
  return (
    <main>
      <Helmet>
        <title>Links</title>
        <meta charset="UTF-8"></meta>
        <link rel="icon" href={favicon}/>
        <meta name="theme-color" content="#ebdbb2"></meta>
        <meta name="description" content="Zagdrath's personal website"></meta>
        <script src="https://kit.fontawesome.com/97db0162e4.js" crossorigin="anonymous"></script>
      </Helmet>
      <body>
        <h1 id="fancyboi">Links</h1>
        <hr></hr>
        <Link style={{ float: `right` }} to="/"> {'<-'} Back</Link>
        <h3>Computing</h3>
        <dl>
          <dt>~{'>'} <a href="https://pcpartpicker.com/">PCPartPicker</a></dt>
          <dt>~{'>'} <a href="https://builds.gg/">builds.gg</a></dt>
          <dt>~{'>'} <a href="https://distrowatch.com/">DistroWatch</a></dt>
          <dt>~{'>'} <a href="https://github.com/morhetz/gruvbox">Gruvbox</a></dt>
          <dt>~{'>'} <a href="https://cultists.network/140/psu-tier-list/">PSU Tier List</a></dt>
          <dt>~{'>'} <a href="https://github.com/windshields/stoRAGE-consumer-SSD-buying-guide">SSD Buying Guide</a></dt>
          <dt>~{'>'} <a href="https://gifcities.org/">GifCities</a></dt>
          <dt>~{'>'} <a href="https://templeos.org/">TempleOS</a></dt>
          <dt>~{'>'} <a href="https://yesterweb.org/no-to-web3/">Say no to Web3</a></dt>
        </dl>
        <h3>Programming</h3>
        <dl>
          <dt>~{'>'} <a href="https://www.w3schools.com/">W3Schools</a></dt>
          <dt>~{'>'} <a href="https://cyber.dabamos.de/programming/modernfortran/">Modern Fortran</a></dt>
          <dt>~{'>'} <a href="https://cyber.dabamos.de/mirrors/fortran77/">Fortran 77 Tutorial</a></dt>
          <dt>~{'>'} <a href="https://jgthms.com/web-design-in-4-minutes/">Web Design in 4 Minutes</a></dt>
          <dt>~{'>'} <a href="https://cyber.dabamos.de/">The Cyber Vanguard</a></dt>
          <dt>~{'>'} <a href="https://neocities.org/">Neocities</a></dt>
        </dl>
        <h3>Cybersecurity</h3>
        <dl>
          <dt>~{'>'} <a href="https://www.torproject.org/">Tor Project</a></dt>
          <dt>~{'>'} <a href="https://tails.boum.org/">Tails</a></dt>
          <dt>~{'>'} <a href="https://www.kali.org/">Kali Linux</a></dt>
          <dt>~{'>'} <a href="https://www.curtiswallen.com/pgp/">PGP Beginners Guide</a></dt>
          <dt>~{'>'} <a href="https://cyberpunked.org/">cyberpunked.org</a></dt>
        </dl>
        <h3>Other</h3>
        <dl>
        <dt>~{'>'} <a href="https://wikileaks.org/">WikiLeaks</a></dt>
        <dt>~{'>'} <a href="https://our.wikileaks.org/Main_Page">WikiLeaks Research Community</a></dt>
        <dt>~{'>'} <a href="https://www.couragefound.org/">Courage Foundation</a></dt>
        <dt>~{'>'} <a href="https://www.usdebtclock.org/">US Debt Clock</a></dt>
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
export default LinksPage
