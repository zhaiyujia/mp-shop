const { request } = require("../utils/request.js")
const { baseUrl, banner, goods, hotSearch, search } = require("./base")

function getBanner(data) {
  return request(baseUrl + banner, "GET", data)
}

function getGoods(data){
  return request(baseUrl + goods, "GET", data) 
}

function getHotWords(data){
    return request(baseUrl + hotWords, "GET", data)
}

function getHotSearch(data){
  return request(baseUrl + hotSearch,"GET",data)
}

function getSearch(data){
  return request(baseUrl + search,"GET",data)
}


module.exports={
  getBanner,
  getGoods,
  getHotSearch,
  getSearch
}