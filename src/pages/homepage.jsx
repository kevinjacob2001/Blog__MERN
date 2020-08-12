import React from "react";

const HomePage = () => {
  return (
    <div style={{height:"100vh"}}>
      <h1 style={{ textAlign: "center" ,marginBottom:"20px"}}>Welcome to BlogNow.kj<img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="30px"></img></h1>
      <hr style={{width:"50%",background:"black"}}></hr>

      <br />

      <p>Hey there! It's me Kevin. Welcome to my blog. </p>
    <br/>
    <p>This is a full-featured website with features for posting comments for the articles and upvoting them.</p>
    <p>This website's frontend is powered by React.js. Backend is powered by Node.js with Express server tied in with MongoDB database(𝗠𝗘𝗥𝗡 Stack) </p>
    </div>
  );
};

export default HomePage;
