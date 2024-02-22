const path = require("path");
const fs = require("fs");


//create directories and files for testing
const dir = path.join(__dirname, '/temp');
const innerDir = path.join(dir, 'test');

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    fs.mkdirSync(innerDir);
}

for (let i = 0; i < 10; ++i) {
    fs.writeFileSync(path.join(dir, `index${i + 1}.txt`), `hello ${i + 1}`);
    fs.writeFileSync(path.join(innerDir, `index${i + 1}.txt`), `hello_test ${i + 1}`);
}

function removeDir(dir) {
    if (fs.existsSync(dir)) {
        const dirContent = fs.readdirSync(dir);
        dirContent.forEach(file => {
            const filePath = path.join(dir, file);
            const stats = fs.statSync(filePath);
            if (stats.isFile()) {
                fs.unlinkSync(filePath);
            } else {
                removeDir(filePath);
            }
        });
        fs.rmdirSync(dir);
        console.log(`Directory ${dir} removed successfully.`);
    } else {
        console.log(`Directory ${dir} does not exist.`);
    }
}

removeDir(dir);