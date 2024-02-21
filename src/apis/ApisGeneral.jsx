import { apiBody } from "./apiBody";

export const getUser = async () => {
  const { data } = await apiBody.get(`/user.json`);

  return data;
};

export const getPlans = async () => {
  const { data } = await apiBody.get(`/plans.json`);

  return data;
};