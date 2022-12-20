export interface UserData {
  id: number,
  first_name: string,
  last_name: string,
  email: string,
  avatar: string,
}

export interface UserResponse {
  id: string,
  name: string,
  job: string,
  created_at: string,
}
