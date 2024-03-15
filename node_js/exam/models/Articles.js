import db from "../services/db.js";

class Articles {
    static async articlesList(page, limit){
        const offset = (page - 1) * limit;
        const [articles] = await db.query('SELECT * FROM articles LIMIT ? OFFSET ?', [
            limit, offset
        ]);

        const [total] = await db.execute('SELECT count(*) as total FROM articles');
        return { articles, total: total[0].total };
    }

    static async create(data){
        const {title, text} = data;
        const [articles] = await db.execute('INSERT INTO articles (title, text, createdAt) VALUES (?, ?, ?)', [
            title, text, new Date()
        ]);

        const article = await this.getArticle(articles.insertId);
        return article;
    }

    static async getArticle(id){
        const [article] = await db.execute('SELECT * FROM articles WHERE id=?', [id]);
        return article;
    }

    static async delete(id){
        await db.execute('DELETE FROM articles WHERE id=?', [id]);
        return 'Successfully deletes';
    }

    static async update(id, data){
        const {title, text} = data;
        const [article] = await db.execute('UPDATE articles SET title=?, text=? WHERE id=?', [title, text, id]);

        return this.getArticle(id);
    }


}

export default Articles;