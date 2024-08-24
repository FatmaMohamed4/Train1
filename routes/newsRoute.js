import express from "express"
import { addNews, deleteNews, getNews, updateNews } from "../controllers/newsController.js"
const newsRoute = express.Router()

newsRoute.post('/add', addNews)
newsRoute.get('/get',getNews)
newsRoute.delete('/delete/:id',deleteNews)
newsRoute.patch('/update/:id',updateNews)
export default newsRoute