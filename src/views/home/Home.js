import React from 'react'

import WelcomeMessage from '../../components/presentational/home/WelcomeMessage'

// eslint-disable-next-line no-extra-parens
const Home = () => (
  <div style={styles.container}>
    <WelcomeMessage />
  </div>
)

export default Home

const styles = {
  container: {
    'background-color': '#06091C',
    height: '100vh'
  }
}
