import React from 'react'
import { itBehavesLike } from '../../../../config/jest/util'
import articles from '../../../mock/articles'
import MediaCard from '../MediaCard'

describe('<MediaCard/>', () => {
  itBehavesLike('Component renders', {
    component: (
      <MediaCard article={articles.node.collectables.edges[0].node} />
    )
  })
})
