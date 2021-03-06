import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <p>👋🏼&nbsp;&nbsp;<Link to="/">I'm Ilya, Product Designer.</Link><br />Currently&nbsp;&nbsp;👨🏼‍💻&nbsp;&nbsp;at <Link to="https://yandex.ru"><span style={{color: '#fd512f',}}>Y</span>andex</Link>. You can find me listening music on <Link to="https://open.spotify.com/user/komolkin-us" style={{color: '#1cb954',}}>Spotify</Link>, trying to code on <Link to="https://github.com/komolkin" style={{color: '#0099e9',}}>GitHub</Link>, posting on <Link to="https://dribbble.com/komolkin" style={{color: '#ea4c89',}}>Dribbble</Link> and documenting travels on <Link to="https://www.instagram.com/komolkin/" className="Instagram">Instagram</Link>.</p>
        <p><Link to="mailto:komolkin@gmail.com">komolkin@gmail.com</Link>&nbsp;&nbsp;<span className="Status Flicker">•</span></p>
      </div>
    </div>
  </div>
)

export default IndexPage
