import style from '../style/portafolio.module.css';
import { FcAbout } from 'react-icons/fc';
import { MdOutlineBrandingWatermark, MdOutlineDesignServices, MdOutlineWeb, MdVideoSettings } from 'react-icons/md';
import { BsBrowserEdge, BsGithub, BsGraphUp } from 'react-icons/bs';
import { SiAdobephotoshop, SiMaterialdesign } from 'react-icons/si';
import { AiOutlineCode, AiOutlineTeam } from 'react-icons/ai';
import { FiAward } from 'react-icons/fi';
import { BiCodeAlt } from 'react-icons/bi';
import CardProyect from '../components/CardProyect';
import Nav from '../components/Nav';
import { useRef } from 'react';

// * datos del proyecto (img,github,previewWeb o live)
let datosProtafolio = [
     { img: "https://i.pinimg.com/236x/3d/99/9f/3d999f0a26c4f831c233da2ee15f6762.jpg", github: "", previewWeb: "" },
     { img: "https://i.pinimg.com/236x/02/74/08/02740885f3a909dfca1afa218191dc8b.jpg", github: "", previewWeb: "" },
     { img: "https://i.pinimg.com/564x/b7/cc/f8/b7ccf8b763feea70f937bb18cd2d9780.jpg", github: "", previewWeb: "" },
     { img: "https://i.pinimg.com/564x/aa/77/6a/aa776a824bab3ec4137e6cdada970b61.jpg", github: "", previewWeb: "" },
     { img: "https://i.pinimg.com/236x/6d/8d/ca/6d8dca39e3efccc4b2ea5047534f487f.jpg", github: "", previewWeb: "" },
     { img: "https://i.pinimg.com/236x/62/b1/be/62b1be6d111ad4980e04b49747755de5.jpg", github: "", previewWeb: "" },
     { img: "https://i.pinimg.com/236x/57/d7/9a/57d79a159c463596d8bc5e4f6f9d42ce.jpg", github: "", previewWeb: "" },
     { img: "https://i.pinimg.com/236x/23/0b/48/230b4819be11baff1f8bf799c061deee.jpg", github: "", previewWeb: "" }
]

function Portafolio() {

     let skills = [
          { icon: <MdVideoSettings />, name: 'Video Marketing' },
          { icon: <MdOutlineDesignServices />, name: 'UI & UX Desing' },
          { icon: <BsBrowserEdge />, name: 'Web Design' },
          { icon: <SiAdobephotoshop />, name: 'Photoshop' },
     ]
     // ? referencias a DOM
     let mainRef = useRef();

     return (
          <>
               <Nav mainRef={mainRef} />
               <main ref={mainRef}>
                    {/* home */}
                    <div className={style.home}>
                         <div className={style.home__description}>
                              <span className={style.description__title}>Front-end developer</span>
                              <h1>WE ARE <span>CREATIVE</span> DESIGN AGENCY</h1>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa beatae possimus soluta eum natus tempora provident et laboriosam!.</p>
                              <div className={style.description__btns}>
                                   <FcAbout />
                                   <div className={style.btn__info}>
                                        <span>ABOUT US</span>
                                        <span>My Study</span>
                                   </div>
                              </div>
                         </div>
                         <img src="/persona.png" alt="person" />
                    </div>
                    {/* services */}
                    <div className={style.services}>
                         <div className={style.services__description}>
                              <span className={style.title}>Our Sevices</span>
                              <h1>What We <span>Do</span></h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ad, corrupti inventore aspernatur distinctio repudiandae facilis quasi sunt cumque ratione vitae vel at consequuntur iusto saepe</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam temporibus minus veniam illum, consequatur corporis eaque quia eos, aperiam maxime impedit quasi. Voluptate labore</p>
                              <button>View All</button>
                         </div>
                         <div className={style.services__skills}>
                              {skills.map( ( e, i ) => {
                                   return ( <div className={style.skills__item} key={i}>
                                        {e.icon}
                                        <h3>{e.name}</h3>
                                   </div> )
                              } )}
                         </div>
                    </div>
                    {/* about us */}
                    <div className={style.aboutUs}>
                         <img src="/persona1.png" alt="person" />
                         <div className={style.aboutUs__description}>
                              <span className={style.description__title}>Front-end developer</span>
                              <h1>WE ARE <span>CREATIVE</span> DESIGN AGENCY</h1>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat ipsa beatae possimus soluta eum natus tempora provident et laboriosam!.</p>
                              <div className={style.description__icons}>
                                   <div className={style.icons__item}>
                                        <AiOutlineCode />
                                        <div className={style.item__info}>
                                             <span>Clean Code</span>
                                             <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                   </div>
                                   <div className={style.icons__item}>
                                        <SiMaterialdesign />
                                        <div className={style.item__info}>
                                             <span>Modern Design</span>
                                             <p>Lorem ipsum dolor sit amet consectetur.</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className={style.statistic}>
                         <div className={style.statistic__item}>
                              <BsGraphUp />
                              <span><b>150</b>+</span>
                              <p>Project Done</p>
                         </div>
                         <div className={style.statistic__item}>
                              <BiCodeAlt />
                              <span><b>15</b>+</span>
                              <p>Happy Costumer</p>
                         </div>
                         <div className={style.statistic__item}>
                              <FiAward />
                              <span><b>15</b>+</span>
                              <p>Award Winnig</p>
                         </div>
                         <div className={style.statistic__item}>
                              <AiOutlineTeam />
                              <span><b>15</b>+</span>
                              <p>Teams Menbers</p>
                         </div>
                    </div>
                    {/*  */}
                    <div className={style.proyects}>
                         <div className={style.proyects__description}>
                              <h1>My <span>Projects</span></h1>
                         </div>
                         <ul className={style.proyects__list}>
                              {datosProtafolio.map( ( e, i ) => {
                                   return <CardProyect key={i} {...e} />
                              } )}
                         </ul>
                    </div>
                    {/* contact */}
                    <div className={style.contact}>
                         <div className={style.home__description}>
                              <span className={style.description__title}>Front-end developer</span>
                              <h1>CONTACT <span>ME</span></h1>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni earum maxime quia obcaecati. Animi beatae a exercitationem delectus, quisquam saepe alias id autem nesciunt unde voluptas quas, soluta atque!</p>
                         </div>
                         <form action="#" method='post'>
                              <div className={style.form__input}>
                                   <label htmlFor="correo">Correo</label>
                                   <input type="email" name="correo" id="correo" />
                              </div>
                              <div className={style.form__input}>
                                   <label htmlFor="correo">Asunto</label>
                                   <input type="email" name="correo" id="correo" />
                              </div>
                              <div className={style.form__textarea}>
                                   <label htmlFor="mensaje">Mensaje</label>
                                   <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
                              </div>
                              <button type="submit">Enviar</button>
                         </form>
                    </div>
               </main>
          </>

     );
}

export default Portafolio;