import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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
    <Wrapper>
      <img src="/images/logos/logo.svg" />
      <MenuWrapper>
        {menuData.map((item, index) => (
          <Link to={item.link} key={index}>
            <img src={item.icon} alt={item.title} />
            {item.title}
          </Link>
        ))}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(3, auto);
`
