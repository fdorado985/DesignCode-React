import React, { useState } from "react"

export default function MenuTooltip() {
  const [isOpen, setIsOpen] = useState(false)

  return <div onClick={() => setIsOpen(true)}>{isOpen ? "Open" : "Closed"}</div>
}
