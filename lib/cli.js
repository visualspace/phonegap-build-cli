/*
 * Module dependencies.
 */

var PhoneGapBuild = require('./phonegap-build');


/**
 * Command line interface object.
 */

function CLI() {
    this.phonegapbuild = new PhoneGapBuild();
}

/**
 * Command line commands.
 */

CLI.prototype.argv = require('./cli/argv');
CLI.prototype.unknown = require('./cli/unknown');
CLI.prototype.console = require('./cli/console');
CLI.prototype.version = require('./cli/version');
CLI.prototype.help = require('./cli/help');
CLI.prototype.login = require('./cli/login');
CLI.prototype.help.login = require('./cli/help/login');
CLI.prototype.logout = require('./cli/logout');
CLI.prototype.create = require('./cli/create');
CLI.prototype.help.create = require('./cli/help/create');
CLI.prototype.build = require('./cli/build');
CLI.prototype.help.build = require('./cli/help/build');

/*
 * Expose the CLI object.
 */

module.exports = CLI;
