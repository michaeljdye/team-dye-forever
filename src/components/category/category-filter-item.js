import React from 'react'

const CategoryFilterItem = ({ id, category, updateCategory }) => (
  <li>
    <button onClick={() => updateCategory(category)}>{category}</button>
  </li>
)

export default CategoryFilterItem
