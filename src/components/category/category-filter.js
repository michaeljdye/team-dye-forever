import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import CategoryFilterItem from './category-filter-item'

const CategoryFilter = ({ updateCategory }) => {
  const data = useStaticQuery(GET_ALL_CATEGORY)

  const {
    allSanityCategory: { edges: categories },
  } = data

  const allCategories = [...categories, { node: { id: 'all', title: 'All' } }]

  return (
    <div>
      <ul>
        {allCategories.map(({ node: { id, title } }) => (
          <CategoryFilterItem
            key={id}
            category={title}
            updateCategory={updateCategory}
          />
        ))}
      </ul>
    </div>
  )
}

const GET_ALL_CATEGORY = graphql`
  query GetAllCategory {
    allSanityCategory {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`

export default CategoryFilter
