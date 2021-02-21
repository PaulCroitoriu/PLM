import React from "react"
import "./collectionPreview.styles.scss"
import CollectionItem from "../collection-item/CollectionItem"

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="titlte">{title.toUpperCase()}</h1>
      <div className="preview">
        {items.slice(0, 4).map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPreview
