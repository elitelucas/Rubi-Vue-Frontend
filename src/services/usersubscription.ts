import http from "@http";

export interface UserSubscriptionData {
  id: number;
  nickname: string;
  short_description: string;
  activated_at: Date;
  expiration_at: Date;
  primary: Date;
  active: Date;
  avatar: string;
}

export interface UserSubscriptionListResponse {
  data: UserSubscriptionData[];
}

export interface UserSubscriptionShowResponse {
  data: UserSubscriptionData;
}

export interface UserSubscriptionUpdateResponse {
  data: UserSubscriptionData;
}

export async function userSubscriptionList() {
  return http.get<UserSubscriptionListResponse>(
    "/v1/user-subscriptions?order_col=nickname&order_dir=asc"
  );
}

export async function userSubscriptionShow(usersubscription_id: number) {
  return http.get<UserSubscriptionShowResponse>(
    "/v1/user-subscriptions/" + usersubscription_id
  );
}

export async function userSubscriptionUpdate(
  usersubscription_id: number,
  data: UserSubscriptionData
) {
  return http.patch<UserSubscriptionUpdateResponse>(
    "/v1/user-subscriptions/" + usersubscription_id,
    data,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function userSubscriptionDelete(usersubscription_id: number) {
  return http.delete<UserSubscriptionUpdateResponse>(
    "/v1/user-subscriptions/" + usersubscription_id
  );
}

export async function userSubscriptionUploadAvatar(
  usersubscription_id: number,
  data: any
) {
  return http.post<UserSubscriptionUpdateResponse>(
    "/v1/user-subscriptions/" + usersubscription_id + "/avatar-upload",
    data,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
}
