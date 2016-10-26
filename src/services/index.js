import localStorage from 'localStorage'
import {userSchema, repoSchema, userSchemaArray, repoSchemaArray} from './schemas'
import {callApi} from './api'
import {AUTH} from './config'

const api = {
  fetchUser: login => callApi(`users/${login}`, userSchema),
  fetchRepo: fullName => callApi(`repos/${fullName}`, repoSchema),
  fetchStarred: url => callApi(url, repoSchemaArray),
  fetchStargazers: url => callApi(url, userSchemaArray),
  authorize: (username, password) => callApi(AUTH.url, AUTH.config(username, password)),
  removeItem: item => localStorage.removeItem(),
  storeItem: (item, value) => localStorage.addItem(item, value)
}

export default api
