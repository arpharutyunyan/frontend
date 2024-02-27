const { Router } = require('express');
const { uuidV4 } = require("uuid");
const _ = require("lodash");
const fsp = require("fs/promises");
const path = require("path");
const Promise = require("bluebird");

const router = new Router();

router.get('/', async (req, res) => {
  const arr = new Array(1000).fill(1);
  const dirName = path.join(__dirname, '../data/tmp');
  //
  // console.time('for');
  // for (const i in arr) {
  //   const filename = path.join(dirName, i)
  //   await fsp.writeFile(filename, 'loremam sdasjdakdaskdja')
  // }
  // console.timeEnd('for');
  //
  // console.time('map');
  // const promise = arr.map(async i => {
  //   const filename = path.join(dirName, i.toString())
  //   await fsp.writeFile(filename, 'loremam sdasjdakdaskdja')
  // })
  // await Promise.all(promise)
  // console.timeEnd('map');
  //
  //
  // console.time('bluebird.map');
  // await Promise.map(arr, async (i) => {
  //   const filename = path.join(dirName, i.toString())
  //   await fsp.writeFile(filename, 'loremam sdasjdakdaskdja');
  //   return 'loremam sdasjdakdaskdja'
  // })
  // console.timeEnd('bluebird.map');
  //
  //
  // const arrChunk = _.chunk(arr, 500);
  // console.time('chunk');
  // for (const d of arrChunk) {
  //   await Promise.map(d, async (i) => {
  //     const filename = path.join(dirName, i.toString())
  //     await fsp.writeFile(filename, 'loremam sdasjdakdaskdja');
  //     return 'loremam sdasjdakdaskdja'
  //   })
  //   await Promise.delay(1000);
  // }
  // console.timeEnd('chunk');

  const getDate = async () => {
    await Promise.delay(5000 * Math.random());
    return 1;
  }
  const getDate2 = async () => {
    await Promise.delay(1000 * Math.random());
    return 2;
  }

  const data = await Promise.race([
    getDate(),
    Promise.delay(3000)
  ])

  res.json({
    book: 'test',
    uid: uuidV4(),
    data,
  })
})


module.exports = router;
