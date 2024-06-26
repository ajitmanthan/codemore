import React,{useState,useEffect} from "react"
import { useNavigate } from "react-router-dom";
import "../index.css";

import banner1 from "./images/a.png";
import banner2 from "./images/b.png";
import banner3 from "./images/c.png";
import banner4 from "./images/d.png";
import ama from "./images/ama.png";
import microsoft from "./images/microsoft.png";
import zomato from "./images/zomato.png";
import google from "./images/google.png";
import go from "./images/go.png";
import info from "./images/info.png";
import swiggy from "./images/swiggy.png";
import logi from "./images/logi.png";
import meeting from "./images/meeting.png";
import service from "./images/service.png";

import cplus from "./images/1.png";
import digital from "./images/2.png";
import c from "./images/3.png";
import python from "./images/4.png";
import web from "./images/5.png";
import angular from "./images/6.png";
import sql from "./images/7.png";
import html from "./images/8.png";
import java from "./images/9.png";
import php from "./images/10.png";
import jquery from "./images/11.png";
import bootstrap from "./images/12.png";
import android from "./images/13.png";

import cpluss from "./images/1s.png";
import digitals from "./images/2s.png";
import cs from "./images/3s.png";
import pythons from "./images/4s.png";
import webs from "./images/5s.png";
import angulars from "./images/6s.png";
import sqls from "./images/7s.png";
import htmls from "./images/8s.png";
import javas from "./images/9s.png";
import phps from "./images/10s.png";
import jquerys from "./images/11s.png";
import bootstraps from "./images/12s.png";
import androids from "./images/13s.png";


