import React from "react"
import { withRouter } from "react-router-dom"
import "./menuItem.styles.scss"

const MenuItem = ({ title, url, size, history, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}mountain-bike`)}
    >
      {console.log(match.url)}
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

export default withRouter(MenuItem)
