import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.svg';
import Robot from './components/Robot'
import RobotDiscount from './components/RobotDiscount'
import ShoppingCart from './components/ShoppingCart';
import styles from './App.module.css'

interface Props {
}

interface State {
  robotGallery: any[],
  count: number
}

const App: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number>(0)
  const [robotGallery, setRobotGallery] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    document.title = `点击次数为${count}次`
  }, [count])

  useEffect(() => {

    const fetchData = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setRobotGallery(data)
      } catch (err: any) {
        setError(err.msg)
      }
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <div className={styles.app}>
      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>robots</h1>
      </div>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Click
      </button>
      <span>count: {count}</span>
      <ShoppingCart />
      {(!error || error !== '') ? '' : <div>网站出错：{error}</div>}
      {
        !loading ?
          (<div className={styles.robotList}>
            {
              robotGallery.map((r, index) =>
                index % 2 === 0 ?
                  <Robot id={r.id} email={r.email} name={r.name} /> :
                  <RobotDiscount id={r.id} email={r.email} name={r.name} />
              )
            }
          </div>)
          :
          (<h2>loading</h2>)
      }

    </div>
  );
}

export default App;
