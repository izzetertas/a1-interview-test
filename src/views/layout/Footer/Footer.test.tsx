import React from 'react'
import { render } from '@testing-library/react'
import Footer from './Footer'

describe('<Footer />', () => {
  it('should render "©Auto1 Group 2019"', () => {
    const { container } = render(<Footer />);
    expect(container.innerHTML).toContain('© AUTO1 Group 2018');
  });
});
