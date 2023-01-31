import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Qr from './Qr'
import GlobalStyles from './GlobalStyles'

function App() {
  const [count, setCount] = useState(0)
  const text = "Improve your front-end \n  skills by building projects";


  return (

   <div>
<>
<GlobalStyles/>

<Qr text={text}/>


</>


   </div>
  )
}

export default App
