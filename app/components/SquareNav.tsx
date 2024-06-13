import React from 'react'

const Navbar = () => {
  let navItemStyle = '-rotate-90 text-[56px]'
  let navItemWHoleStyle = 'bg-slate-300 h-full text-center flex flex-col space-y-[450px] text-white hover:text-sky-400/25'
  let navIndexStyle = 'text-[64px]'

  let navItems = ['HOME', 'ABOUT', 'SERVICES', 'WORK', 'CONTACT', 'BLOG']
  return (
    <div className="columns-6 w-3/6 h-screen absolute top-0 right-0 align-top">
      {navItems.map((item, index) => {
        return (
          <div key={index} className={navItemWHoleStyle}>
            <div className={navIndexStyle}>{index + 1}</div>
            <div className={navItemStyle}>{item}</div>
          </div>
        )
      })
      }
    </div>

  )
}

export default Navbar