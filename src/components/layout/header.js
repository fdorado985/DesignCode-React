import React from "react"

const menuData = [
  { title: "Courses", icon: "/images/icons/courses.svg", link: "/courses" },
  {
    title: "Tutorials",
    icon: "/images/icons/tutorials.svg",
    link: "/tutorials",
  },
  { title: "Pricing", icon: "/images/icons/pricing.svg", link: "/pricing" },
]

export default function Header() {
  return (
    <>
      {menuData.map(item => (
        <p>
          <img src={item.icon} />
          {item.title}
        </p>
      ))}
    </>
  )
}
