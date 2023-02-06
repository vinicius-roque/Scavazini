import api from "./api";

export async function signIn(email, password) {
  const answer = await api.post("/auth/sign-in", { email, password });

  return answer.data;
}