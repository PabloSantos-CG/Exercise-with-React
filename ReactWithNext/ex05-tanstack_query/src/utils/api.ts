import { Post } from "@/types/Post";
import { User } from "@/types/User";
import axios from "axios";

export const req = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const getUsers = async (): Promise<User[]> => {
  const result = await req.get("/users");
  return result.data;
};

export const getUser = async (id: number): Promise<User> => {
  const result = await req.get(`/users/${id}`);
  return result.data;
};

export const getPosts = async (): Promise<Post[]> => {
  const result = await req.get("/posts");
  return result.data;
};