var webpage = require('webpage'),
    system = require('system');

var minimist = require('minimist');
var argv = minimist(system.args.slice(1)),
    log;

log = function (prefix) {
  return function () {
    var argv = [].slice.call(arguments);

    argv[0] = prefix + ' ' + (typeof argv[0] == 'string' ? argv[0] : JSON.stringify(argv[0]));
    return console.log.apply(console, argv);
  };
}
log.info = log('\x1B[36m: ☃ INFO ☃ :\x1B[39m');
log.error = log('\x1B[35m: ⚠ ERROR ⚠ :\x1B[39m');

if (!argv.url || !argv.output) {
  log.error('You need to specify a url and output file.');
  log.error('Example: `$ html2pdf --url http://google.com --output google.pdf`');
  log.info('k bye');
  phantom.exit(1);
}

log.info('loading `' + argv.url + '`...');
var page = require('webpage').create();

page.open(argv.url, function () {
  log.info('rendering to `' + argv.output + '`...');
  page.render(argv.output);
  log.info('k bye');
  phantom.exit();
});

