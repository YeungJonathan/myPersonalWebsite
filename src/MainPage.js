import React, {useState} from 'react';
import './MainPage.css';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Header from './Header';
import Skills from './Skills';

function MainPage() {
  const [page, setPage] = useState(0);

  const styles={
    backgroundContainer:{
      flexDirection:'column',
      display: 'flex',  
      justifyContent:'center', 
      alignItems:'center',  
      width: '100vw',
      
    },
    headerText:{
      color:'#E0FFFF', 
      fontSize:80,
      marginLeft: 'auto',
      marginRight:'auto',
    },
    subText:{
      color:'#397ae3',  
      fontSize:32,
    },
  }
  
  const moveScrollIndicator = () => {
    const percentage = Math.abs(((window.scrollY) / maxScrollableHeight) * 100);
    percentage>72?setPage(1):setPage(0)
  }
  
  const maxScrollableHeight = document.body.scrollHeight - window.innerHeight;
  window.addEventListener('scroll', moveScrollIndicator);

  return (
    <div id="main-page" style={{minWidth:'70%', overflow:'auto'}}>
      <div style={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}} className="hamilton-background background-photo">
        <Header page={page}/>
        <div style={styles.backgroundContainer}>
          <h1 style={styles.headerText}>Jonathan Yeung</h1>
          <h3 style={{color:'#E0FFFF'}}> <span style={styles.subText}>Hong Kong</span> born, <span style={styles.subText}>Melbourne</span> based <span style={styles.subText}>Software Engineer.</span></h3>
          <h3 style={{color:'#E0FFFF'}}> <span style={styles.subText}>Tech</span> Geek, <span style={styles.subText}>Travel</span> Lover,  <span style={styles.subText}>Foodie.</span></h3>
          <Footer page={page}/>
        </div>
      </div>    

      <About/>
      <Resume/>
      <Skills/>
      {/* <div style={styles.backgroundContainer} className="sydney-background background-photo">
        <div style={{width:'90%', height:'87%', backgroundColor:'lightgrey'}}>

        </div>
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
