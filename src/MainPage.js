import React from 'react';
import './MainPage.css';
import Footer from './Footer'
import Header from './Header'

function MainPage() {
  
  const styles={
    backgroundContainer:{
      flexDirection:'column',
      display: 'flex',  
      justifyContent:'center', 
      alignItems:'center', 
      height: '100vh',
    },
    headerText:{
      color:'#E0FFFF', 
      fontSize:80,
      marginLeft: 'auto',
      marginRight:'auto',
    },
  }
  
  const moveScrollIndicator = () => {
    const percentage = ((window.scrollY) / -maxScrollableHeight) * 100;
    // console.log((window.scrollY), maxScrollableHeight)
    // console.log(percentage)
    page = percentage > 50? 1: 0
  }
  
  let page = 0;
  const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;
  window.addEventListener('scroll', moveScrollIndicator);

  console.log(page)

  return (
    <div id="main-page">
      <div style={{height:'100vh'}} className="hamilton-background background-photo">
        <Header page={page}/>
        <div style={styles.backgroundContainer}>
          <h1 style={styles.headerText}>Jonathan Yeung</h1>
          <h3 style={{color:'#E0FFFF'}}> <span style={{color:'#42ecf5', fontSize:32}}>Hong Kong</span> borned, <span style={{color:'#42ecf5', fontSize:32}}>Melbourne</span> based <span style={{color:'#42ecf5', fontSize:32}}>Software Engineer.</span></h3>
          <h3 style={{color:'#E0FFFF'}}> <span style={{color:'#42ecf5', fontSize:32}}>Tech</span> Geek, <span style={{color:'#42ecf5', fontSize:32}}>Travel</span> Lover,  <span style={{color:'#42ecf5', fontSize:32}}>Foodie.</span></h3>
          <Footer/>
        </div>
      </div>    

      {/* <div style={styles.backgroundContainer} className="sydney-background background-photo">
          <h1 style={styles.headerText}>Software Engineer Intern @Vonex Ltd</h1>
      </div> */}

      {/* <div style={styles.backgroundContainer} className="great-ocean-road-background background-photo"> */}
      {/* <div style={styles.backgroundContainer}> */}
        {/* <h1 style={styles.headerText}>Final Year Monash Uni Bachelor of Comp Science</h1> */}
        {/* <Footer/> */}
      {/* </div> */}
    </div>

  );
}

export default MainPage;
