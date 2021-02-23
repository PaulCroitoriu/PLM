import React, { useState } from "react"
import MenuItem from "../menu-item/MenuItem"

const Directory = () => {
  const [sections] = useState([
    {
      id: 1,
      title: "Mountain bike",
      url:
        "https://images.unsplash.com/photo-1575585269294-7d28dd912db8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW4lMjBiaWtlfGVufDB8MHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 2,
      title: "Road bike",
      url:
        "https://images.unsplash.com/photo-1497515098781-e965764ab601?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8cm9hZCUyMGJpa2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      title: "Hibryd bike",
      url:
        "https://images.unsplash.com/photo-1603983737968-1ef5f8af66af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTl8fGh5YnJpZCUyMGJpa2V8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      title: "Electric bike",
      size: "large",
      url:
        "https://images.unsplash.com/photo-1579118690145-7753994c2d56?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGVsZWN0cmljJTIwYmlrZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      title: "Touring bike",
      size: "large",
      url:
        "https://images.unsplash.com/photo-1613463220551-bae3a5f21bd0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGVsZWN0cmljJTIwYmlrZXxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
  ])
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  )
}

export default Directory
