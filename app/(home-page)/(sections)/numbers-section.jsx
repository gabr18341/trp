import React from 'react';
import { NumberTicker } from "@/components/ui/number-ticker";

const NumbersSection = () => {
  return (
    <section className='numbers-section py-10 px-8'>
        <div className="container flex justify-center items-center gap-3 flex-wrap">
            <div className="card-number">
                <div className="img-box">
                    <img src="/img/pages/home/brunch.svg" alt="" />
                </div>
                <div className="content-box">
                    <h6 className='flex gap-2'>
                    <NumberTicker
                        value={5.67}
                        decimalPlaces={2}
                        className="whitespace-pre-wrap tracking-tighter text-inherit"
                    />
                         الف</h6>
                    <p>متجر انظم لنا</p>
                </div>
            </div>
            <div className="card-number">
                <div className="img-box">
                    <img src="/img/pages/home/brunch.svg" alt="" />
                </div>
                <div className="content-box">
                <h6 className='flex gap-2'>
                    <NumberTicker
                        value={1567}
                        className="whitespace-pre-wrap tracking-tighter text-inherit"
                    />
                         الف</h6>
                    <p>متجر انظم لنا</p>
                </div>
            </div>
            <div className="card-number">
                <div className="img-box">
                    <img src="/img/pages/home/brunch.svg" alt="" />
                </div>
                <div className="content-box">
                <h6 className='flex gap-2'>
                    <NumberTicker
                        value={467}
                        className="whitespace-pre-wrap tracking-tighter text-inherit"
                    />
                         الف</h6>
                    <p>متجر انظم لنا</p>
                </div>
            </div>
            <div className="card-number">
                <div className="img-box">
                    <img src="/img/pages/home/brunch.svg" alt="" />
                </div>
                <div className="content-box">
                <h6 className='flex gap-2'>
                    <NumberTicker
                        value={67}
                        decimalPlaces={0}
                        className="whitespace-pre-wrap tracking-tighter text-inherit"
                    />
                         الف</h6>
                    <p>متجر انظم لنا</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NumbersSection