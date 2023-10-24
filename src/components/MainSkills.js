import React, { forwardRef } from 'react'
import styles from './mainskills.module.css'


const MainSkills = forwardRef((props, ref) =>{
return (
<div>
    <h2 className={`${styles.MainSkills}`} ref={ref}>Main Skills</h2>
    <div className={`${styles.main_skills_img}`}>
        <img src={`${process.env.PUBLIC_URL}htmlcssjs2.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}react3.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}redux2.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}Recoil.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}ts.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}sass.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}github.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}jquery.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}git.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}Firebase.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}tailwind.png`} alt="" />
        <img src={`${process.env.PUBLIC_URL}vercel.png`} alt="" />
    </div>
</div>
)
}) 

export default MainSkills
