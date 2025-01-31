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
        img: "https://s3-alpha-sig.figma.com/img/2f11/04e4/05616a55ddcf4be4aa4f1d1f6a96c582?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iX2tC9g1DdTISKkwKzumHlQJQKD9qh1UHTTThs7NAbOmAMggBjgucrH0lTzzRH4TAepZKjLQOIUwA27tk7TyyKoTQxlW66mQlThEw6CC2PgbXpg99NCiRUg5Fz~JMLTrAt2n82P6Tfz8zFpM9dcQkuITiU9FFmIJ2Q-JukG9OpQ~GLt6FIZBfU47uxQLihu3DwicOEl6SQaNEoKUMRWLn9nNXYoLs52z77TvFI4ii6k-~gMjl619~SYP0F9mHPE0F4v3Y5X4CAAPvS-Roz6OKRxogLd6Wkms7bTazRl7awSuZOULBERgEslycyfTA-HoatPssTZPIUxrCbd8NAxDIQ__",
      },
      {
        id: 2,
        title: "تقنية تخطيط الموارد",
        description: "لإدارة موارد مؤسستك بشكل متكامل",
        img: "https://s3-alpha-sig.figma.com/img/2f11/04e4/05616a55ddcf4be4aa4f1d1f6a96c582?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iX2tC9g1DdTISKkwKzumHlQJQKD9qh1UHTTThs7NAbOmAMggBjgucrH0lTzzRH4TAepZKjLQOIUwA27tk7TyyKoTQxlW66mQlThEw6CC2PgbXpg99NCiRUg5Fz~JMLTrAt2n82P6Tfz8zFpM9dcQkuITiU9FFmIJ2Q-JukG9OpQ~GLt6FIZBfU47uxQLihu3DwicOEl6SQaNEoKUMRWLn9nNXYoLs52z77TvFI4ii6k-~gMjl619~SYP0F9mHPE0F4v3Y5X4CAAPvS-Roz6OKRxogLd6Wkms7bTazRl7awSuZOULBERgEslycyfTA-HoatPssTZPIUxrCbd8NAxDIQ__",
      },
      {
        id: 2,
        title: "تقنية تخطيط الموارد",
        description: "لإدارة موارد مؤسستك بشكل متكامل",
        img: "https://s3-alpha-sig.figma.com/img/2f11/04e4/05616a55ddcf4be4aa4f1d1f6a96c582?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iX2tC9g1DdTISKkwKzumHlQJQKD9qh1UHTTThs7NAbOmAMggBjgucrH0lTzzRH4TAepZKjLQOIUwA27tk7TyyKoTQxlW66mQlThEw6CC2PgbXpg99NCiRUg5Fz~JMLTrAt2n82P6Tfz8zFpM9dcQkuITiU9FFmIJ2Q-JukG9OpQ~GLt6FIZBfU47uxQLihu3DwicOEl6SQaNEoKUMRWLn9nNXYoLs52z77TvFI4ii6k-~gMjl619~SYP0F9mHPE0F4v3Y5X4CAAPvS-Roz6OKRxogLd6Wkms7bTazRl7awSuZOULBERgEslycyfTA-HoatPssTZPIUxrCbd8NAxDIQ__",
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
                      <h4 className="text-4xl font-semibold">{item.title}</h4>
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