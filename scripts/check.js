const axios = require('axios');
const cheerio = require('cheerio');

axios
  .get('https://cn.eslint.org/docs/rules/')
  .then(({ data }) => {
    const $ = cheerio.load(data, {
      ignoreWhitespace: true,
    });

    console.log($('main').html());
    console.log($('main').find('h2').length);
    console.log($('#possible-errors').text());
  })
  .catch((error) => {
    console.log(error);
  });
