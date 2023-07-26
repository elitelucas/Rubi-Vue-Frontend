import axios from 'axios';
import { APISettings } from '../config';

export default {
    index() {

    },

    getData(data: any) {
        APISettings.headers.set('Content-Type', 'multipart/form-data');

        return axios.post(APISettings.baseTestURL + '/admin/module-generator', data)
            .then(function (response) {
                if (response.status != 200) {
                    throw response.status;
                } else {
                    return response.data;
                }
            });
    }
}