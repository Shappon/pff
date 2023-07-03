import {Link, useNavigate} from "react-router-dom";
import Typical from 'react-typical';
import Button from '@mui/material/Button';

const View5 = () => {

  const navigate = useNavigate();
  const navToview3 = () => {navigate('/')};
  const navToview4 = () => {navigate('/View4')};
  const navToview5 = () => {navigate('/View5')};
    return (<>




<h2 className="y nom pccomp b">Shuan</h2>
<h5 className="y nom  pccomp b">[Su-anne]</h5>
    <h2 className="y nom pccomp  b">Huynh</h2>
    <h2 className="y  age  pccomp c">23 ans</h2>
    <div className="photo  pccomp " style={{ position:'fixed' , bottom:355, left: -5}} > </div>
    <div style={{ position: 'fixed', bottom: 0, left: 0 }}  ><a id="popup-button" href="Cvde.pdf" download> <button href="" className="buttony  pccomp bfond  g">CV</button></a>
   <br></br>
   <Link to="https://linktr.ee/sthpro"><button  className="buttony  pccomp  afond g">Contact</button></Link>
   <div className="y pccomp " style={{ position: 'fixed', bottom: 287, left: -10 }}>
      <Typical
        
        steps={['Un ', 1000, 'Développeur',  500 ,'Passionné d\'informatique ', 500,'Passionné d\'arts martiaux', 500,'Passionné de géopolitique', 500]}
        loop={Infinity}
        wrapper="p"
      />
      </div> 
   </div>
   <div className="ecran3 animate__animated  animate__fadeInUp " style={{ position: 'fixed', top: 70, right: 10 }} >

   <div className="container-fluid">


   <h2 className="y" ><Typical
        
        steps={['Objectifs : ', 500, 'Objectifs : Quelques objectifs atteints ou en cours.' ,500]}
        loop={1}
        wrapper="p"
      /></h2> 
  <br></br>    

  <div>

  <table className="table">
 
    <tbody className="yt" >
   
      <tr>
        <td className="yu">Acquérir une expérience professionnelle dans le monde du textile et dans le domaine du rapport client.</td>

        <td className="v2" ></td>
      </tr>
      <tr>
        <td className="yu">Découvrir/Créer/Publier un portfolio avec reactjs</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Découvrir en surface le monde de la programmation et ses enjeux.</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Crée un projet informatique qui facilite la communication d'une entreprise.</td>
 
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu">Trouver une alternance dans le domaine de la programmation d'applications.</td>
 
        <td className="eca2"></td>
      </tr>
      <tr>
        <td className="yu">INTEMPOREL: Développer un apprentissage constant des techniques et technologie lié a la programmation.</td>
 
        <td className="eca2"></td>
      </tr>
      <tr>
        <td className="yu">INTEMPOREL: Lecture de livres sur la programmation web/mobile et créations de projets en corrélation.</td>
 
        <td className="eca2"></td>
      </tr>
     
     
    </tbody>
  </table>

  </div>
</div>


    </div>
    
    

    <button type="button " style={{ position: 'fixed', bottom: 80, left:40  ,}} className="mobcomp  "  onClick={navToview3} >PARCOUR</button>
<button type="button " style={{ position: 'fixed', bottom: 80, left:150 ,}} className="mobcomp "  onClick={navToview4} >PROJETS</button>
<button type="button" style={{ position: 'fixed', bottom: 80, left:260,}} className="mobcomp " onClick={navToview5} >OBJECTIFS</button>
  
<button style={{ position: 'fixed', bottom: 80, left:760  ,}} className="button parcour pccomp g" onClick={navToview3} href="">PARCOUR</button>
  <button style={{ position: 'fixed', bottom: 80 , left:960  ,}} className="button projet pccomp g" onClick={navToview4} href="">PROJETS</button>
<button style={{ position: 'fixed', bottom: 80 , left: 1160 ,}} className="button objectif  pccomp g" onClick={navToview5} href="">OBJECTIFS</button>

</>
 );
}
    
export default View5;
