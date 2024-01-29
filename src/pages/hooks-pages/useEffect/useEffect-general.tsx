import { useEffect, useState } from 'react'
import AppBlockQuote from '../../../components/block-quotes'

function UseEffectGeneral() {

  return (
    <>
      <AppBlockQuote>
        <p>1. useEffect(callback)</p>
        <p>2. useEffect(callback, [])</p>
        <p>3. useEffect(callback, [deps])</p>
        <p>===================================</p>
        <p className='text-red-400'>## Call back trong useEffect luôn luôn được gọi sau khi component mounted</p>
        <p className='text-red-400'>## Clean up func luôn được gọi trước khi component unmounted</p>
        <p>## Tương ứng 3 case trên thì:</p>
        <p>1. Callback được gọi mỗi khi component re-render -- ít khi dùng</p>
        <p>2. Callback được gọi duy nhất 1 lần sau khi component mounted</p>
        <p>3. Callback chỉ được gọi khi có sự thay đổi của deps</p>
        <p>===================================</p>
        <p>## Render luôn chạy trước khi component mounted</p>
        <p>## Render nằm trong phần return của component</p>
        <p>## Component Mounted - sau khi component render và chạy trong useEffect</p>
        <p>===================================</p>
        <p>## Khái niệm render chỉ về DOM và là 1 trong 3 trạng thái của Mounting</p>
        <p>## Một component thực hiện "mount" chỉ khi nó render trong lần đầu tiên. Có 3 mounting lifecycle methods:</p>
        <p>## componentWillMount || render || componentDidMount</p>
        <p>## Khái niệm mount === componentDidMount</p>
      </AppBlockQuote>

    </>
  )
}

/*
  1. useEffect(callback)
  2. useEffect(callback, [])
  3. useEffect(callback, [deps])
  ===================================
  ## Call back trong useEffect luôn luôn được gọi sau khi component mouted
  ## Clean up func luôn được gọi trước khi component unmounted
  ## Tương ứng 3 case trên thì:
  1. Callback được gọi mỗi khi component re-render
  2. Callback được gọi duy nhất 1 lần sau khi component mouted
  3. Callback chỉ được gọi khi có sự thay đổi của deps
  ===================================
  ## Render luôn chạy trước khi component mounted
  ## Render nằm trong phần return của component
  ## Component Mounted - sau khi component render và chạy trong useEffect
  ===================================
  ## Khái niệm render chỉ về DOM và là 1 trong 3 trạng thái của Mounting
  ## Một component thực hiện "mount" chỉ khi nó render trong lần đầu tiên. Có 3 mounting lifecycle methods:
  ## ComponentWillMount || render || componentDidMount
  ## Khái niệm mount === componentDidMount
*/
export default UseEffectGeneral
