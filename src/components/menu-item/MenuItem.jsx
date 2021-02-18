import React from "react"
import "./menuItem.styles.scss"

const MenuItem = ({ title, url, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${url})`,
        }}
      />
      <div className="content">
        <h2 className="title">{title}</h2>
        <span className="subtitle">BUY NOW</span>
      </div>
    </div>
  )
}

export default MenuItem
