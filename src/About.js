import React from 'react';
import './About.css';

function About() {
    
    const styles={
        backgroundContainer:{
            flexDirection:'column',
            display: 'flex',  
            justifyContent:'center', 
            alignItems:'center', 
            height: '60vh',
            backgroundColor:'#3e659c',
        },
        backgroundContainer2:{
            flexDirection:'column',
            display: 'flex',  
            justifyContent:'center', 
            alignItems:'center', 
            height: '100vh',
            backgroundColor:'#3e659c',
        },
        sideText:{
            color:'grey',
            fontSize:17,
            letterSpacing: 1.2,
        },
        subText:{
            color:'#397ae3',  
            fontSize:19,
        },
    }
    
    return (
        <div style={styles.backgroundContainer} className="background-photo">
            <div style={{width:'90%', height:'80%', backgroundColor:'white', borderRadius:25, display:'flex', justifyContent:'center', alignItems:'center', marginTop:'5%', marginBottom:'2%'}}>
                <img style={{borderRadius:15, height:'60%', marginLeft:'15%'}} src={require('./assets/jy.png')}/>
                <div style={{flexDirection:'row', marginLeft:'10%', marginRight:'5%', width:'100vw'}}>
                    <h2 style={{color:'black'}}>
                        About me
                    </h2>

                    <h3 style={styles.sideText}>
                        Hello!! My name is <span style={styles.subText}>Jonathan Yeung</span>. <br/>I'm 
                        a <span style={styles.subText}>Software Engineer</span> based in <span style={styles.subText}>Melbourne</span> developing 
                        Web & Mobile Application @Vonex Ltd <br/>and a Final Year student doing <span style={styles.subText}>Bachelor of Computer Science @Monash University</span> 
                        <br/>In aditional to coding, I love <span style={styles.subText}>travelling</span>, discovering new <span style={styles.subText}>technologies</span>, photo taking and eating!! 
                    </h3>
                </div>
            </div>
        </div>
  );
}

export default About;
