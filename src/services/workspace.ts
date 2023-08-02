import http from "@http";
import { useProfileStore } from "@/store/profile";
const { uuid } = useProfileStore();

export async function workspaceLists() {
  return http.get(
    "/v1/user/" +
      uuid +
      "/workspaces/?order_col=nickname&order_dir=asc&per_page=10"
  );
}

export async function workspaceCreate(data: any) {
  return http.post("/v1/user/"+ uuid + "/workspaces", data);
}

export async function workspaceUpdate(workspace_id: number, data: any) {
  return http.patch("/v1/user/" + uuid + "/workspaces/" + workspace_id, data);
}

export async function workspaceDelete(workspace_id: number) {
  return http.delete("/v1/user/" + uuid + "/workspaces/" + workspace_id);
}
