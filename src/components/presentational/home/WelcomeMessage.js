/* eslint-disable object-property-newline */
import React from 'react'

export default function WelcomeMessage() {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <div style={styles.firstLine}>
          <h1 style={{ ...styles.name, 'padding-right': '0.2em' }}>
            {"Hi! I'm "}
          </h1>
          <h1 style={{ ...styles.name, color: '#12E6C9' }}>{'Kashif'}</h1>
        </div>
        <h2>{'I am a full-stack web developer'}</h2>
        <h2>{'Thank you for visiting my website'}</h2>
      </div>
    </div>
  )
}

const styles = {
  container: {
    'text-align': 'center',
    height: '100vh'
  },
  wrapper: {
    color: '#D3D8E0',
    position: 'absolute',
    left: '50%',
    top: '45%',
    transform: 'translate(-50%, -50%)',
    'line-height': '2.5em'
  },
  firstLine: {
    display: 'inline-block'
  },
  name: {
    float: 'left'
  }
}
