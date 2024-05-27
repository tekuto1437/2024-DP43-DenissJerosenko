import axios from "axios";

import { GET_PRODUCTS, POST_AUTH, POST_LOGIN } from "../../lib/api/routes";

// Function to get list of products
export const getProductsList = async () => {
  const response = await axios.get(GET_PRODUCTS);
  const data = await response.data;
  return data;
};

// Function to register user
interface PropsRegister {
  username: string;
  phoneNumber: string;
  password: string;
  password2: string;
}
export const regUser = async ({
  username,
  phoneNumber,
  password,
  password2,
}: PropsRegister) => {
  return await axios.post(POST_AUTH, {
    username: username,
    phoneNumber: phoneNumber,
    password: password,
    password2: password2,
  });
};

// Function to login user
interface PropsLogin {
  username: string;
  password: string;
}

export const logUser = async ({ username, password }: PropsLogin) => {
  return await axios.post(POST_LOGIN, {
    username: username,
    password: password,
  });
};
