import React from 'react'
import styles from './footer.module.css'
import {SiBloglovin} from 'react-icons/si'
import {RxGithubLogo} from 'react-icons/rx'

export default function Footer() {
  return (
    <div>
      <div className={`${styles.footer_container}`}>        
        <div className={`${styles.archive}`}>                
            <a href={'https://blog.naver.com/beneum11'} target='_blank'><button><SiBloglovin></SiBloglovin></button></a>
            <a href={'https://github.com/beneum/Realestate-Project'} target='_blank'><button><RxGithubLogo></RxGithubLogo></button></a>
        </div>   
        <div className={`${styles.copyright}`}>Copyright © 2023 Taeheon Eum</div>  
      </div>        
    </div>
  )
}
