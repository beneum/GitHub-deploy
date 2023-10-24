import React from 'react'
import styles from './firstPage.module.css'
import {SiBloglovin} from 'react-icons/si'
import {RxGithubLogo} from 'react-icons/rx'

export default function FirstPage() {
    const blockEffectStyle = {
        '--td': '1.2s', // CSS Custom Property
      };

      const style1 = {
        '--bc': '#FFDFB9',
        '--d': '.1s',
      };

      const style2 = {
        '--bc': '#A4193D',
        '--d': '.5s',
      };
    
  return (
    <div className={`${styles.flex_box}`}>
        <div className={`${styles.profileImg_container}`}>
            <img className={`${styles.profile_img}`} src={`${process.env.PUBLIC_URL}profile.png`} alt="" />
            <div className={`${styles.profileImg_hover}`}>
                <div className={`${styles.profileImg_contents}`}>                
                  <a href={'https://blog.naver.com/beneum11'} target='_blank'><button><SiBloglovin></SiBloglovin></button></a>
                  <a href={'https://github.com/beneum/Realestate-Project'} target='_blank'><button><RxGithubLogo></RxGithubLogo></button></a>
                </div>                
            </div>
        </div>
        
        <h1 className={`${styles.block_effect}`} style={blockEffectStyle}>
            <div className={`${styles.block_reveal}`} style={style1}>Taeheon's</div>
            <div className={`${styles.block_reveal}`} style={style2}>Portfolio Website</div>
        </h1>
        
    </div>
  )
}
