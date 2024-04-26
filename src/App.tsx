import { useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState<string>()
  const [passwordLength, setPasswordLength] = useState<number>(8)

  const handleInput = (evt: { target: { value: string | undefined } }) => {
    setPassword(evt.target.value)
  }

  const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890~!@#$%^&*()_-+={[}];<,>./?|\/"
  const generatePass = () => {
    let _str = str
    let _password = ""
    let count = passwordLength
    while (count > 0) {
      _password += _str[~~(Math.random() * str.length)]
      count--
    }

    setPassword(_password)
  }

  const copyToClip = () => {
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
        <label htmlFor="length">{passwordLength}</label>
        <input value={passwordLength} id="length" className="secondary" type="range" name="vol" min="0" max="50" onChange={(e) => setPasswordLength(+e.target.value)} />
        <button onClick={generatePass}>Generate</button>
      </div>
    </div>
  )
}

export default App
