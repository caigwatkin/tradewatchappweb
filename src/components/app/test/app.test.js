import App from '../app'
import { render, screen } from '@testing-library/react'
import { TEXT } from '../constants'
import userEvent from '@testing-library/user-event'
import { waitFor } from '@testing-library/react'

describe('render defaults', () => {
  test('clicking on content renders toast', async () => {
    render(<App />)

    const menuItem = screen.getByText(TEXT.CONTENT)
    expect(menuItem).toBeInTheDocument()

    userEvent.click(menuItem)

    await waitFor(() => {
      const toast = screen.getByText(TEXT.CONTENT_SUCCESS_TOAST_TITLE)
      return expect(toast).toBeInTheDocument()
    })
  })
})
