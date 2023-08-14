const dbURL = `https://sushi-6629d-default-rtdb.europe-west1.firebasedatabase.app/`

const db = {
  get: (url) => {
    return axios({
      method: 'get',
      url: `${dbURL}${url || ''}.json`
    }).then( res => res.data)
  },
  post: (url, data) => {
    return axios({
      method: 'post',
      url: `${dbURL}${url || ''}.json`,
      data
    }).then( res => res.data)
  },
  patch: (url, data) => {
    return axios({
      method: 'patch',
      url: `${dbURL}${url || ''}.json`,
      data
    }).then( res => res.data)
  },
  delete: (url, data) => {
    return axios({
      method: 'delete',
      url: `${dbURL}${url || ''}.json`,
      data
    }).then( res => res.data)
  }
}
