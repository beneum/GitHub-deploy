import React, { forwardRef }  from 'react'

const Intro = forwardRef((props, ref) => {
  return (
    <div>
      <div className='intro' ref={ref}>
        <div className="intro-container">
          <h2>안녕하세요 <span>영어</span>가 특기인<br /> Frontend 개발자 엄태헌입니다</h2>
          <div>
            <p>영어 구사능력을 이용해서 다양한 영문 레퍼런스를 활용하고</p> 
            <p>에러가 발생했을 때, 영문 구글링을 통해</p>
            <p>다방면의 솔루션을 찾을 수 있는 능력이 저의 장점입니다.</p>
            <br />
            <p className='toeic'>공인시험 TOEIC 960점</p>                   
          </div>
        </div>
        
       
      </div>
    </div>
  )
}) 

export default Intro