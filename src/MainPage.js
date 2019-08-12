import React from 'react';
import './MainPage.css';


function MainPage() {
  
  const styles={
    backgroundContainer:{
      display: 'flex',  
      justifyContent:'center', 
      alignItems:'center', 
      height: '100vh'
    },
    headerText:{
      color:'white', 
      fontSize:45,
      marginLeft: 'auto',
      marginRight:'auto'
    }
  }

  return (
    <>
      <div style={styles.backgroundContainer} className="hamilton-background background-photo">
        <h1 style={styles.headerText}>Jonathan Yeung</h1>
      </div>    
      <div style={styles.backgroundContainer} className="sydney-background background-photo">
          <h1 style={styles.headerText}>Software Engineer Intern @Vonex Ltd</h1>
      </div>
      <div style={styles.backgroundContainer} className="great-ocean-road-background background-photo">
          <h1 style={styles.headerText}>Final Year Monash Uni Bachelor of Comp Science</h1>
      </div>
    </>

  );
}

export default MainPage;
