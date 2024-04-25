import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState<string>()

  const handleInput = (evt: { target: { value: string | undefined } }) => {
    setPassword(evt.target.value)
  }

  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_-+={[}];<,>./?|\/"
  const generatePass = ()=>{
    let _str = str
    let _password = ""
    let count = 8
    while(count > 0){
      _password += _str[~~(Math.random()*str.length)]
      count--
    }

    setPassword(_password)
  }

  const copyToClip = ()=>{
    navigator.clipboard.writeText(password as string)
  }


  return (
    <div className='container'>
      <div className='wrapper'>
        <h4>Random Password Genrator</h4>
        <div className='inputWrapper'>
          <input value={password} onChange={handleInput} />
          <button onClick={copyToClip}>Copy</button>
        </div>
        <button onClick={generatePass}>Generate</button>
      </div>
    </div>
  )
}

export default App
