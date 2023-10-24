import React, { useRef } from 'react';
import styles from './nav.module.css';

export default function Nav({ mainSkillsRef, introRef, projectsRef}) {
 const navHeight = useRef(null); // nav 높이 참조값

  return (
    <>
      <div className={`${styles.nav}`} ref={navHeight}> 
      {/* navHeight: 'nav 높이' 참조값  */}
        <div onClick={()=>{window.location.replace("/")}} className={`${styles.portfolio}`}>Portfolio</div>
        <div>
          <ul className={`${styles.nav_menu}`}>
            <li
              onClick={() => { 
                window.scroll({
                  top: introRef.current.offsetTop - navHeight.current.clientHeight,
                  behavior: 'smooth',
                });
              }}
            >
              &lt; About /&gt;
            </li>
           
            <li
              onClick={() => {
                window.scroll({
                  top: projectsRef.current.offsetTop - navHeight.current.clientHeight,
                  behavior: 'smooth',
                });
              }}
            >
              &lt; Projects /&gt;
            </li>

            <li
              onClick={() => {
                window.scroll({
                  top: mainSkillsRef.current.offsetTop - navHeight.current.clientHeight,
                  behavior: 'smooth',
                });
              }}
            >
              &lt; Skills /&gt;
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
