import style from '../../style/nav.module.css';
import logo from '../../../public/code.json';
import Lottie from 'lottie-react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useState } from 'react';

function Nav( { mainRef } ) {
          
     // posicion del active del menu
     const [linkmenu1, setLinkmenu1] = useState( false );
     const [linkmenu2, setLinkmenu2] = useState( false );
     const [linkmenu3, setLinkmenu3] = useState( false );
     const [linkmenu4, setLinkmenu4] = useState( false );
     // 
     const [showNav, setShowNav] = useState();
     const showAnim = {
          animation: showNav ?
               'navAnim 1s forwards alternate ease-in-out'
               :
               'navAnim 1s forwards alternate-reverse ease-in-out'
     }

     // ? width Screen 
     useEffect( () => {
          const handleResize = () => {
               if ( window.innerWidth > 500 ) setShowNav( false )
          }

          window.addEventListener( 'resize', handleResize );

          return () => {
               window.removeEventListener( 'resize', handleResize );
          };
     }, [] )
     // scroll
     useEffect( () => {
          function handleScroll() {
               const scrolly = mainRef.current.scrollTop;
               const sizeFull = mainRef.current.scrollHeight;
              
               setLinkmenu1( false )
               setLinkmenu2( false );
               setLinkmenu3( false )
               setLinkmenu4( false )
               
               if ( scrolly < 330 ) {
                    setLinkmenu1( true )
               } else if ( scrolly <= 1100 ) {
                    setLinkmenu2( true )

               }
               if ( scrolly > 1100 &&  scrolly <  1700 ) {
                    setLinkmenu3( true )
               }
                if ( scrolly >  1700){
                    setLinkmenu4( true )
               }

          }


          // Añade un manejador de eventos para el evento de desplazamiento
          mainRef.current.addEventListener( 'scroll', handleScroll );

     } );
     return (
          <div className={style.nav}>
               <Lottie animationData={logo} className={style.logo} />
               <ul style={showAnim} key={showNav} >
                    <li className={linkmenu1 ? style.navActive : ''}>About Us</li>
                    <li className={linkmenu2 ? style.navActive : ''}>Services</li>
                    <li className={linkmenu3 ? style.navActive : ''}>Projects</li>
                    <li className={linkmenu4 ? style.navActive : ''}>Contact</li>
               </ul>
               <AiOutlineMenu className={style.nav__btnToggle} onClick={() => setShowNav( !showNav )} />
          </div>
     );
}

export default Nav;