import configureStore from 'redux-mock-store'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import Sidebar from '../sidebar'
import { TEXT } from '../constants'
import userEvent from '@testing-library/user-event'
import { USER_SIGN_IN, USER_SIGN_OUT } from '../../../actions/constants'
import { waitFor } from '@testing-library/react'

const renderComponent = (component, mocks) => {
  let mockStore
  mockStore = mocks?.store
    ? configureStore()(mocks.store)
    : configureStore()({})

  mockStore.dispatch = mocks?.dispatch ? mocks.dispatch : jest.fn()

  const Wrapper = ({ children }) => {
    return <Provider store={mockStore}>{children}</Provider>
  }

  Wrapper.propTypes = {
    children: PropTypes.element,
  }

  return render(component, { wrapper: Wrapper })
}

describe('render defaults', () => {
  const MOCK_STORE = {
    user: {
      userSignInPending: false,
      userSignOutPending: false,
    },
  }

  test('clicking on logo renders toast', async () => {
    renderComponent(<Sidebar />, { store: MOCK_STORE })

    const logo = screen.getByText(TEXT.LOGO)
    expect(logo).toBeInTheDocument()

    userEvent.click(logo)

    await waitFor(() => {
      const toast = screen.getByText(TEXT.LOGO_SUCCESS_TOAST_TITLE)
      return expect(toast).toBeInTheDocument()
    })
  })

  test('clicking on sign in dispatches sign in', async () => {
    const mockDispatch = jest.fn()

    renderComponent(<Sidebar />, { dispatch: mockDispatch, store: MOCK_STORE })

    const toasts = screen.getAllByText(TEXT.SIGN_OUT_SUCCESS_TOAST_TITLE)
    toasts.forEach((toast) => expect(toast).toBeInTheDocument()) // TODO: figure out why it renders multiple

    const menuItem = screen.getByText(TEXT.SIGN_IN_MENU_ITEM)
    expect(menuItem).toBeInTheDocument()

    userEvent.click(menuItem)

    expect(mockDispatch).toHaveBeenCalledWith({
      type: USER_SIGN_IN,
    })
  })

  test('sign in pending renders toast', async () => {
    const mockStore = {
      ...MOCK_STORE,
      user: {
        ...MOCK_STORE.user,
        userSignInPending: true,
      },
    }

    renderComponent(<Sidebar />, { store: mockStore })

    const toast = screen.getByText(TEXT.SIGN_IN_PENDING_TOAST_TITLE)
    expect(toast).toBeInTheDocument()
  })

  test('clicking on sign out dispatches sign out', async () => {
    const mockDispatch = jest.fn()

    const mockStore = {
      ...MOCK_STORE,
      user: {
        ...MOCK_STORE.user,
        user: {},
      },
    }

    renderComponent(<Sidebar />, { dispatch: mockDispatch, store: mockStore })

    const toast = screen.getByText(TEXT.SIGN_IN_SUCCESS_TOAST_TITLE)
    expect(toast).toBeInTheDocument()

    const menuItem = screen.getByText(TEXT.SIGN_OUT_MENU_ITEM)
    expect(menuItem).toBeInTheDocument()

    userEvent.click(menuItem)

    expect(mockDispatch).toHaveBeenCalledWith({
      type: USER_SIGN_OUT,
    })
  })

  test('sign out pending renders toast', async () => {
    const mockStore = {
      ...MOCK_STORE,
      user: {
        ...MOCK_STORE.user,
        userSignOutPending: true,
      },
    }

    renderComponent(<Sidebar />, { store: mockStore })

    const toast = screen.getByText(TEXT.SIGN_OUT_PENDING_TOAST_TITLE)
    expect(toast).toBeInTheDocument()
  })

  test('clicking on help menu item renders toast', async () => {
    renderComponent(<Sidebar />, { store: MOCK_STORE })

    const menuItem = screen.getByText(TEXT.HELP_MENU_ITEM)
    expect(menuItem).toBeInTheDocument()

    userEvent.click(menuItem)

    await waitFor(() => {
      const toast = screen.getByText(TEXT.HELP_SUCCESS_TOAST_TITLE)
      return expect(toast).toBeInTheDocument()
    })
  })
})
