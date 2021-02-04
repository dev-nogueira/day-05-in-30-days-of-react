import React, { useState, useEffect } from 'react' 
import './styles.css'

function App() {
  const [isDay, setIsDay] = useState(true)
  
  useEffect(() => {
    var now = new Date();
    var hour = now.getHours()
    
    return hour > 6 && hour < 16 ? setIsDay(true) : setIsDay(false)
  }, [])

  return (
    <div className={isDay?'dark':'light'}>
      <h1>{isDay?'is day.':'is night.'}</h1>
    </div>
  );
}

export default App;
