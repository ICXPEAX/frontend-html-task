import { useState } from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

import './index'
import styled from 'styled-components';

const SliderBarStyle = styled.div`
 height: 100vh;
 width: 30%;
`

const routes = [
    { title: 'Home', icon: 'fas-solid fa-house', path: '/' },
    { title: 'Sales', icon: 'chart-line', path: '/sales' },
    { title: 'Costs', icon: 'chart-column', path: '/costs' },
    { title: 'Payments', icon: 'wallet', path: '/payments' },
    { title: 'Finances', icon: 'chart-pie', path: '/finances' },
    { title: 'Messages', icon: 'envelope', path: '/messages' },
];

const bottomRoutes = [
    { title: 'Settings', icon: 'sliders', path: '/settings' },
    { title: 'Support', icon: 'phone-volume', path: '/support' },
];

const Sidebar = (props) => {
    const { color } = props;
    const [isOpened, setIsOpened] = useState(true);
    const [isTheme, setIsTheme] = useState('light');
    const containerClassnames = classnames('sidebar', { opened: isOpened });

    const goToRoute = (path) => {
        console.log(`going to "${path}"`);
    };

    const toggleSidebar = () => {
        setIsOpened(v => !v);
    };

    return (
    

      <aside className={`sliderbar ${isOpened ? "SliderOpen" : "SliderClose"} `}>
<nav className={`navbar ${isTheme ? "WhiteTheme" : "BlackTheme"}`}>
  <div className='logovisual'>
    <img src={ logo } alt="TensorFlow logo" className={`logoIsOpen ${isOpened ? "LogoOpenMove" : "LogoCloseMove"}`} height={32}/>

    <p className={`logoIsOpen ${isOpened ? "LogoOpen" : "LogoClose"} ${isTheme ? "WhiteTextIconTheme" : "BlackTextIconTheme"}`}>TensorFlow</p>

    <button onClick={() => setIsOpened(curr =>!curr)} className={`buttonVisual ${isOpened ? "ButtonOpen" : "ButtonClose"} ${isTheme ? "ButtonSwitchWhite" : "ButtonSwitchBlack"}`}>
    <FontAwesomeIcon height={20} width={30}  icon={ isOpened ? 'angle-left' : 'angle-right' }/>
    </button>
    <button onClick={() => setIsTheme(curr => !curr)} className={`buttonVisualTheme ${isOpened ? "ButtonOpenTheme" : "ButtonCloseTheme"} ${isTheme ? "ButtonSwitchWhite" : "ButtonSwitchBlack"}`}>
      <FontAwesomeIcon height={20} width={30}  icon={ isTheme ? 'sun' : 'moon' }/>
      </button>

    
  </div>

  <div>
  {routes.map(route => (
 <li  className={`listvisual ${isTheme ? "WhiteTextIconTheme" : "BlackTextIconTheme"}`}>
  <div className='iconVisual'>
  <FontAwesomeIcon icon={ route.icon }/>
  </div>
  <div className={`logoIsOpen ${isOpened ? "LogoOpen" : "LogoClose"} `}>
                    {route.title}

                    
                    </div>
                     </li>
                   
                ))}
                
                </div>
                 
                <div className='buttomRoutes'></div>
                <div>
  {bottomRoutes.map(route => (
 <li  className={`listvisual ${isTheme ? "WhiteTextIconTheme" : "BlackTextIconTheme"}`}>
  <div className='iconVisual'>
  <FontAwesomeIcon icon={ route.icon }/>
  </div>
  <div className={`logoIsOpen ${isOpened ? "LogoOpen" : "LogoClose"} `}>
                    {route.title}

                    
                    </div>
                     </li>
                   
                ))}
                </div>
                
                
                 

  <div className={`accountbuttomvisual ${isTheme ? "WhiteButtomTheme" : "BlackButtomTheme"}`}>

    <img src='https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true' alt='' className='' height={32}/>

    <div className="iconAccountVisual">
      <div>
        <h4  className={`logoIsOpen ${isOpened ? "LogoOpen" : "LogoClose"} ${isTheme ? "WhiteTextIconTheme" : "BlackTextIconTheme"}`}>Profile name</h4>
        <span  className={`logoIsOpen ${isOpened ? "LogoOpen" : "LogoClose"} ${isTheme ? "WhiteTextIconTheme" : "BlackTextIconTheme"}`}>test@gmail.com</span>
      </div>
    </div>
  </div>

</nav>

      </aside>

/*         <div className={ containerClassnames }>
            <div>
                
                <span>TensorFlow</span>
                <div onClick={ toggleSidebar }>
                    
                </div>
            </div>
            <div>
                {
                    routes.map(route => (
                        <div
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            <FontAwesomeIcon icon={ route.icon }/>
                            <span>{ route.title }</span>
                        </div>
                    ))
                }
            </div>
            <div>
                {
                    bottomRoutes.map(route => (
                        <div
                            key={ route.title }
                            onClick={() => {
                                goToRoute(route.path);
                            }}
                        >
                            
                            <span>{ route.title }</span>
                        </div>
                    ))
                }
            </div>
        </div> */

    );
}; 




Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
