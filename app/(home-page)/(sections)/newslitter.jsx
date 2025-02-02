import React from 'react'

const NewsLitter = () => {
  return (
    <section className='news-litter py-10 px-8'>
        <div className="container flex justify-between items-center">
            <div className="box-right flex-grow flex items-center gap-8">
                <div className="img-box">
                    <img src="/img/icons/send_email_icon.svg" width={'50px'} height={'50px'} alt="" />
                </div>
                <div>
                    <p className='font-bold'>احصل على آخر الأخبار والتحديثات</p>
                    <p>احصل على آخر الأخبار والتحديثات</p>
                </div>
            </div>
            <div className="box-left">
                <p>اشترك في القائمة البريدية</p>
                <div className="input-box flex">
                    <input type="text" />
                    <button>
                        <img src="/img/icons/send-mail.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewsLitter