import React from 'react'
import { itBehavesLike } from '../../../../config/jest/util'
import articles from '../../../mock/articles'
import HorizontalCard from '../HorizontalCard'

describe('<HorizontalCard/>', () => {
  itBehavesLike('Component renders', {
    component: (
      <HorizontalCard article={articles.node.collectables.edges[0].node} />
    )
  })
})
