import React from 'react'

function App() {
  return (
    <div styles={styles.container}>
      <header style={styles.header}>
       
      </header>
    </div>
  );
}

export default App;

const styles = {
  container: {
    'text-align': 'center'
  },
  header: {
    'background-color': '#282c34',
    'min-height': '100vh',
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center',
    'font-size': 'calc(10px + 2vmin)',
    'color': 'white'
    }
}

