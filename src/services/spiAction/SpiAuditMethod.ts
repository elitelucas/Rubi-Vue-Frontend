import http from '@/utils/http'

export default {
  index() {
    console.log('TO DO')
  },
  getData(data: any) {
    return http.post('/spi-audit', data, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
      .then(response => {
        if (response.status !== 200)
          throw response.status

        else
          return response.data
      })
  },
}
