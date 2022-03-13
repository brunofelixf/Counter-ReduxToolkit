import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from './counterSlice'
import styles from './Counter.module.css'

export function Counter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div>
      <div className={styles.row}>
        <button className={styles.button} onClick={() => dispatch(decrement())}>
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button className={styles.button} onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
  )
}
