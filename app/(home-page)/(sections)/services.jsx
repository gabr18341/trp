import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const Services = () => {
    const servicesItems = [
        {
            title: "المحاسبة",
            des : "مع نظام، TRP يمكنك إدارة جميع عمليات المحاسبة بفاعلية ودقة يوفر نظامنا  ",
            subSer: [
                {
                    title: "إدارة الفواتير",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: " إدارة الحسابات المدينة والدائنة",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: "إدارة الفواتير",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: " إدارة الحسابات المدينة والدائنة",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
            ]
        },
        {
            title: "المبيعات",
            des : "مع نظام، TRP يمكنك إدارة جميع عمليات المحاسبة بفاعلية ودقة يوفر نظامنا  ",
            subSer: [
                {
                    title: "إدارة الفواتير",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: " إدارة الحسابات المدينة والدائنة",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: "إدارة الفواتير",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: " إدارة الحسابات المدينة والدائنة",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
            ]
        },
        {
            title: "المبيعات",
            des : "مع نظام، TRP يمكنك إدارة جميع عمليات المحاسبة بفاعلية ودقة يوفر نظامنا  ",
            subSer: [
                {
                    title: "إدارة الفواتير",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: " إدارة الحسابات المدينة والدائنة",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: "إدارة الفواتير",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: " إدارة الحسابات المدينة والدائنة",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
            ]
        },
        {
            title: "المبيعات",
            des : "مع نظام، TRP يمكنك إدارة جميع عمليات المحاسبة بفاعلية ودقة يوفر نظامنا  ",
            subSer: [
                {
                    title: "إدارة الفواتير",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: " إدارة الحسابات المدينة والدائنة",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: "إدارة الفواتير",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
                {
                    title: " إدارة الحسابات المدينة والدائنة",
                    des: "إنشاء وإرسال الفواتير بسرعة وسهولة."
                },
            ]
        },
    ]
  return (
    <section className='services-section py-10 '>
        <div className="section-title">
            <h5>TRP صمم حسب احتياجاتك الخاصة لإدارة أعمالك </h5>
            <p>كل احتياجاتك ... في منصة واحدة</p>
        </div>
        <div className=' overflow-x-scroll'>
            <div className="service-cards mt-10">
                {servicesItems.map((service, index) => (
                    <div className="ser-card">
                        <div className="card-head">
                            <h6>{service.title}</h6>
                            <p> {service.des} </p>
                        </div>
                        <div className="card-body">
                            {
                                service.subSer.map((item, index) => (
                                    <div className="list-item">
                                        <span className="item-number"> 0{index + 1} </span>
                                        <div className="item-content">
                                            <p> {item.title} </p>
                                            <span>   {item.des}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services