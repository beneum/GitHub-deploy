import React from "react";
import styled from 'styled-components';
import { BsDot } from "react-icons/bs";
import styles from './projects.module.css'

const CardFront=styled.div`
background-image: url(${props => props.imgsrc});
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

function Card ({proj}) {


    return (
        <div className={`${styles.projects_item}`}>
            <a href={proj.demo} target='_blank'>
                <CardFront className={`${styles.project_front}`} imgsrc={`${process.env.PUBLIC_URL}${proj.image}`}>
                    <div className={`${styles.info}`}>
                        <h3 className={`${styles.title}`}>{proj.title}</h3>
                        <p className={`${styles.click_msg}`}>click</p>
                    </div>
                </CardFront>
            </a>            
        </div>
    );
}

export default Card;