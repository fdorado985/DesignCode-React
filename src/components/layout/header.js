import React from "react"

const menuData = ["Courses", "Tutorials", "Livestreams"]

export default function Header() {
  return (
    <>
      {menuData.map(item => (
        <p>{item}</p>
      ))}
    </>
  )
}
