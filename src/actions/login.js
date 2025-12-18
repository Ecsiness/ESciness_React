import api from "@/lib/api";

export async function login(username, password) {
  try {
    const res = await api.post("/api/login", {
      username,
      password,
    });
    return res.data
  } catch (error) {
    console.log('login error :' , error)
    throw error
  }
}
