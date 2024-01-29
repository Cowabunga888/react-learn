import { useEffect, useState } from 'react'
import AppBlockQuote from '../../../components/block-quotes'

function UseEffectGeneral() {
  const [data, setData] = useState<any>([])

  const handleFetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => setData(res))
  }

  useEffect(() => {
    // Mouted is in this block
    console.log('Mouted')
  })

  useEffect(() => {
    // chỉ gọi 1 lần sau khi component đã MOUTED
    // tránh trường hợp call back setstate liên tục làm cho component render vô tận
    handleFetchData()
  }, [])


  return (
    // Render is in this block
    <>
      {data?.map((user: any) => {
        return (
          <p key={user?.id}>{user?.id}. {user?.name}</p>
        )
      })}

      {console.log('Render')}

      <AppBlockQuote>
        <p>1. useEffect(callback)</p>
        <p>2. useEffect(callback, [])</p>
        <p>3. useEffect(callback, [deps])</p>
        <p>===================================</p>
        <p className='text-red-400'>## Call back trong useEffect luôn luôn được gọi sau khi component mouted</p>
        <p>## Tương ứng 3 case trên thì:</p>
        <p>1. Callback được gọi mỗi khi component re-render -- ít khi dùng</p>
        <p>2. Callback được gọi duy nhất 1 lần sau khi component mouted</p>
        <p>3. Callback chỉ được gọi khi có sự thay đổi của deps</p>
        <p>===================================</p>
        <p>## Render luôn chạy trước khi component mounted</p>
        <p>## Render nằm trong phần return của component</p>
        <p>## Component Mounted - sau khi component render và chạy trong useEffect</p>
        <p>===================================</p>
        <p>## Khái niệm render chỉ về DOM</p>
        <p>## Khái niệm mouted === đã render xong</p>
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
  ## Tương ứng 3 case trên thì:
  1. Callback được gọi mỗi khi component re-render
  2. Callback được gọi duy nhất 1 lần sau khi component mouted
  3. Callback chỉ được gọi khi có sự thay đổi của deps
  ===================================
  ## Render luôn chạy trước khi component mounted
  ## Render nằm trong phần return của component
  ## Component Mounted - sau khi component render và chạy trong useEffect
  ===================================
  ## Khái niệm render chỉ về DOM
  ## Khái niệm mouted === đã render xong
*/
export default UseEffectGeneral
