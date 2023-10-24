import React from 'react'
import styles from './projects.module.css'

export default function Description({proj}) {
  return (
    <div>
      <div className={`${styles.proj_detail}`}>{proj.detail}</div>
      <hr />
      <div className={`${styles.description_wrapper}`}>
        <div className={`${styles.about_project}`}>
            <div>
             <p>주요기능</p> <p className={`${styles.about_project_detail}`}>{proj.function}</p>
            </div>
            <div>
             <p>Tech</p> <p className={`${styles.about_project_detail}`}>{proj.tech}</p>
            </div>
            <div>
             <p>Blog</p> <a href={proj.blog} target='_blank' className={`${styles.about_project_detail}`}>{proj.blog}</a>
            </div>
            <div>
             <p>URL</p> <a href={proj.demo} target='_blank' className={`${styles.about_project_detail}`}>{proj.demo}</a>
            </div>
            
            <div>
             <p>GitHub</p> <a href={proj.source} target='_blank' className={`${styles.about_project_detail}`}>{proj.source}</a>
            </div>
        </div>
      </div>
    </div>
  )
}
