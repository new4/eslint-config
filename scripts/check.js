const axios = require('axios');
const cheerio = require('cheerio');
axios
  .get('https://cn.eslint.org/docs/rules/')
  .then((response) => {
    const $ = cheerio.load(response, {
      ignoreWhitespace: true,
    });
    const out = $.html();
    console.log(out);
  })
  .catch((error) => {
    console.log(error);
  });
