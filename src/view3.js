import { Link,useNavigate} from "react-router-dom";
import React, { useState, } from 'react';

const View3 = () => {


  const [text, setText] = useState("");
  const [element,setElement] = useState(0);



  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleClick = () => {
    
    setElement((element+1)%4);
  }






  const navigate = useNavigate();
  const navToview3 = () => {navigate('/')};
  const navToview4 = () => {navigate('/View4')};
  const navToview5 = () => {navigate('/View5')};
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (<>




    <h2 className="y pccomp ">Shuan</h2>
    <h5 className="y nom pccomp  b">[Su-anne]</h5>
    <h2 className="y nom pccomp b">Huynh</h2>
    <h2 className="y  age  pccomp c">23 ans</h2>
    <div className="photo pccomp" style={{ position:'fixed' , bottom:355, left: -5}} > </div>
    <div style={{ position: 'fixed', bottom: 0, left: 0 }}  ><a id="popup-button" href="Cvde.pdf" download> <button href="" className="buttony  pccomp bfond  g">CV</button></a>
   <br></br>
   <Link to="https://linktr.ee/sthpro"><button  className="buttony pccomp afond g">Contact</button></Link>

   </div>
   
   <div className="ecran  animate__animated  animate__fadeInUp" style={{ position: 'fixed', top: 30, right: 10 }} >
   <h2 className="y" style={{display:element=== 0 ? "" :"none"}}> Mon Parcour : 1/4</h2> 
   <h2 className="y" style={{display:element=== 1 ? "" :"none"}}> Mon Parcour : 2/4</h2> 
   <h2 className="y" style={{display:element=== 2 ? "" :"none"}}> Mon Parcour : 3/4</h2> 
   <h2 className="y" style={{display:element=== 3 ? "" :"none"}}> Mon Parcour : 4/4</h2> 

<div className="photoban" >ff</div>

<div><div className="txtdroite animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{display:element=== 0 ? "" :"none"}}> 

   
À l'obtention de mon bts j'ai acquis une base de savoir en informatique et en programmation.
Durant celui-ci, j'ai pu réaliser en équipe ou individuellement des projets a but professionnel ou de l'ordre du didactique.


</div><div className="txtgauche photo5 animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{position: 'fixed', left: 50 ,bottom:75 ,display:element=== 0 ? "" :"none"}}> 


</div></div>

<div><div className="txtdroite animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{position: 'fixed',  left: 50 , display:element=== 1 ? "" :"none"}}> 
   
   
  
 
  Par la suite j'ai réalisé que je voulais créer des applications pour des entreprises ou des particuliers qui ont pour but d'apporter un apport.
 
  


 </div><div className="txtgauche photo2 animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{position: 'fixed', bottom: 120, left: 70,display:element=== 1 ? "" :"none"}}> 


</div></div>


 <div><div className="txtdroite animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{display:element=== 2 ? "" :"none"}}> 
   
   
 Je choisis de m’améliorer physiquement et mentalement par le biais du sport, est une façon pour moi qui m'amène à être constant dans mon travail et dans ma vie.
 
 </div><div className="txtgauche photo3 animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{position: 'fixed', left: 70 ,bottom:80,display:element=== 2 ? "" :"none"}}> 


</div></div>

 <div><div className="txtdroite animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{display:element=== 3 ? "" :"none"}}> 
   
   
 Dorénavant, je réalise des projets personnels et effectue une veille technologique régulière en rapport avec le développement d'applications.
 
 </div><div className="txtgauche photo4 animate__animated  animate__fadeIn" value={text} onChange={handleChange} style={{position: 'fixed', left: 70,bottom:100 ,display:element=== 3 ? "" :"none"}}> 


</div></div>


<h4 className="par animate__animated  animate__fadeIn m "style={{ position: 'fixed', bottom: 10,left:20}}>Objectif Global : apprendre dans le domaine de l'informatique en intégrant une structure afin de mener à bien des projets. <button  className="p" onClick={handleClick}> Suite</button></h4>
   <h2 className=" yt animate__animated animate__fadeIn"></h2> 
 
</div>  
     
  <div>
<button type="button " style={{ position: 'fixed', bottom: 80, left:40  ,}} className="mobcomp  "  onClick={navToview3} >PARCOUR</button>
<button type="button " style={{ position: 'fixed', bottom: 80, left:150 ,}} className="mobcomp "  onClick={navToview4} >PROJETS</button>
<button type="button" style={{ position: 'fixed', bottom: 80, left:260,}} className="mobcomp " onClick={navToview5} >OBJECTIFS</button>

</div>
    <button style={{ position: 'fixed', bottom: 80, left:760  ,}} className="button parcour pccomp g" onClick={navToview3} href="">PARCOUR</button>
  <button style={{ position: 'fixed', bottom: 80 , left:960  ,}} className="button projet pccomp g" onClick={navToview4} href="">PROJETS</button>
<button style={{ position: 'fixed', bottom: 80 , left: 1160 ,}} className="button objectif  pccomp g" onClick={navToview5} href="">OBJECTIFS</button>
  </>

  );
}

export default View3;
