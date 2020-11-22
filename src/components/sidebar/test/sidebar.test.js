import { render, screen } from '@testing-library/react'
import Sidebar from '../sidebar'
import { TEXT } from '../constants'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/react'

describe('render defaults', () => {
  test('clicking on logo renders toast', async () => {
    render(<Sidebar />)

    const logo = screen.getByText(TEXT.LOGO)
    expect(logo).toBeInTheDocument()

    userEvent.click(logo)

    await waitFor(() => {
      const toast = screen.getByText(TEXT.LOGO_TOAST_TITLE)
      return expect(toast).toBeInTheDocument()
    })
  })

  test('clicking on sign in menu item renders toast', async () => {
    render(<Sidebar />)

    const menuItem = screen.getByText(TEXT.SIGN_IN_MENU_ITEM)
    expect(menuItem).toBeInTheDocument()

    userEvent.click(menuItem)

    await waitFor(() => {
      const toast = screen.getByText(TEXT.SIGNED_IN_TOAST_TITLE)
      return expect(toast).toBeInTheDocument()
    })
  })

  test('clicking on help menu item renders toast', async () => {
    render(<Sidebar />)

    const menuItem = screen.getByText(TEXT.HELP_MENU_ITEM)
    expect(menuItem).toBeInTheDocument()

    userEvent.click(menuItem)

    await waitFor(() => {
      const toast = screen.getByText(TEXT.HELPED_TOAST_TITLE)
      return expect(toast).toBeInTheDocument()
    })
  })
})
