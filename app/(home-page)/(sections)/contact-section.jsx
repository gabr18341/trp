import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
  return (
    <section className='contact-section py-10 px-8'>
        <div className="container flex items-center gap-12">
            <div className="contact-img">
                <img src="/img/icons/contact-icon.svg" alt="" />
            </div>
            <div className="contact-content">
                <h6> تواصل معنا </h6>
                <p>
                نحن هنا لمساعدتك. لا تتردد في التواصل معنا إذا كان لديك أي استفسار متعلق بشركتنا أو خدماتنا  
                </p>
                <Link href={'#'} className='main-btn' >احجز استشارة مجانية </Link>
            </div>
        </div>
    </section>
  )
}

export default ContactSection