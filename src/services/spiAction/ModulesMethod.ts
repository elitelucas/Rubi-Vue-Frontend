import http from '@/utils/http'

export default {
  index() {
    console.log('TO DO')
  },

  getData() {
    return http.get('/v1/admin/modules')
      .then(function (response) {
        if (response.status != 200) {
          throw response.status;
        } else {
          return response.data;
        }
      });
  }
}
