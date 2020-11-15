import { render, screen } from '@testing-library/react'
import App from '../app'

describe('render defaults', () => {
  it('renders menu with item', () => {
    render(<App />)

    const menu = screen.getByRole('menu')
    expect(menu).toBeInTheDocument()

    const menuitem = screen.getByRole('menuitem')
    expect(menuitem).toBeInTheDocument()
  })
})
