const supertest =require('supertest');
const {api, server} =require('../api');
const dotenv =require("dotenv");
dotenv.config();
const apiSp = supertest(api);
module.exports = {apiSp, server};