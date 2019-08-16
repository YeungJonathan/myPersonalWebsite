import React, {useState} from 'react';
import './About.css';

function Resume() {
    
    const styles={
        backgroundContainer:{
            flexDirection:'column',
            display: 'flex',  
            justifyContent:'center', 
            alignItems:'center', 
            width: '100vw',
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
            fontStyle:'italic'
        },
    }
    
    return (
        <div style={styles.backgroundContainer} className="background-photo">
            <div style={{width:'90%', height:'25%', backgroundColor:'white', borderRadius:25, display:'flex', justifyContent:'center'}}>
                <h1 style={{marginRight:'20%', marginTop:'3%', textDecoration:'underline', textDecorationColor:'blue', fontSize:25, marginLeft:'5%'}}>
                    Education
                </h1>
                <div style={{flexDriection:'column', marginTop:'2%', marginBottom:'1.4%'}}>
                    <h1 style={{fontSize:30}}>
                        Monash University
                    </h1>
                    <h3 style={{fontSize:20, fontStyle:'italic'}}>
                        Bachelor of Computer Science <span style={{fontSize:14}}>(Feb 2017 - Dec 2019)</span>
                    </h3>
                    <h4 style={{color:'grey'}}>
                        Major: Advanced Computer Science | Minor: Computer networks and security
                    </h4>
                    <h4 style={{color:'grey'}}>
                        Faculty of Information Technology International Merit Scholarship
                    </h4>
                    <h4 style={{color:'grey'}}>
                        High Distinction Average
                    </h4>
                </div>
            </div>


            <div style={{width:'90%', height:'47%', backgroundColor:'white', borderRadius:25, display:'flex', justifyContent:'center', marginTop:'2%'}}>

                <h1 style={{marginRight:'20%', marginTop:'3%', textDecoration:'underline', textDecorationColor:'blue', fontSize:25, marginLeft:'5%'}}>
                    Work
                </h1>
                <div style={{flexDriection:'column', marginTop:'2%', marginBottom:'1.4%'}}>
                    <h1 style={{fontSize:30}}>
                        Vonex Ltd
                    </h1>
                    <h3 style={{fontSize:20, fontStyle:'italic'}}>
                        Software Developer Intern<span style={{fontSize:14}}> (Aug 2018 - Present)</span>
                    </h3>
                    <h4 style={{color:'grey'}}>
                        Developed <span style={styles.subText}>Web and Mobile App</span> using <span style={styles.subText}>React</span> and <span style={styles.subText}>React Native</span>
                    </h4>
                    <h4 style={{color:'grey'}}>
                        Automated deploying process using <span style={styles.subText}>Terrform</span> with <span style={styles.subText}>Ansible</span>
                    </h4>
                    <h4 style={{color:'grey', marginBottom:'10%'}}>
                        Server Configuration with <span style={styles.subText}>NGINX</span>
                    </h4>


                    <h1 style={{fontSize:30}}>
                        Koble
                    </h1>
                    <h3 style={{fontSize:20, fontStyle:'italic'}}>
                        Mobile Software Developer<span style={{fontSize:14}}> (Dec 2018 - Jun 2019)</span>
                    </h3>
                    <h4 style={{color:'grey'}}>
                        Developed Mobile App using <span style={styles.subText}>React Native</span>
                    </h4>
                    <h4 style={{color:'grey'}}>
                        Deployed server on <span style={styles.subText}>Google Cloud Platform</span>
                    </h4>
                    <h4 style={{color:'grey'}}>
                        Configured server using <span style={styles.subText}>NGINX</span>
                    </h4>
                </div>
            </div>
        </div>
  );
}

export default Resume;
