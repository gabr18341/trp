import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='p-8'>
        <div className="container">
            <div className="top-footer flex gap-8">
                <div className="content flex-grow">
                    <h5>عن تقنية تخطيط الموارد</h5>
                    <p>
                    لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت
                    دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا . يوت
                    انيم أد مينيم فينايم,كيواس نوستريد أكسير سيتاشن يللأمكو لابورأس
                    نيسي يت أليكيوب أكس أيا كوممودو كو
                    </p>
                </div>
                <div className="footer-menu flex justify-between flex-grow gap-2">
                    <div className="box">
                        <h5>تواصل معنا</h5>
                        <ul>
                            <li>0559946783 </li>
                            <li>0559946783 </li>
                            <li>0559946783 </li>
                        </ul>
                    </div>
                    <div className="box">
                        <h5> روابط مهمة</h5>
                        <ul>
                            <li>
                                TermsAndConditions
                            </li>
                            <li>ContactUs </li>
                        </ul>
                    </div>
                    <div className="box">
                        <h5>  العنوان</h5>
                        <ul>
                            <li>
                            Al Kawsar Road, Riyadh, 12486  
                            </li>
                        </ul>
                        <div className='mt-8'>
                            <p>حمل التطبيق الآن</p>
                            <div> 
                                <img src="/img/pages/home/google-app-store-w.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-footer flex justify-between items-center pt-4 mt-4">
                <p>
                حقوق الملكية الفكرية 2024 جميع حقوق محفوظة لصالح تقنية تخطيط الموارد ©
                </p>
                <div className="social-icons">
                    <ul className='flex gap-4'>
                        <li>
                            <Link href={'#'}> <img src="/img/icons/facebook.svg" alt="facebook" /></Link>
                        </li>
                        <li>
                            <Link href={'#'}> <img src="/img/icons/instagram.svg" alt="instagram" /></Link>
                        </li>
                        <li>
                            <Link href={'#'}> <img src="/img/icons/twitter.svg" alt="twitter" /></Link>
                        </li>
                        <li>
                            <Link href={'#'}> <img src="/img/icons/youtube.svg" alt="youtube" /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer