import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Link from 'next/link'
  
const StepsSection = () => {
  return (
    <section className='steps-section py-10'>
        <div dir='ltr' className="container px-8 ">
        <Carousel>
            <CarouselContent >
                <CarouselItem  className="md:h-[350px] h-[450px]">
                    <div dir='rtl' className="carousel-item flex justify-center gap-4 items-center flex-col sm:flex-row ">
                        <div className="carousel-content p-4">
                            <Link className='main-btn' href="#">
                            ابدأ الان
                            </Link>
                            <h5>
                                من خلال 4 خطوات فقط
                            </h5>
                            <p>
                            تستطيع بدء عملك
                            </p>
                            <div className="steps-container mt-4 ">
                                <button className="step-item">1</button>
                                <button className="step-item">2</button>
                                <button className="step-item">3</button>
                                <button className="step-item">4</button>
                            </div>
                        </div>
                        <div className="carousel-img flex flex-col ">
                            <h5>حدد احتياجاتك</h5>
                            <img src="/img/pages/home/discover.png" alt="" />
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem  className="md:h-[350px] h-[450px]">
                    <div dir='rtl' className="carousel-item flex justify-center gap-4 items-center flex-col sm:flex-row ">
                        <div className="carousel-content p-4">
                            <Link className='main-btn' href="#">
                            ابدأ الان
                            </Link>
                            <h5>
                                من خلال 4 خطوات فقط
                            </h5>
                            <p>
                            تستطيع بدء عملك
                            </p>
                            <div className="steps-container mt-4 ">
                                <button className="step-item">1</button>
                                <button className="step-item">2</button>
                                <button className="step-item">3</button>
                                <button className="step-item">4</button>
                            </div>
                        </div>
                        <div className="carousel-img flex flex-col ">
                            <h5>حدد احتياجاتك</h5>
                            <img src="/img/pages/home/discover.png" alt="" />
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className=" left-[-30px] md:left-1 border-white " />
            <CarouselNext className=" border-white right-[-30px]  md:right-1" />
        </Carousel>

        </div>
    </section>
  )
}

export default StepsSection