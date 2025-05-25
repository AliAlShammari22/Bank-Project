import UserInfo from "@/types/UserInfo";
import instance from ".";

const login = async (userInfo: UserInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  return data;
};

const register = async (userInfo: UserInfo, image: string) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    userInfo
  );
  return data;
};

const me = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};

const updateProfile = async (image: string) => {
  const { data } = await instance.put("/mini-project/api/auth/profile", image);
  return data;
};

const getUserId = async () => {
  const { data } = await instance.get("/mini-project/api/auth/user/<userId>");
  return data;
};

export { getAllUsers, getUserId, login, me, register, updateProfile };
