import { HTTPClient } from 'boot/axios'

const setPosts = ({ commit }) => {
  return new Promise((resolve, reject) => {
    HTTPClient.get('v2/posts')
      .then((suc) => {
        resolve(suc.data)
        commit('SET_POSTS', suc.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export {
  setPosts
}
