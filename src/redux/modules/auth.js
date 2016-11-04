// values saved in local storage
export const TOKEN = 'token'
export const USERNAME = 'username'

const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const LOGIN = createRequestTypes('LOGIN')
export const LOGOUT = createRequestTypes('LOGOUT')
export const ACTIVATION = createRequestTypes('ACTIVATION')

function action(type, payload = {}) {
  return {type, ...payload}
}

export const login = {
  request: (username, password) => action(LOGIN.REQUEST, {username, password}),
  success: (username, token) => action(LOGIN.SUCCESS, {username, token}),
  failure: error => action(LOGIN.FAILURE, {error})
}

export const activate = {
  request: activationURL => action(ACTIVATION.REQUEST, {activationURL}),
  success: () => action(ACTIVATION.SUCCESS),
  failure: error => action(ACTIVATION.FAILURE, {error})
}

export const logout = {
  request: (username, password) => action(LOGIN.REQUEST, {username, password}),
  success: (username, token) => action(LOGIN.SUCCESS, {username, token})
}

const initialState = {
  username: '',
  token: ''
}
// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.SUCCESS:
      return {...state, username: action.username, token: action.token}
    case LOGIN.FAILURE:
      return {...state, error: action.error}
    case LOGOUT.SUCCESS:
      return {...state, username: '', token: ''}
    case ACTIVATION.FAILURE:
      return {...state, error: action.error}
    default:
      return state
  }
}

export default auth
