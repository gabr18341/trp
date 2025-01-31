"use client"
import React from 'react'

const OurBusiness = () => {
    function handelChangeSlider(targetBox) {
       const boxIcons = document.querySelectorAll('.box-icons .box-icon'); 
       console.log(targetBox);
       
       boxIcons.forEach(boxIcon => {
           if (!boxIcon.classList.contains(`${targetBox}`)) {
               boxIcon.classList.remove('active');
           } else {
                boxIcon.classList.add('active');
           }
       });
    }
  return (
    <section className='our-business py-10 px-8'>
        <div className="container">
            <h6>أيا كان مجال عملك</h6>
            <h5> يضمن لك إدارة سلسة وفعالة  TRP</h5>
            <p>من خلال باقة من البرامج القابلة للتخصيص , وداعا للمشاكل الادارية .</p>
            <div className="slider-container relative">
                <div className="box-icons">
                    <div onClick={() => handelChangeSlider('top-right')}  className="box-icon active top-right">
                        <img src="/img/pages/home/features/5.svg" alt="" />
                    </div>
                    <div onClick={() => handelChangeSlider('center-right')} className="box-icon center-right">
                        <img src="/img/pages/home/features/1.svg" alt="" />
                    </div>
                    <div onClick={() => handelChangeSlider('bottom-right')} className="box-icon bottom-right">
                        <img src="/img/pages/home/features/4.svg" alt="" />
                    </div>
                    <div onClick={() => handelChangeSlider('top-left')} className="box-icon top-left">
                        <img src="/img/pages/home/features/2.svg" alt="" />
                    </div>
                    <div onClick={() => handelChangeSlider('center-left')} className="box-icon center-left">
                        <img src="/img/pages/home/features/3.svg" alt="" />
                    </div>
                    <div onClick={() => handelChangeSlider('bottom-left')} className="box-icon bottom-left">
                        <img src="/img/pages/home/features/9.svg" alt="" />
                    </div>
                </div>
                <div className="center-box">
                    <div className="slider-img">
                        <img src="/img/pages/home/discover.png" alt="" />
                    </div>
                    <div className="slider-content">
                        <h6>الحسابات</h6>
                        <p>
                        يوفر نظام الادارة المالية للشركات مجموعة كاملة من الوضائف المحاسبية لتتبع العمليات المالية اليومية وربع سنوية والسنوية.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurBusiness