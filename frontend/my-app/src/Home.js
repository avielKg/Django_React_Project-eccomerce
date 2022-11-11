import React from 'react'


const Welcome = () => {
  const myStyle={
    backgroundImage: 
"url('http://127.0.0.1:8000/media/Posted_images/backgroundphoto.webp')",
color:"white"
};
  return (
    <div style={myStyle}>
      {/* <img style={{ height: '100%', width: '100%', backgroundSize: "cover" }} src="http://127.0.0.1:8000/media/Posted_images/websitebg.png">
      <h1 style={{padding:"50px"}}>Welcome to my E-commerce project</h1>
      </img> */}
      <h1 align="center" style={{padding:"50px"}}>Welcome to my E-commerce store</h1><br></br>
      <h4 align="center">this project was created using Django as a backend<br></br> and the front was created by React&Redux.js<br></br>
      enjoy your visit! </h4><br></br><br></br>
      <h3 align="center" style={{margin:"150px"}}>Find me on:<br></br>
      <a href="https://www.linkedin.com/in/aviel-kogan-65a205237/"><img src="http://127.0.0.1:8000/media/Posted_images/linkedin.png" height="50px"></img></a>{"    "}
      <a href="https://github.com/avielKg"><img src="http://127.0.0.1:8000/media/Posted_images/github-logo.png" height="50px"></img></a>{"    "}
      <a href="mailto:aviel33223@gmail.com"><img src="http://127.0.0.1:8000/media/Posted_images/gmail.png" height="50px"></img></a>{"    "}
      <a href="https://www.facebook.com/aviel33223/"><img src="http://127.0.0.1:8000/media/Posted_images/facebook.png" height="50px"></img></a>{"    "} 
      </h3>
      <h5 align="center">
        created by <a href="">Aviel kogan</a></h5>

      <br></br><br></br><br></br>
      <br></br><br></br><br>
      </br><br></br>
      <br></br>
      <br></br>
      

      </div>
  )
}

export default Welcome