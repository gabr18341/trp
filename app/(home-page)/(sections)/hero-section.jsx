import * as React from "react"
 import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const HeroSection = () => {
    const items = [
      {
        id: 1,
        title: "تقنية تخطيط الموارد",
        description: "لإدارة موارد مؤسستك بشكل متكامل",
        img: "/img/pages/active.png",
      },
      {
        id: 2,
        title: "تقنية تخطيط الموارد",
        description: "لإدارة موارد مؤسستك بشكل متكامل",
        img: "/img/pages/active.png",
      },
      {
        id: 2,
        title: "تقنية تخطيط الموارد",
        description: "لإدارة موارد مؤسستك بشكل متكامل",
        img: "/img/pages/active.png",
      },
    ]
    return (
        <section className="hero-section" dir="ltr">
          <Carousel className="w-full">
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem key={index}>
                <div className="slider-item" >
                  <img src={item.img} alt={item.title} />
                  <div dir="rtl" className=" w-full relative z-10 flex items-center h-screen container px-8">
                    <div className=" ">
                      <h4 className="">{item.title}</h4>
                      <p>{item.description}</p>
                      <button className="main-btn">ابدأ خطتك الان</button>
                    </div>
                    <a href="#about" className="scroll-down" ><img src="/img/icons/scroll-to.svg" alt="" /></a>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </section>
      )
};

export default HeroSection