import api from "@/lib/api";
const API_BASE = '/api/User';

export const createUser = async (userData) => {
  return api.post(`${API_BASE}`,userData)
}

export const updateUser = async (id, data) => {
  return api.put(`${API_BASE}/${id}`,data)
}

export const getAllUsers = async () => {
  return api.get(`${API_BASE}`)
}

export const getUserById = async (id) => {
  return api.get(`${API_BASE}/${id}`)
}

export const deleteUser = async (id) => {
  return api.delete(`${API_BASE}/${id}`)
}

export const deleteUserAccount = async () => {
  return api.delete(`${API_BASE}/delete-account`);
}