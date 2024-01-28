import React, { useEffect, useState } from 'react'

function UseEffectPage() {
  const [value, setValue] = useState<string>('')

  useEffect(()=>{
    console.log('this line log when input change value')
  })


  return (
    <input type="text" onChange={(e)=>setValue(e.target.value)}/>
  )
}

/*
  1. useEffect(callback)
  2. useEffect(callback, [])
  3. useEffect(callback, [deps])
  ===================================
  1. callback luôn được gọi sau khi component mouted hoặc re-render
  2. callback được gọi duy nhất 1 lần sau khi compoent mouted
  3. callback chỉ được gọi khi có sự thay đổi của deps
*/

export default UseEffectPage