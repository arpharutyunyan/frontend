import Articles from "../models/Articles.js";
import _ from 'lodash';

class ArticlesController {

    static async articlesList(req, res, next){
        try {
            const { page = 1, limit=1 } = req.query;
            if (limit<1 || limit>100){
                res.json({
                    articles:[]
                })
            }
            const {articles, total} = await Articles.articlesList(page, +limit);

            res.json({
                articles,
                total,
                totalPages: Math.ceil(total / limit),
            })

        }catch (e){
            next(e)
        }
    }

    static async create(req, res, next){
        try {
            const data = req.body;
            const article = await Articles.create(data);

            res.json({
                article
            })

        }catch (e){
            next(e)
        }
    }

    static async delete(req, res, next){
        try {
            const {id} = req.params;
            const article = await Articles.getArticle(id);

            if(_.isEmpty(article)){
                res.sendStatus(404);
                return;
            }

            const message = await Articles.delete(id);

            res.json({
                message
            })

        }catch (e){
            next(e)
        }
    }

    static async getArticle(req, res, next){
        try {
            const {id} = req.params;
            const article = await Articles.getArticle(id);

            if(_.isEmpty(article)){
                res.sendStatus(404);
                return;
            }

            res.json({
                article
            })

        }catch (e){
            next(e)
        }
    }

    static async update(req, res, next){
        try {
            const data = req.body;
            const {id} = req.params;
            const currentArticle = await Articles.getArticle(id);

            if(_.isEmpty(currentArticle)){
                res.sendStatus(404);
                return;
            }

            const article = await Articles.update(id, data);

            res.json({
                article
            })

        }catch (e){
            next(e)
        }
    }


}

export default ArticlesController;