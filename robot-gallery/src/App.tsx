import React from 'react';
import robots from './mockdata/robots.json';
import logo from './assets/images/logo.svg';
import Robot from './components/Robot'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>robots</h1>
      </div>
      <div className={styles.robotList}>
        {robots.map(r => <Robot id={r.id} email={r.email} name={r.name} />)}
      </div>
    </div>
  );
}

export default App;
