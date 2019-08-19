import React from 'react';
import './About.css';
import ProgressBar from './ProgressBar';

function Skills() {
    
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

    const skillSet = () => {
        return (
            <>
            <h3>
                React Native
            </h3>
            <ProgressBar percentage={50}/>
            </>
    )
    }
    
    return (
        <div style={styles.backgroundContainer} className="background-photo">
            <div style={{width:'90%', height:'80%', backgroundColor:'white', borderRadius:25, display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'2%'}}>
                <h1 style={{color:'black', display:'flex', }}>
                    Skills
                </h1>
                <div style={{flexDirection:'column', display:'flex', height:'100%', width:'100%'}}>
                    <div style={{display:'flex'}}>
                        <h3 style={{marginBottom:'10%', display:'flex', marginRight:'10%'}}>
                            React Native
                        </h3>
                        <ProgressBar percentage={80}/>
                    </div>
                </div>   
            </div>
        </div>
  );
}

export default Skills;
