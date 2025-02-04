import Link from 'next/link'
import React from 'react'

const GetStarting = () => {
  return (
    <section className='get-starting px-8' > 
        <div className="container flex justify-center gap-4 items-center flex-col sm:flex-row ">
            <div className="image-box">
                <img src="/img/pages/home/mobile-ui-screens.png" alt="" />
            </div>
            <div className="content-box">
                <img src="/img/pages/home/google-app-store.png" alt="" />
                <h4>
                اكتشف كيف يمكن لـ  TRP 
                </h4>
                <h4>
                    أن تحدث فر ًقا في إدارة عمليات شركتك 
                </h4>
                <p>
                    بدءًا من المحاسبة وصولًا إلى التصنيع والإنتاج  
                </p>
                <Link href={'#'} className='main-btn ' > تجربة مجانية الآن! </Link>
            </div>
        </div>
    </section>
  )
}

export default GetStarting