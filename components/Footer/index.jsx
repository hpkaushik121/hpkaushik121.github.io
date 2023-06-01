import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const Index = ({ contact }) => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme, theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <div
      style={{
        background: `${
          theme && mounted && theme === 'light'
            ? 'linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5))'
            : 'linear-gradient(rgba(25,26,25, 1), rgba(2,4,12,1))'
        }`,
      }}
      id="contact"
      className="py-12 lg:py-16 border-t bg-[#292D35] z-50 dark:border-none"
    >
      <div className="container  space-y-12 ">
        <h1 className="text-base md:text-lg">{contact.description}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0">
          <div className="flex text-left flex-col space-y-3">
            <div className="uppercase tracking-widest font-semibold text-[#a5a5a5] dark:text-[#efefef]">
              💌 Contact me
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="dark:text-[#efefef] w-fit text-lg text-[#333] hover:opacity-60 transition-all duration-300"
            >
              {contact.email}
            </a>
          </div>
          <div className="flex text-left flex-col space-y-3">
            <div className="uppercase tracking-widest font-semibold  text-[#a5a5a5] dark:text-[#efefef]">
              🤝 LET&apos;S CONNECT
            </div>
            <div className="flex flex-wrap space-x-2">
            {contact.socials.map(
              ({ hidden,link ,name }, i) => (
              <div className="flex font-semibold  text-[#a5a5a5] dark:text-[#efefef]">
              <div className={`h-full text-[#a5a5a5] dark:text-[#efefef] text-xl ${ i == 0 ? 'hidden' :''}`}>|</div>
              <a href={link}
                  className="dark:text-[#efefef] text-lg text-[#333] hover:opacity-60 transition-all duration-300" >
                    &nbsp; {name}
               </a>
              </div>

               )
             )}
            </div>
          </div>
          <div className="flex text-left flex-col space-y-3">
            <div className="uppercase tracking-widest font-semibold text-[#a5a5a5] dark:text-[#efefef]">
              {contact.credits}
            </div>
            <p className="text-lg font-extralight text-[#777] dark:text-[#efefef] transition-all duration-300">
              {contact.lastUpdated}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
