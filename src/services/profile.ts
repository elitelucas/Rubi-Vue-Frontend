import http from "@http";

export interface MyInfoResponse {
  data: {
    uuid: string;
    name: string;
    username: string;
    email: string;
  };
}

export default {
  async getMyInfo() {
    return http.get<MyInfoResponse>(`/v1/me`);
  },
};
