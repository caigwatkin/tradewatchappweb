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
      const toast = screen.getByText(TEXT.LOGO_SUCCESS_TOAST_TITLE)
      return expect(toast).toBeInTheDocument()
    })
  })

  test('clicking on sign in or out menu item signs user in or out', async () => {
    render(<Sidebar />)

    const menuItemSignIn = screen.getByText(TEXT.SIGN_IN_MENU_ITEM)
    expect(menuItemSignIn).toBeInTheDocument()

    userEvent.click(menuItemSignIn)

    await waitFor(() => {
      const toast = screen.getByText(TEXT.SIGN_IN_SUCCESS_TOAST_TITLE)
      return expect(toast).toBeInTheDocument()
    })

    const menuItemSignOut = screen.getByText(TEXT.SIGN_OUT_MENU_ITEM)
    expect(menuItemSignOut).toBeInTheDocument()

    userEvent.click(menuItemSignOut)

    await waitFor(() => {
      const toast = screen.getByText(TEXT.SIGN_OUT_SUCCESS_TOAST_TITLE)
      return expect(toast).toBeInTheDocument()
    })
  })

  test('clicking on help menu item renders toast', async () => {
    render(<Sidebar />)

    const menuItem = screen.getByText(TEXT.HELP_MENU_ITEM)
    expect(menuItem).toBeInTheDocument()

    userEvent.click(menuItem)

    await waitFor(() => {
      const toast = screen.getByText(TEXT.HELP_SUCCESS_TOAST_TITLE)
      return expect(toast).toBeInTheDocument()
    })
  })
})
