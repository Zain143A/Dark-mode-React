import './App.css';
import { useState } from 'react';

function App() {
  let myDarkStyle = {
    color: 'white',
    backgroundColor : 'grey'
  }
  let myLightStyle = {
    color: 'black',
    backgroundColor : 'white'
}
    const [themeMode,setTheameMode]=useState('light');
    const [style,setStyle]=useState('light');
    const [cssStyle,setCssStyle]=useState(myLightStyle);
    const btnStyle=()=>{
      if(style==='dark'){
        setStyle('light')
        setCssStyle(myDarkStyle)
        }
        else{
          setStyle('dark')
          setCssStyle(myLightStyle)
          }
      }
    const styleToggler=()=>{
      if (themeMode==='light'){
        setTheameMode('dark')
        document.body.style.backgroundColor = 'grey'
        document.body.style.color = 'white'
      }
      else{
        setTheameMode('light')
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
      }
    }
    
  return (
    <div className='container' style={cssStyle}>
      <h1>Dark Mode Application</h1>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" onClick={styleToggler}/>
        <label className="form-check-label">Switch to Dark Mode</label>
      </div>
      <button type="button" className="btn btn-primary" onClick={btnStyle}>Dark Mode with style</button>
    </div>
  );
}

export default App;
