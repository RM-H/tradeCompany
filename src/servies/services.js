import axios from "axios";


export const url = 'https://server.kheyrollahnia.com/api/v1'
export const baseurl = 'https://server.kheyrollahnia.com/'

export const getBlogs = (config ) => {
  return axios.get(`${url}/blogs`,config)
}


export const getBlog = (config ) => {
  return axios.get(`${url}/blog`,config)
}