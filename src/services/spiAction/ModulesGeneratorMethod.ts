import http from '@/utils/http';

export default {
  index() {

  },

  getData(data: any) {
    return http.post('/admin/module-generator', data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
      .then(function (response) {
        if (response.status != 200) {
          throw response.status;
        } else {
          return response.data;
        }
      });
  }
}
