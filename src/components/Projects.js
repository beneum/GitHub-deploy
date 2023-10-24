import React, { forwardRef } from "react";
import Card from './Card';
import styles from './projects.module.css'
import Description from "./Description";


const Projects = forwardRef((props,ref)=>{
  const projects = [
    {
        title: "부동산 웹사이트",
        image: "Realestate2.png",
        detail: "Firebase의 Authentication에 사용자 데이터를 저장하여 로그인 기능을 구현하고, Firestore Database를 활용하여 자신의 부동산 매물을 올릴 수 있는 부동산 웹페이지입니다.",
        function: "로그인, 회원가입, 매물 올리기, 카카오맵 API",
        start: "2023.09.1",
        end: "2023.09.25",
        tech: ["HTML5 ", "CSS3 ", "React ", "Firebase ", "TailwindCSS"],
        demo: "https://realestate-project-omega.vercel.app/",
        source: "https://github.com/beneum/realestate-project-final",
        blog: "https://blog.naver.com/beneum11",
        
    },
    {
        title: "가구 쇼핑몰 웹사이트",
        image: "Furniture-Mall.png",
        detail: "가격, 브랜드, 색상 등에 따라 필터링 기능을 적용한 가구쇼핑몰 웹사이트입니다.",
        function: "로그인, 회원가입, 매물 올리기, 카카오맵 API",
        start: "2023.08.04",
        end: "2023.08.25",
        tech: ["HTML5 ", "CSS3 ", "React ", "UseReducer ", "Context API"],
        demo: "https://furniture-mall-project.vercel.app/",
        source: "https://github.com/beneum/Furniture-Mall-Project",
        blog: "https://blog.naver.com/beneum11"
    },

]


return(
    <section className={`${styles.projects}`} ref={ref}>
        <h2>PROJECTS</h2>
        <p className={`${styles.intro_detail}`}>*프로젝트를 만들면서 겪은 모든 시행착오를 <a href="https://blog.naver.com/beneum11" target='_blank' className={`${styles.blog}`}>블로그</a> 에 포스팅 했습니다.</p>       
        <div className={`${styles.projects_container}`}>
            <div className={`${styles.projects_grid}`}>
                {
                    projects.map((ele, idx) => {
                        return(
                            <div className={`${styles.project_wrapper}`}>
                                <p className={`${styles.project_title}`}>{ele.title}</p>
                                <div className={`${styles.card_wrapper}`}>
                                    <div key={`proj-${idx}`} className={ `${styles.card_container}` }>
                                        <Card proj={ele} />                                    
                                    </div>
                                    <Description proj={ele} />
                                </div>
                                
                            </div>
                            
                        )
                    })
                }
            </div>
        </div>
        
    </section>
);
})

export default Projects;