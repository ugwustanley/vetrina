import React from 'react';
import { Http } from "../utils/http";
// import dotenv from 'dotenv'
// //require('dotenv').config()
// dotenv.config()

const API_KEY = process.env.REACT_APP_API_KEY

export const newsService = (limit) => Http.get(`/news?access_key=e912b7646eb16db710463d7a80e0d6a6&languages=en&limit=${limit}`);



















///news?access_key=e912b7646eb16db710463d7a80e0d6a6&date=2020-02-19&limit=${limit}
//https://newsapi.org/v2/everything?q=Apple&from=2022-05-18&sortBy=popularity&apiKey=API_KEY

//const API_KEY = 'a945f3a244094c8780f07e2c3f743c11'
//everything?q=Apple&from=2022-05-18&sortBy=popularity&apiKey=${API_KEY}`