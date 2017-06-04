var fs = require('fs');
var path = require('path');

/**
 * Import specs
 */

let where = './tests/specs/detecting';
if (fs.existsSync(where)) {
  fs.readdirSync(where).forEach((file) => {
    if (path.extname(file) === '.js') {
      require(path.join('.' + where, file));
    }
  });
}
