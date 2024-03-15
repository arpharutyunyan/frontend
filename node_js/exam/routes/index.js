import {Router} from "express";
import ArticlesController from "../controllers/ArticlesController.js";


const router = new Router();

router.post('/articles/create', ArticlesController.create );
router.delete('/articles/delete/:id', ArticlesController.delete );
router.get('/articles/single/:id', ArticlesController.getArticle );
router.get('/articles/list', ArticlesController.articlesList );
router.put('/articles/update/:id', ArticlesController.update );


export default router;