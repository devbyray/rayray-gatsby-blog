import React from 'react';
import 'typeface-merriweather';
// Import typefaces
import 'typeface-montserrat';
import { rhythm } from '../utils/typography';
import profilePic from './profile-pic.jpg';



class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '100%'
          }}
        />
        <p>
          Written by <strong>Raymon Schouwenaar</strong> who lives and works in the Netherlands building useful things and helping others grow their development skills.{' '}
          <a href="https://twitter.com/rsschouwenaar">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
