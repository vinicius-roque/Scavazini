import api from "./api";
import authorization from "./headerConfig";

export async function getModules() {
  const answer = await api.get("/modules", authorization);

  return answer.data;
}