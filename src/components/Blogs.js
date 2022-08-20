import React from 'react'


function Blogs() {
    return (
        <>
        <div className='head'>
        <h1 className='top' >Blogs</h1>
        </div>
      <div className='cards'>
    <div className='card'>
      <div className='body'>
        <img className='img' src="https://images.indianexpress.com/2022/08/medical.jpg" alt=''/>
        <h2 className='title'>By Dr.George Baily</h2>
        <p  className='description'>Opening its doors to persecuted minorities who fled Pakistan to practice medicine in India, the National Medical Commission (NMC) on Saturday allowed </p>
      </div>
      <a className='btn' href='https://theredpen.in/blog/the-new-rules-for-indian-medical-students-studying-abroad/'>Continue Reading</a>
    </div>
    <div className='card'>
    <div className='body'>
      <img className='img' src="https://theredpen.in/wp-content/uploads/2021/11/Hero-Image-1.jpg" alt=''/>
      <h2 className='title'>By Dr.Glenn</h2>
      <p className='description'>Recently, the National Medical Commission (NMC) announced the new rules for medical students who want to pursue their medical studies abroad and then return to India to practice medicine. </p>
    </div>
    <a className='btn'  href='https://theredpen.in/blog/the-new-rules-for-indian-medical-students-studying-abroad/'>Continue Reading</a>
  </div>
  <div className='card'>
    <div className='body'>
      <img className='img' src=" https://images.squarespace-cdn.com/content/v1/5aa96c579772aea9adaa2ef7/1610028948119-XGXLXCP69CS1JB4GF9CK/MedicalSchoolStatistics_121.jpg?format=750w" alt=''/>
      <h2 className='title'>By Dr.Mark</h2>
      <p className='description'>Students need to be holistically prepared before they can become doctors. Not just anyone should be able to take care of vulnerable patients </p>
    </div>
    <a className='btn' href='https://etactics.com/blog/medical-school-statistics'>Continue Reading</a>
  </div>
  <div className='card'>
    <div className='body'>
      <img className='img' src="https://aeon.co/_next/image?url=https%3A%2F%2Fepsilon.aeon.co%2Fimages%2Fafef287f-dd6f-4a6a-b8a6-4f0a09330657%2Fidea_sized-kendal-l4ikccachoc-unsplash.jpg&w=1920&q=75" alt=''/>
      <h2 className='title'>By Dr. Barry</h2>
      <p className='description'>Gentle medicine could radically transform medical practice</p>
    </div>
    <a className='btn' href='https://aeon.co/ideas/how-gentle-medicine-could-radically-transform-medical-practice'>Continue Reading</a>
  </div>
  </div>
  </>
    )
};
export default Blogs;

