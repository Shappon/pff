import { Link, useNavigate } from "react-router-dom";
import * as React from 'react';
import Typical from 'react-typical';
import Button from '@mui/material/Button';

const View4 = () => {
  const navigate = useNavigate();
  const navToview3 = () => { navigate('/') };
  const navToview4 = () => { navigate('/View4') };
  const navToview5 = () => { navigate('/View5') };
  return (<>





 <h2 className="y nom pccomp b">Shuan</h2>
<h5 className="y nom pccomp b">[Su-anne]</h5>
    <h2 className="y nom pccomp  b">Huynh</h2>
    <h2 className="y  age  pccomp c">23 ans</h2>
    <div className="photo  pccomp " style={{ position:'fixed' , bottom:355, left: -5}} > </div>
    <div style={{ position: 'fixed', bottom: 0, left: 0 }}  ><a id="popup-button" href="Cvde.pdf" download> <button href="" className="buttony  pccomp bfond  g">CV</button></a>
   
   <br></br>
   <Link to="https://linktr.ee/sthpro"><button  className="buttony pccomp afond g">Contact</button></Link>
   <div className=" pccomp y" style={{ position: 'fixed', bottom: 287, left: -10 }}>
      <Typical
        
        steps={['Un ', 1000, 'Développeur',  500 ,'Passionné d\'informatique ', 500,'Passionné d\'arts martiaux', 500,'Passionné de géopolitique', 500]}
        loop={Infinity}
        wrapper="p"
      />
      </div> 
   </div>
   <div className="ecran2 animate__animated animate__fadeInUp " style={{ position: 'fixed', top: 70, right: 10 }} >

   <div className="container-responsive">
  <h2 className="y" ><Typical
        
        steps={['Projets : ', 500,'Projets : Une sélection de divers projets informatiques réalisés ou en cours. ', 500]}
        loop={1}
        wrapper="p"
      /></h2> 
  <br></br> 
  <br></br>        
  <table className="table">
    <thead className="yt" >
      <tr>
        <th ></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody className="yt" >
      <tr>
        <td className="yu">Création/Implémentation d'un plug-in dans un site marchand.</td>
        <td className= " pccomp "  ><span className= " pccomp " class="badge bg-info badged">html/css/js</span><span class="badge bg-info badged">WordPress</span><span class="badge bg-info badged">Entreprise</span></td>
         <td className= " pccomp " ><Button variant="contained" href="DocP1.pdf" download >Doc</Button></td>
        <td className="v2"></td>
      </tr>
      <tr>
        <td className="yu" >Découverte/Création d'une Application portefolio en Reactjs.</td>
        <td className= " pccomp " ><span  class="  badge bg-info badged"></span><span class="badge bg-info badged">html/css/js/json</span><span class="badge bg-info badged">Personnel</span></td>
        <td className= " pccomp " ></td>
        <td className="v2"></td>
      </tr>

      <tr>
        <td className="yu" >Création d'un site internet / Vente de Vétements.</td>
        <td className= " pccomp " ></td>
        <td className= " pccomp "  ></td>
        <td className="eca2" ></td>
      </tr>
      <tr>
        <td className="yu" >Création d'un site internet / Vente de Carrelage.</td>
        <td className= " pccomp " ></td>
        <td className= " pccomp "  ></td>
        <td className="eca2" ></td>
      </tr>
      <tr>
        <td className="yu" >Création d'une application de simplification de tâche pour entreprises (Monde infirmier).</td>
        <td className= " pccomp " ></td>
        <td className= " pccomp " ></td>
        <td className="eca2" ></td>
      </tr>
    
    </tbody>
  </table>
</div>

   </div>

   <div id="borderDemo" style={{ position: 'fixed', bottom: -70,}}className="button-container ">
    
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

export default View4;
