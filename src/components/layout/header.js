import React from "react"

const menuData = ["Courses", "Tutorials", "Livestreams"]

function Header() {
  return (
    <>
      {menuData.map(item => (
        <p>{item}</p>
      ))}
    </>
  )
}
