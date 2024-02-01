import { Button } from '@mantine/core'
import React, { useEffect, useState } from 'react'

function UseEffectTimeoutFunc() {
  const [toggle, setToggle] = useState<boolean>(false)

  const handleClick = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      <Button radius="xs" size="xs" variant="filled" color={toggle ? "lime" : "red"} onClick={handleClick}>
        Click me
      </Button>
      {toggle && <CountDown />}
    </div>
  )
}

export default UseEffectTimeoutFunc


function CountDown() {
  const [counter, setCounter] = useState<number>(1000)

  useEffect(() => {
    const counting = setInterval(() => {
      // setCounter(counter - 1) // ko nên dùng couter -1 để update countDown
      setCounter(prev => prev - 1)
    }, 100)


    return ()=>{
      clearInterval(counting) // phải clear interval trước khi unmouted component
    }
  }, [])

  return (
    <div>
      {counter}
    </div>
  )
}
