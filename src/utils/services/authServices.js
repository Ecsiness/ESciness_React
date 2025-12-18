import api from "@/lib/api";
const API_AUTH = '/api/Auth';

export const register = (data) => {
  return api.post(`${API_AUTH}/register`,data)
}

export const login = (data) => {
  return api.post(`${API_AUTH}/login`,data)
}

export const forgotPassword = (data) => {
  return api.post(`${API_AUTH}/forgot-password`,data)
}

export const resetPassword = (data) => {
  return api.post(`${API_AUTH}/reset-password`,data)
}

export const createAdmin = (data) => {
  return api.post(`${API_AUTH}/create-admin`,data)
}
