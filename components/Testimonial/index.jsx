import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as gi from 'react-icons/gi'
import { AiOutlineSwapLeft } from 'react-icons/ai'
import { useTheme } from 'next-themes'
const Index = ({ testimonials }) => {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
const AchievementImage = gi.GiAchievement;
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    dots: true,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SlickArrowRight theme={theme} mounted={mounted} />,
    prevArrow: <SlickArrowLeft theme={theme} mounted={mounted} />,
  }

  return (
    <>
      <div className="absolute left-0 w-fit -rotate-90 h-full whitespace-nowrap mr-auto top-32 z-0">
        <h1 className="text-[45px] ml-[200px] text-neutral-100 dark:text-[#1D1D1D] uppercase font-black">
          Achievements
        </h1>
      </div>
      <Slider {...settings} className="flex container justify-center">
        {testimonials.map(
          ({ hidden, name, company, description, image }, i) =>
            !hidden && (
              <div key={i} className="flex overflow-hidden w-full group flex-col space-y-6">
                <div className="mx-auto px-4 py-8">
                  <section className="rounded-lg bg-gray-100 dark:bg-blueGray-400 dark:bg-opacity-5 p-8">
                    <div className="grid md:grid-cols-4 sm:grid-cols-3 gap-12 sm:items-center">
                      <div className="md:block hidden">
                       <AchievementImage className="md:w-[15rem] md:h-[15rem] text-5xl md:!text-7xl text-[#222] dark:text-white" />
                      </div>

                      <blockquote className="sm:col-span-3">
                      <h2> <strong> <b>{name} </b> </strong></h2> <br/>
                        <p className="lg:text-xl font-extralight text-lg whitespace-pre-line">
                          {description.replace(/<br\/>/g, '\n\n')}
                        </p>
                        <cite className="mt-8 inline-flex items-center not-italic">
                          <span className="hidden h-px w-6 bg-gray-400 sm:inline-block"></span>
                          <p className="text-sm sm:ml-3">
                            {company}.
                          </p>
                        </cite>
                      </blockquote>
                    </div>
                  </section>
                </div>
              </div>
            ),
        )}
      </Slider>
    </>
  )
}

const SlickArrowLeft = ({ currentSlide, theme, mounted, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'absolute group border dark:border-slate-900 shadow-md overflow-hidden z-30  py-6 flex items-center justify-center text-red-500 left-0 top-[90%] md:top-[60%] p-4' +
      (currentSlide === 0 ? ' slick-disabled' : '')
    }
    style={{
      background: `${
        theme && mounted && theme === 'light'
          ? 'linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))'
          : 'linear-gradient(rgba(2,4,12,0.7), rgba(2,4,12,0.7))'
      }`,
    }}
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <AiOutlineSwapLeft className="text-2xl" />
    <div className="absolute z-10 bg-gradient-to-b from-themeOrange flex items-center justify-center transition-all duration-300 to-themePink h-full w-full inset-0 top-[-100%] group-hover:top-0">
      <AiOutlineSwapLeft className="text-2xl z-20 text-white " />
    </div>
  </button>
)
const SlickArrowRight = ({ currentSlide, theme, mounted, slideCount, ...props }) => (
  <button
    {...props}
    className={
      'absolute shadow-md border group dark:border-slate-900 rotate-180 overflow-hidden z-30 bg-white py-6 right-0 top-[90%] md:top-[60%] p-4' +
      (currentSlide === 0 ? ' slick-disabled' : '')
    }
    style={{
      background: `${
        theme && mounted && theme === 'light'
          ? 'linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))'
          : 'linear-gradient(rgba(2,4,12,0.7), rgba(2,4,12,0.7))'
      }`,
    }}
    aria-hidden="true"
    aria-disabled={currentSlide === 0}
    type="button"
  >
    <AiOutlineSwapLeft className="text-2xl z-20 text-themePink " />
    <div className="absolute z-10 bg-gradient-to-b from-themeOrange flex items-center justify-center transition-all duration-300 to-themePink h-full w-full inset-0 top-[-100%] group-hover:top-0">
      <AiOutlineSwapLeft className="text-2xl z-20 text-white " />
    </div>
  </button>
)
export default Index
