import React from 'react'
import { render } from '@testing-library/react'

import NotFound from './NotFound'

describe('<NotFound />', () => {
  it('should render correctly', () => {
    const { getByText } = render(<NotFound />)
    expect(getByText('404 - Not Found')).toBeTruthy()
  })
})


