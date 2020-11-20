import { render, screen } from '@testing-library/react'
import Sidebar from '../sidebar'

describe('render defaults', () => {
  it('renders menu with items', () => {
    render(<Sidebar />)

    const menu = screen.getByRole('menu')
    expect(menu).toBeInTheDocument()

    const menuitems = screen.getAllByRole('menuitem')
    menuitems.forEach((menuitem) => expect(menuitem).toBeInTheDocument())
  })
})
