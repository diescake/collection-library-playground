import * as React from 'react'

export default () => {
  const onClick_0 = () => {
    console.log('onClick_0')
  }

  const onClick_1 = () => {
    console.log('onClick_1')
  }

  const onClick_2 = () => {
    console.log('onClick_2')
  }

  return (
    <div>
      <h1>Collection libraries playground</h1>
      <button onClick={onClick_0}>Button 0</button>
      <button onClick={onClick_1}>Button 1</button>
      <button onClick={onClick_2}>Button 2</button>
    </div>
  )
}
