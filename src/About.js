import React, {useState} from 'react';
import './About.css';

function About() {
    
    const styles={
        backgroundContainer:{
            flexDirection:'column',
            display: 'flex',  
            justifyContent:'center', 
            alignItems:'center', 
            height: '40vh',
            backgroundColor:'#3e659c',
        },
        backgroundContainer2:{
            flexDirection:'column',
            display: 'flex',  
            justifyContent:'center', 
            alignItems:'center', 
            height: '100vh',
            backgroundColor:'#b5ebff',
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
        <>
        <div style={styles.backgroundContainer} className="background-photo">
            <div style={{width:'90%', height:'60%', backgroundColor:'white', borderRadius:25, display:'flex', justifyContent:'center', alignItems:'center'}}>
                <img style={{borderRadius:15, height:'60%', marginLeft:'10%'}} src={require('./assets/jy.png')}/>
                <div style={{flexDirection:'row', marginLeft:'10%', marginRight:'10%'}}>
                    <h2 style={{color:'black'}}>
                        About me
                    </h2>

                    <h3 style={styles.sideText}>
                        Hello!! My name is <span style={styles.subText}>Jonathan Yeung</span>. <br/>I'm 
                        a <span style={styles.subText}>Software Engineer</span> based in <span style={styles.subText}>Melbourne</span> developing 
                        Web & Mobile Application @Vonex Ltd <br/>and a Final Year student studying <span style={styles.subText}>Bachelor of Computer Science @Monash University</span> 
                        <br/>In aditional to coding, I love <span style={styles.subText}>travelling</span>, discovering new <span style={styles.subText}>technologies</span>, taking pictures and eating!! 
                    </h3>
                </div>
            </div>
        </div>
        <div style={styles.backgroundContainer2} className="background-photo">
            {/* <div style={{width:'90%', height:'87%', backgroundColor:'white', display:'flex', justifyContent:'center', alignItems:'center', borderRadius:25}}> */}
            <div style={{width:'90%', height:'88%', backgroundColor:'white', borderRadius:25, display:'flex', justifyContent:'center', alignItems:'center'}}>
                {/* <div style={{flexDirection:'row'}}>
                    <h3 style={styles.sideText}>
                        Monash University Final Year Bachelor of Computer Science Student
                    </h3>
                    <h3 style={styles.sideText}>
                        Monash University Final Year Bachelor of Computer Science Student
                    </h3>
                    <h3 style={styles.sideText}>
                        Monash University Final Year Bachelor of Computer Science Student
                    </h3>
                </div> */}
                <img style={{borderRadius:25, height:'35%'}} src={require('./assets/jy.png')}/>
                <div style={{flexDirection:'row'}}>
                    <h3 style={styles.sideText}>
                        Monash University Final Year Bachelor of Computer Science Student
                    </h3>
                    <h3 style={styles.sideText}>
                        Monash University Final Year Bachelor of Computer Science Student
                    </h3>
                    <h3 style={styles.sideText}>
                        Monash University Final Year Bachelor of Computer Science Student
                    </h3>
                </div>
            </div>
        </div>
        </>
  );
}

export default About;
