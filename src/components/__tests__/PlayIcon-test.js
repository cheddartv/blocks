import 'react-native'
import React from 'react'
import { render } from '@testing-library/react-native'
import PlayIcon from '../PlayIcon'

jest.mock('../Icon', () => ({ name, size }) => <>{size}</>)
let subject

describe('<PlayIcon/>', () => {
  it('Icon is passed correct size', () => {
    subject = render(<PlayIcon />)
    expect(subject.toJSON().children[0]).toEqual('9')
  })

  describe('when PlayIcon is standard size', () => {
    it('Icon is passed correct size', () => {
      subject = render(<PlayIcon standard={true} />)
      expect(subject.toJSON().children[0]).toEqual('10')
    })
  })
})
