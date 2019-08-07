import React from 'react';
import './App.css';



function App() {
  
  const styles={
    backgroundContainer:{
      display: 'flex',  
      justifyContent:'center', 
      alignItems:'center', 
      height: '100vh'
    }
  }

  return (
    <>
    <div style={styles.backgroundContainer} className="melbourne-background background-photo">
      <h1 style={{color:'white', fontSize:50}}>Jonathan Yeung</h1>
    </div>    
    <div style={styles.backgroundContainer} className="hong-kong-background background-photo">
        <h1 style={{color:'white', fontSize:50}}>Software Engineer Intern @ Vonex Ltd</h1>
    </div>
    <div style={styles.backgroundContainer} className="newyork-background background-photo">
        <h1 style={{color:'white', fontSize:50}}>Final Year Monash Uni Bachelor of Comp Science</h1>
    </div>
    </>

  );
}

export default App;
