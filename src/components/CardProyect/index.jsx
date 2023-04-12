import { useState } from "react";
import { VscPreview } from 'react-icons/vsc';
import { BsGithub } from 'react-icons/bs';
import style from '../../style/portafolio.module.css';

function CardProyect( { img, github, previewWeb } ) {
     let [proyect, setProyect] = useState( false );
     let animationProjects = {
          animation: proyect ?
               'proyects__info 1s forwards alternate ease-in-out'
               :
               'proyects__info 1s forwards alternate-reverse ease-in-out'
     };
     return (
          <li onMouseOver={() => setProyect( true )} onMouseOut={() => setProyect( false )}>
               <img src={img} alt="proyect" />
               <div className={style.proyects__info} style={animationProjects} key={proyect ? '1' : '0'}>
                    <a href={github} target="_blank"><BsGithub /></a>
                    <a href={previewWeb} target="_blank"><VscPreview /></a>
               </div>
          </li>
     );
}

export default CardProyect;