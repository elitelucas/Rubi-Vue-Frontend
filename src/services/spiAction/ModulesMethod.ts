import http from '@/utils/http'

export default {
  index() {
    console.log('TO DO')
  },
  getData() {
    return http.get('/admin/modules')
      .then(function (response) {
        if (response.status != 200) {
          throw response.status;
        } else {
          return response.data;
        }
      });
  }
}
