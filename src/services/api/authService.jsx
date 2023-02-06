import api from "./api";

export async function signIn(email, password) {
  const answer = await api.post("/auth/sign-in", { email, password });

  return answer.data;
}

export async function signUp(name, email, password) {
  const answer = await api.post("/auth/sign-up", { name, email, password });

  return answer.data;
}