function Home() {
  const navigate = useNavigate();
  const [userData,setUserData]=useState({Username:'',Email:'',Phone_number:'',subject:'',message:'',
});
  const contectdata = async() => {
      try{
          
      const res=await  fetch('/contect',{
          method:"GET",
          headers:{
              Accept:"application/json",
              "Content-Type":"application/json"
          },
          credentials:"include"
      });
      const data=await res.json();
      console.log(data);
      setUserData(data);
      if(!res.status===200)
      {
        const error=new Error(res.error);
        throw error;
      }
  }catch(err){
  console.log(err);
  navigate('/signin')
  } 
  }
  
  useEffect(()=>
  {
    contectdata();
  },
  []);
  
 
let name,value;
const handleInput=(e)=>{
    console.log(e)
    name=e.target.name;
    value=e.target.value;
    setUserData({...userData,[name]:value})
} 

const contactform=async(e)=>{
    e.preventDefault()
    const {Username,Email,Phone_number,subject,message}=userData

    const res=await fetch("/contect",{
method:"post",
headers:{

    "content-type":"application/json" 
},
body:JSON.stringify({
    Username,Email,Phone_number,subject,message})

    });

const data=await res.json()
if(!data){
console.log("message not send") 

}
else{window.alert("message send")
setUserData({...userData,message:""})
}}

let items = document.querySelectorAll(".alla");

items.forEach((el) => {
  const minPerSlide = 5;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});





  return (
    <>
      <div className="container backround my-5 py-5 hover" >
        <div className="row ">
          <div className="col-md-6 p-3">
            <div className="info1 icon1 p-5">
              <img src={htmls} className="img-fluid" />
            </div>

            <div className="display-3 fw-semi-bold py-2">Code+</div>
            <div className="display-6 fw-semi-bold py-2">
              Best Courses are waiting to enrich your skill
            </div>
            <div className=" info1 icon2 p-5">
              <img src={javas} className="img-fluid" />
            </div>

            <div className="fw-semi-bold py-2 fs-4">
              We are dedicated to teaching individuals of all skill levels the
              skills needed to excel in the world of programming.
            </div>
            <div className=" info1 icon1 p-5">
              <img src={c} className="img-fluid" />
            </div>
           
            <div className=" info1 icon5 p-5">
              <img src={html} className="img-fluid" />
            </div>
         
          </div>
          <div className="col-md-6 p-5">
        
           
            <div
              id="carouselExampleRide"
              className="carousel-fade"
              data-bs-ride="carousel"
            >
                <div className="info1 icon4 p-5">
              <img src={html} className="img-fluid" />
            </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                  <img
                    src={banner1}
                    className="d-block w-100 rounded-5"
                    alt="bannerfw"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner2}
                    className="d-block w-100 rounded-5"
                    alt="bannerfwf"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner3}
                    className="d-block w-100 rounded-5"
                    alt="bannerfwff"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner4}
                    className="d-block w-100 rounded-5"
                    alt="bannerfwa"
                  />
                </div>
              </div>
              <div className=" info1 icon3 p-5">
              <img src={androids} className="img-fluid" />
            </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="container px-5 backround mb-5 hover">
        <div className="container-fluid">
          <div className="row">
          <div className=" info1 icon3 p-5">
              <img src={bootstraps} className="img-fluid" />
            </div>
            <div className="col-8">
              
              <div className="contect_body">
                
                <div className="display-6 fw-semi-bold py-2">
                  start your journey towards a successful <br /> career in the
                  tech industry!
                </div>
                <div className="py-2"></div>
                <button className="btn btn-outline-light px-5 my-3">
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="col-2">   
            <div className="  info1 p-5">
              <img src={html} className="img-fluid" />
            </div></div>
            
            <div className="col-12 contect_form">
              <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-8 col-sm-10 col-12 ">
                  <div className="container-fluid text-center my-5">
                    <div className="row">
                      <div
                        id="recipeCarousel"
                        className="carousel slide ala "
                        data-bs-ride="carousel"
                      >
                        <div className="carousel-inner" role="listbox">
                          <div
                            className="carousel-item active alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={android}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">ANDROID</div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={c}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">
                                      C LANGUAGE
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={python}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">PYTHON</div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={web}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">
                                      WEB DESIGNING
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={digital}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">
                                      DIGITAL MARKETING
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={cplus}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">C++</div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={angular}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">ANGULAR</div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={sql}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">SQL </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={html}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">HTML5</div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={java}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">JAVA</div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={php}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">PHP</div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={jquery}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">JQUERY</div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div
                            className="carousel-item alla"
                            data-bs-interval="2000"
                          >
                            <div className="col-md-3 ">
                              <a
                                href="/"
                                className="text-decoration-none text-light"
                              >
                                <div className="card bg text-light hover">
                                  <div className="card-body text-center">
                                    <img
                                      src={bootstrap}
                                      className="img-fluid"
                                      alt="meeting"
                                    />
                                  </div>
                                  <div className="card-footer border-0">
                                    <div className="fw-semi-light">
                                      BOOTSTRAP
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <a
                          className="carousel-control-prev bg-transparent w-aut"
                          href="#recipeCarousel"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                          ></span>
                        </a>
                        <a
                          className="carousel-control-next bg-transparent w-aut"
                          href="#recipeCarousel"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                          ></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="container-fluid backround py-5 hover">
        
        <div className="container">
       
          <div className="row  justify-content-center">
          <div className=" info1 icon3 p-5">
              <img src={bootstraps} className="img-fluid" />
            </div>
            <div className="col-lg-6">
              <div className="display-4 fw-semi-bolder pb-4">
                <i> Our previous students are selected in</i>
              </div>
              <p className="fs-5 fw-semi-bold">
                Here at CODE+ we have tie-ups with various software
                organizations. Our job oriented courses and their curriculum
                includes interview prepration classes.
              </p>
            </div>
            <div className="col-lg-6 brands">
              <div className="row justify-content-center">
                <div className="col-4 brand_w ">
                  <img src={microsoft} alt="amazone" className="img-fluid shadow hover" />
                </div>
              </div>
              <div className="row">
                <div className="col-4 amazone ">
                  <img src={ama} alt="amazone" className="img-fluid shadow hover" />
                  <div className=" info1 icon4 p-5">
              <img src={android} className="img-fluid " />
            </div>
                </div>

                <div className="col-4 brand_w">
                  <div>
                    <img src={zomato} alt="amazone" className=" img-fluid shadow hover" />
                    <img src={google} alt="amazone" className=" img-fluid shadow hover" />
                  </div>

                  <img src={google} alt="amazone" className=" img-fluid shadow hover" />
                </div>

                <div className="col-4 brand_w">
                  <img src={go} alt="amazone" className=" img-fluid shadow hover" />
             
                  <img src={info} alt="amazone" className=" img-fluid mx-5 shadow hover" />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-4 brand_w">
                  <img src={logi} alt="amazone" className="img-fluid shadow hover" />
                </div>

                <div className="col-4 amazone">
                  <img src={swiggy} alt="amazone" className=" img-fluid shadow hover" />
                </div>
              </div>

              <div className="row justify-content-center ">
                <div className="col-4 brand_w my-3 p-3 shadow">
                  <h5 className="ms-3 hover">+ many more</h5>
                  <div className=" info1 icon1 p-5">
              <img src={cplus} className="img-fluid" />
            </div>
                </div>
              </div>
            
            </div>
         
          </div> 
        </div>
        
      </div>

      <div className="container backround my-5 hover ">
        <div className="row ">
          <h1 className="text-center">WHAT POPULAR IN CODE+</h1>

          <div className="col-lg-4  p-5 ">
            <div className="card bg text-light ">
              <div className="card-body text-center">
                <img src={digitals} className="" alt="meeting" />
              </div>
              <div className="card-footer border-0">
                <ul className="course_card" style={{ listStyle: "none" }}>
                  <li>the process of planning</li>
                  <li> conceptualizing, and implementing</li>
                  <li>functional and offers a good user experience</li>
                  <li>User experience is central to the web designing process</li>
                  <li> various techniques, tools and programming languages</li>
                
                </ul>
              </div>
            </div>
          </div>
      
          <div className="col-lg-4  p-5 ">
            <div className="card bg text-light">
              <div className="card-body text-center">
                <img src={webs} className="" alt="meeting" />
              </div>
              <div className="card-footer border-0">
                <ul className="course_card" style={{ listStyle: "none" }}>
                  <li>Complete Frontend Development</li>
                  <li>Complete Backend Development</li>
                  <li>Complete Database - SQL & MongoDB</li>
                  <li>Complete MERN Stack</li>
                  <li>Real Life and Industry Grade Projects</li>
                  <li>resume, freelance, open source & more</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4  p-5 ">
            <div className="card bg  text-light">
              <div className="card-body text-center">
                <img src={androids} className="" alt="meeting" />
              </div>
              <div className="card-footer border-0">
                <ul className="course_card" style={{ listStyle: "none" }}>
                  <li>Linux kernel</li>
                  <li>Android Runtime</li>
                  <li>Setup of Android Development environment</li>
                  <li>Android Application Fundamentals</li>
                  <li>Main Building Blocks</li>
                  <li>User Interface</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container backround my-5 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-5 ">
              <span className="my-3 display-5 fw-semi-bold">WHAT'S NEW?</span>
              <p className="pb-5 ">
                Our experience tells us that students on average are 3 times
                more
                <br /> serious in apaid batch. The completion of course and
                watch time of <br /> students increases exponentially.
              </p>
              <button className="btn btn-outline-light px-5 my-3">
                Enroll Now
              </button>
            </div>
            
            <div className="col-lg-6 p-5">
         
            <div className=" info1 icon4 p-5">
              <img src={pythons} className="img-fluid" />
            </div>
            <div className=" info1 icon3 p-5">
              <img src={android} className="img-fluid" />
            </div>
         
           
            <div className=" info1 icon1 p-5">
              <img src={phps} className="img-fluid" />
            </div>
          
          </div>  
           <div className=" info1 icon1 p-5">
              <img src={cs} className="img-fluid" />
            </div>
            <div className=" info1 icon2 p-5">
              <img src={jquerys} className="img-fluid" />
            </div>
            <div className=" info1 icon6 p-5">
              <img src={cpluss} className="img-fluid" />
            </div>
            <div className=" info1 icon7 p-5">
              <img src={sqls} className="img-fluid" />
            </div>
           
        </div>
        </div>
      </div>

   
      <div className="container backround my-5 hover">
        {/* <video preload loop autoPlay src={V} type="video/mp4"  className='img-fluid'/> */}
        <div className="row">
   
          <div className="col-md-6 p-3 order-2">
            <div className="h2 fw-semi-bold py-2">We are a Coding Academy</div>
            <div className="display-6  fw-semi-bold py-2">
              start your journey towards a successful career in the tech
              industry!
            </div>
            <div className=" info1 icon1 p-5">
              <img src={sqls} className="img-fluid" />
            </div>
            <div className="py-2">
              Our classes are taught by industry experts who have real-world
              experience in the field. They will guide you through the learning
              process, providing hands-on instruction and one-on-one support.
              Whether you're a beginner just starting out or an experienced
              developer looking to expand your skillset, we have a class that's
              right for you.
            </div>
            <button className="btn hover btn-outline-light px-5 my-3  text-light">
              Enroll Now
            </button>
            <div className=" info1 icon2 p-5">
              <img src={androids} className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6 p-5  order-1">
          <div className=" info1 icon6 p-5">
              <img src={cpluss} className="img-fluid" />
            </div>
            <div
              id="carouselExampleRide"
              className="carousel-fade"
              data-bs-ride="carousel"
            >
                <div className=" info1 icon7 p-5">
              <img src={pythons} className="img-fluid" />
            </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="4000">
                  <img src={banner1} className="d-block w-100" alt="bannerfw" />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner2}
                    className="d-block w-100"
                    alt="bannerfwf"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner3}
                    className="d-block w-100"
                    alt="bannerfwff"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="4000">
                  <img
                    src={banner4}
                    className="d-block w-100"
                    alt="bannerfwa"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid">
        
        <div className="container position-relative">
          
          <div className="row">
            
            <div className="col-12 mt-5">
          
                <div className="display-4 fw-semi-bold">
                  start your journey towards a successful <br /> career in the
                  tech industry!
                </div>
               
                <button className="btn btn-outline-dark px-5 my-3 text-light hover">Enroll Now</button>
              </div>
              
            </div>
            <div className="col-12 contect_form">
              <div className="row justify-content-end">
                <div className="col-sm-4">   
                <div className="info1 icon1 p-5">
              <img src={web} className="img-fluid" />
            </div>
            
            <div className=" info1 icon1 p-5">
              <img src={phps} className="img-fluid" />
            </div>
          
        
           <div className=" info1 icon2 p-5">
              <img src={cs} className="img-fluid" />
            </div>
            <div className=" info1 icon3 p-5">
              <img src={jquerys} className="img-fluid" />
            </div>
            <div className=" info1 icon4 p-5">
              <img src={cpluss} className="img-fluid" />
            </div>
            <div className=" info1 icon6 p-5">
              <img src={sqls} className="img-fluid" />
            </div>




            </div>
                <div className="col-xl-5 col-lg-6 col-sm-8 col-12">
                  <div className="form_main border rounded-4 p-4 hover">
                    <h1 className="">Get in Touch</h1>
                    <p>We Want To Hear From You</p>
                    <form method="post" >
                      <div className=" d-flex justify-content-between">
                        <input
                          type="text"
                          name="Username"
                          className="mx-3 py-4 rounded-4 w-75 bg text-light h5"
                          placeholder="Name"
                          value={ userData.Username } onChange={handleInput} autoCorrect="off"
                        />
                        <input
                          type="text"
                          name="Email"
                          className="mx-3 py-4 rounded-4 w-75 bg text-light h5"
                          placeholder="Email"
                          value={ userData.Email } onChange={handleInput} autoCorrect="off"

                        />
                        <input
                          type="text"
                          name="Phone_number"
                          className="mx-3 py-4 rounded-4 w-75 bg text-light h5"
                          placeholder="tel"
                          value={ userData.Phone_number } onChange={handleInput} autoCorrect="off"

                        />
                      </div>
                      <div className=" p-3">
                        <input
                          type="text"
                          name="subject"
                          className="  py-4 rounded-4 w-100 bg text-light h5"
                          placeholder="Subject"
                          value={ userData.subject } onChange={handleInput} autoCorrect="off"

                        />
                      </div>
                      <div className=" p-3">
                        <input
                          type="text"
                          name="message"
                          className="  py-5 rounded-4 w-100 bg text-light h5"
                          placeholder="Leave us a message..."
                          value={ userData.message } onChange={handleInput} autoCorrect="off"

                        />
                      </div>
                      <div className=" p-3">
                        {/* <button className="btn bg w-100 py-3 rounded-4  text-light h5" type="submit" name="submit">Sumbit Query</button> */}
                        <input type="submit" className=" bg w-100 py-3 rounded-4  text-light h5" onClick={contactform} name="submit"/>
                      </div>
                    </form>
                  </div>
                </div>
        
          
         
           
        
              </div>
            </div>
          </div>
          
        </div>
   



    </>
  );
}


export default Home;
