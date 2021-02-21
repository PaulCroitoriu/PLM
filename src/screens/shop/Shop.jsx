import React, { useState } from "react"
import CollectionPreview from "../../components/collection-preview/CollectionPreview"
import { SHOP_DATA } from "./shop.data"

const Shop = () => {
  const [shopData] = useState(SHOP_DATA)
  console.log(shopData)

  return (
    <div className="shop-page">
      {shopData.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default Shop
