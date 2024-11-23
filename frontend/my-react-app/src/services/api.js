import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const fetchTransactions = async (month, page = 1, search = "") => {
  return axios.get(`${BASE_URL}/transactions`, {
    params: { month, page, search },
  });
};

export const fetchStatistics = async (month) => {
  return axios.get(`${BASE_URL}/statistics`, {
    params: { month },
  });
};

export const fetchBarChartData = async (month) => {
  return axios.get(`${BASE_URL}/bar-chart`, {
    params: { month },
  });
};
