import React from 'react'
const AboutSection = () => {
  return (
    <section id='about' className='about-section'>
        <div className="container flex py-10 justify-between items-center">
            <div className="about-content lg:pr-10">
                <h1>ما هو نظام TRP؟</h1>
                <p>
                يعد TRP برنامج ERP متكامل الذي بمثابة قيادة رقمية متطورة لشركتك. <h6> تخيل لوحة تحكم مركزية تمنحك رؤية بانورامية على كافة عملياتك التشغيلية</h6> من إدارة سلسلة التوريد إلى المبيعات والتسويق والموارد البشرية. لا تقتصر TRPعلى أتمتة المهام الأساسية فحسب، بل إنه يوفر تحليلات قوية تساعدك على اتخاذ قرارات استراتيجية مستندة إلى البيانات.
                </p>
                <div className="mt-3 max-w-[600px]">
                    <h3><span>معTRP،</span> ستتمكن من اكتشاف فرص تحسين خفية، </h3>
                    <p>
                        
                    وتعزيز الكفاءة التشغيلية، وتحقيق ميزة تنافسية حقيقية في السوق 
                    </p>
                </div>
            </div>
            <div className="about-img">
                <img src="/img/pages/home/who_we/who_we.png" alt="who we" />
            </div>
        </div>
    </section>
  )
}

export default AboutSection