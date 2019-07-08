const axios = require('axios');
const cheerio = require('cheerio');

const {
  fileOp: {
    getExistFiles,
  },
  underPath,
} = require('@new4/utils');

const RULES_DIR = underPath('root', 'rules');

axios
  .get('https://cn.eslint.org/docs/rules/')
  .then(({ data }) => {
    const $ = cheerio.load(data);
    const titles = $('main')
      .find('h2')
      .map((index, ele) => $(ele)
        .text()
        .replace(/[.\s]/g, '')
        .toLowerCase())
      .toArray()
      .filter(title => title !== 'deprecated' && title !== 'removed')
      .sort();

    console.log(titles);

    const ruleFiles = getExistFiles(RULES_DIR)
      .map(file => file
        .replace(/\.js$/, '')
        .replace(/[-]/g, ''))
      .filter(file => file !== '_eslintrestrictedglobals')
      .sort();

    console.log(ruleFiles);
  });
