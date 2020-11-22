import { StatusCodes } from 'http-status-codes'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function userSignInPost() {
  await sleep(1000)

  const responsePayload = {
    status: StatusCodes.OK,
    body: {
      uid: 'UID',
    },
  }

  return responsePayload
}

export async function userSignOutPost() {
  await sleep(1000)

  const responsePayload = {
    status: StatusCodes.OK,
  }

  return responsePayload
}
