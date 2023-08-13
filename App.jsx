// import React from "react"

// const App=()=>{
//     return (
//         <div>hello</div>
//     )
// }

// export default App

// import React, {Component} from "react"
// export default class App extends Component {
//     render(){
//         return(
//             <h1>helooo</h1>
//         )
//     }
// }

import React from "react";
import Navbar from "./navbar/Navbar.jsx"
import "./global.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import PageNotFound from "./Components/PageNotFound.jsx";
// import Product from "./mobile/Product.jsx"
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Navbar/>
        {/* <Product/> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
        </BrowserRouter>
       
    
        
        
        </>
    )
}
export default App

// import React,{Component} from "react";

// import Way1 from "./States/Way1.jsx"
// import Demo from "./Demo.jsx"
// import "./global.css"
// import Pappa from "./props/Pappa.jsx"
// import Mutya from "./Mutya.jsx"

// export default class App extends Component{
//     render(){
//         return(
//             <>
//             <div>
//                 <Demo student={{name:"Mahesh", age:34, single:true}} />
//             </div>
           
//             <div>
//                 <Way1/>
//             </div>
            
//             <div>
//                 <Pappa/>
//             </div>

//             <div className="grand">
//             <h2>Grand parent</h2>

//             <Mutya user="chombu" />
//         </div>
//             </>
//         )
//     }
// }

// import React, {useState} from 'react'

// const App=()=>{
//     let [count,setCount]=useState("hello react js")
//     return(
//     <div>
//         <h1>COUNTER APP USING FBC</h1>
//           {count} 
//          <button onClick={()=>{setCount("hello java script")}}>UPDATE</button>
//     </div>
//     )
// }

// export default App

// import React, {useState} from "react";

// const App=()=>{
//   let [hi,setHI]=useState("hello hero of my word")
//     return(
//         <div>
//         <h1>counter app </h1>
//        <h1> {hi}</h1>
//        <button onClick={()=>{setHI("ur not my hero of my word")}}>UPDATE</button>
//         </div>
//     )
// }
// export default App

// ***************Krunch App******************

// import React from "react";
// import Navbar1 from "./krunch/Navbar1"
// import Home1 from "./Home/Home1"
// import About from "./about/About.jsx"
// import Portfolio from "./portfolio/Portfolio.jsx"
// import Services from "./services/Services.jsx"
// import "./global.css"
// import Team from "./team/Team";
// import Tvideo from "./teamvideo/Tvideo.jsx";
// import Blog from "./Blog/Blog";
// import Contact from "./contact/Contact.jsx"
// import Lastnav from "./lastnav/Lastnav.jsx";

// const App=()=>{
//   return(
//         <>
//         <Navbar1/>
//         <Home1/>
//         <About/>
//         <Portfolio/>
//         <Services/>
//         <Team/>
//         <Tvideo/>
//         <Blog/>
//         <Contact/>
//         <Lastnav/>
//         </>
//   )
// }
// export default App

// **********************END*********************************

// import React, { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// const App=()=>{
//   let[userid,setUserid]=useState("");
//   let[pass,setpass]=useState("")

//   let handleLogin=()=>{
//     let email = prompt("enter user id")
//     let password= prompt("enter passsword")

//     setUserid(email)
//     setpass(password)
//     toast.success("registered succefully", { position:"top-left"})

//     let handleClick=()=>{
//       let user=prompt("enter user id");
//       let pass1=prompt("enter password");
//       if(user==userid && pass1==pass ){
//         toast.success("login succesfull")
//       }else{
//         toast.error("login failed")
//       }
//     }
//   }

//   return(
//       <div>
//          <ToastContainer/>
//          <button onClick={handleLogin} >LOgIn</button>
//          <button onClick={handleClick}>Verify</button>

//       </div>
//   )
// }

// export default App

// ************Events On Non-Synthetic way*************

// 1.Example on componentDidMount

// import React from "react";
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name:"heloo"
//     }
//     console.log("constructor");
//   }
//   componentDidMount(){
//     let btn=document.querySelector("button")
//     btn.addEventListener("click", ()=>{
//       this.setState({name:'12345'});
//     })
//   }
//   render(){
//     console.log("render");
//     return(
//       <div>
//         <h1> {this.state.name} </h1>
//         <button>CLICK</button>
//       </div>
//     )
//   }
// }

// export default App



// *********javascript way of targenting element****************

// import React, {Component} from "react";

// export default class App extends Component{
//     constructor(){
//         super()
//         this.state={
//             name:"Alex"
//         }
//     }
//     handleClick=()=>{
//         let tagname=document.querySelector("hi")
//         console.log(tagname);
//     }
//     render(){
//         return(
//             <div>
//                 <h1> {this.state.name} </h1>
//                 <button onClick={this.handleClick}>CLICK</button>
//             </div>
//         )
//     }
// }

// ***********8using Ref's in REACT-WAY to style the element*************

// import React, {Component} from "react";
// import { createRef } from "react";

// export default class App extends Component{
//     constructor(){
//         super()
//         this.state={
//             name:"alex"
//         }
//         this.h1Ref=createRef()

//     }
//     handleClick=()=>{
//         this.h1Ref.current.style.color="red"
//         this.h1Ref.current.backgroundColor="blue"
//     }

//     render(){
//         return(
//             <div>
//                 <h1 ref={this.h1Ref}> {this.state.name} </h1>
//                 <button onClick={this.handleClick}>CLick</button>
//             </div>
//         )
//     }
// }

// ******using REf's in react-way to used for image**********
// import React, {Component} from "react";
// import { createRef } from "react";
// import imag from "./Assets/virat.jpeg"
// export default class App extends Component{
//     constructor(){
//         super()
//         this.state={
//             value:true
//         }
//         this.imagRef=createRef()

//     }
//     handleClick=()=>{
//         if(this.state.value){
//           this.imagRef.current.style.borderRadius="50%"
          
//         }
//         this.imagRef.current.style.borderRadius="0%"
//         this.setState({value:!this.state.status})
//     }


//     render(){
//         return(
//             <div>
//                 <img src= {imag} alt="" ref={this.imagRef} />
//                 <button onClick={this.handleClick}>CLick</button>
//             </div>
//         )
//     }
// }

// ***********Javascript way of handling from***********


// import React, {Component} from "react";
// export default class App extends Component{
//     handleSubmit=(e)=>{
//         e.preventDefault()
//         let email=document.getElementById("email").value
//         let password=document.getElementById("pass").value
//         console.log({email,password});

//     }

// render(){
//     return(
//         <div>
//             <form action="">
//                 <div>
//                     <label htmlFor="">Email</label>
//                     <input id="email" type="text" />
//                 </div>
//                 <div>
//                     <label htmlFor="">Password</label>
//                     <input id="pass" type="text" />
//                 </div>
//                 <div>
//                     <button onClick={this.handleSubmit}>SUBMIT</button>
//                 </div>
//             </form>
//         </div>
//     )
// }
// }

// ********************CBC uncontrolled from using REF's***********

// import React, {Component} from "react";
// import { createRef } from "react";

// export default class App extends Component{
//     constructor(){
//         super()
//         this.emailRef=createRef()
//         this.passRef=createRef()

//     }

//       handleSubmit=(e)=>{
//         e.preventDefault()
//         let email=this.emailRef.current.value
//         let passsword=this.passRef.current.value
//         console.log({email,passsword});
//       }
//     render(){
//         return(
//             <div>
//                 <form action="">
//                     <div>
//                         <label htmlFor="" >Email</label>
//                         <input type="text" id="email" ref={this.emailRef}/>
//                     </div>
//                     <div>
//                         <label htmlFor="">Password</label>
//                         <input type="text" id="pass" ref={this.passRef}/>
//                     </div>
//                     <div>
//                         <button onClick={this.handleSubmit}>Submit</button>
//                     </div>
                    
//                 </form>
                  
//             </div>
            
//         )
//     }
    
// }

// ***********************CBC controlled form by using onChnage and State*******************

// import React, {Component} from "react";

// export default class App extends Component{
//     constructor(){
//         super()
//         this.state={
//             USERNAME:"",
//             PASSWORD:""
//         }

//     }
//     handleSubmit=(e)=>{
//         e.preventDefault()
//         let user=this.state.USERNAME
//         let pass=this.state.PASSWORD
//         console.log({user,pass});

//     }

//     render(){
//         return(
//             <div>
//                 <form action="" onSubmit={this.handleSubmit}>
//                     <div>
//                         <label htmlFor="">USERNAME</label>
//                         <input type="text" id="email" onChange={(e)=>{
//                             this.setState({USERNAME:e.target.value})
//                         }} />
//                     </div>

//                     <div>
//                         <label htmlFor="">PASSWORD</label>
//                         <input type="text" id="pass" onChange={(e)=>{
//                             this.setState({PASSWORD:e.target.value})
//                         }} />
//                     </div>

//                     <div>
//                         <button>SUBMIT</button>
//                     </div>
//                 </form>
//             </div>
//         )
//     }
// }


// **************Fetching Data API**************
// ***************using then and catch****************

// import React from "react";
// import { useEffect,useState } from "react";
// import "./global.css"

// const App=()=>{
//   let[users,setUsers]=useState([])
//   useEffect(()=>{
//     let data=window.fetch("https://api.github.com/users").then((X)=>X.json()).then((y)=>{setUsers(y)})

//  console.log(data) },[])

//   return(
//     <div>
//       <h1>USER DETAILS</h1>
//       {users.map((x)=>{
//         return(
//           <div className="card">
//             <img src={x.avatar_url} alt="" height={200} width={200}/>
//             <h3> {x.id}:{x.login} </h3>
            
//           </div>
//         )

//       })}
//     </div>
//   )
// }
// export default App

// ***************fetching data from server using async and await**************

// import React from "react";
// import { useEffect, useState } from "react";

// const App=()=>{
//   let[user, setUser]=useState([])
//   useEffect(()=>{
// let fetchdata=async()=>{
//   let data= await window.fetch("https://api.github.com/users");
//   let finaldata= await data.json()
//     setUser(finaldata)
// }
// fetchdata()
//   },[])
//   return(
//     <div>
//       <h1>USER DETAILS</h1>
//       {user.map((x,i)=>{
//         return(
//           <div key={i}>
//           <img src={x.avatar_url} alt="" height={200} width={200} />
//           <h3> {x.id}:{x.login} </h3>
//           </div>
//         )
//       })}
//     </div>
//   )

  

// }
// export default App



