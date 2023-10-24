import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import {RiCake2Line} from 'react-icons/ri'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {GiGraduateCap} from 'react-icons/gi'
import {AiFillGithub} from 'react-icons/ai'
import {SiBlogger} from 'react-icons/si'
import styles from './about.module.css'

export default function About() {
  return (
    <div>
      <div className={`${styles.about}`}>
        <div>
          <img className={`${styles.portrait}`} src={`${process.env.PUBLIC_URL}job.png`} />
        </div>
        <div>
          <div className={`${styles.ABOUT}`}>ABOUT</div>
          <div className={`${styles.about_detail_box}`}>
            <p className={`${styles.about_detail}`}>
              <BsFillPersonFill></BsFillPersonFill><span>엄태헌</span>
            </p>
            <p className={`${styles.about_detail}`}>
              <RiCake2Line></RiCake2Line><span>1992. 12. 22</span>
            </p>
            <p className={`${styles.about_detail}`}>
              <AiOutlineHome></AiOutlineHome><span>경기도 이천시</span>
            </p>
            <p className={`${styles.about_detail}`}>
              <AiOutlineMail></AiOutlineMail><span>beneum11@gmail.com</span>
            </p>
            <p className={`${styles.about_detail}`}>
              <GiGraduateCap></GiGraduateCap><span>한성대학교 (영어영문학과)</span>
            </p>
            <br className='br' />
            <hr className='hr'/>
            <p className={`${styles.about_detail}`}>
              <AiFillGithub></AiFillGithub><span>Git</span>
            </p>
            <p className={`${styles.about_detail}`}>
              <SiBlogger></SiBlogger><span>BLOG</span>
            </p>
          </div>                                     
        </div>
      </div>
    </div>
  )
}
