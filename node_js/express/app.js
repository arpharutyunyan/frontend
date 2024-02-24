const express = require('express');
const path = require("path");
const fs = require("fs");
const md5 = require("md5");
const _ = require("lodash");

const app = express();

app.use(express.urlencoded({
    limit: 1024 * 1024 * 10,
}));
app.use(express.json({
    limit: 1024 * 1024 * 10
}));
app.use(express.static('public'))


app.post('/users/register', (req, res) => {
    const {firstName, lastName, password, email} = req.body;
    const usersDir = path.join(__dirname, 'data/users');
    const userFile = path.join(usersDir, email + '.json');

    if (fs.existsSync(userFile)) {
        res.status(422);
        res.json({
            status: 'error',
            message: 'already exists'
        })
    }

    fs.writeFileSync(userFile, JSON.stringify({
        firstName, lastName, password: md5(md5(password) + '34erdtfygvhjb'), email
    }))
    res.json({
        status: "ok"
    })
})

app.post('/users/login', (req, res) => {
    const {password, email} = req.body;
    const usersDir = path.join(__dirname, 'data/users');
    const userFile = path.join(usersDir, email + '.json');

    if (!fs.existsSync(userFile)) {
        res.status(403);
        res.json({
            status: 'error',
            message: 'Invalid email or password'
        });
        return;
    }

    const user = JSON.parse(fs.readFileSync(userFile, 'utf8'));

    if (user.password !== md5(md5(password) + '34erdtfygvhjb')) {
        res.status(403);
        res.json({
            status: 'error',
            message: 'Invalid email or password'
        });
        return;
    }
    delete user.password;
    res.json({
        user
    })
})

app.get('/users/list', (req, res) => {
    const page = req.query.page || 1;

    const usersDir = path.join(__dirname, 'data/users');
    const dirContent = fs.readdirSync(usersDir);

    let usersList = [];
    try {
        dirContent.map(elem => {
            const file = path.join(usersDir, elem);
            try {
                let data = JSON.parse(fs.readFileSync(file, 'utf8'));
                delete data.password;

                usersList.push(data);
            } catch (e) {
                //
            }
        })

        const dataLength = dirContent.length;
        const pageItemSize = 3
        const paginatedUsersList = _.chunk(usersList, pageItemSize);

        res.json({
            usersList: paginatedUsersList[page-1] || [],
            total: dataLength,
            totalPage: Math.ceil(dataLength / pageItemSize)
        })
    } catch (e) {
        res.json({
            "status": 'not allowed',
            "message": e.message
        })
    }

})

app.put('/users/update', (req, res) => {
    const {email, firstName, lastName} = req.body;
    const usersDir = path.join(__dirname, 'data/users');
    const userFile = path.join(usersDir, email + '.json');

    if (!fs.existsSync(userFile)) {
        res.status(404);
        res.json({
            status: 'error',
            message: 'User not found'
        })

        return;
    }

    let userData = JSON.parse(fs.readFileSync(userFile, 'utf8'));

    userData.firstName = firstName;
    userData.lastName = lastName;

    fs.writeFileSync(userFile, JSON.stringify(userData))

    // const updatedData = fs.readFileSync(userFile, 'utf8');
    // delete updatedData.password;
    //
    // res.send(updatedData)

    res.json({
        userData
    })
})

app.delete('/users/delete', (req, res) => {
    const {email} = req.query;

    const usersDir = path.join(__dirname, 'data/users');
    const userFile = path.join(usersDir, email + '.json');

    if (!fs.existsSync(userFile)) {
        res.status(404);
        res.json({
            status: 'error',
            message: 'User not found'
        })

        return;
    }

    fs.unlinkSync(userFile);

    res.json({
        "message": 'User successfully deleted'
    })
})

app.listen(4000, 'localhost', () => {
    console.log('Server started')
})
