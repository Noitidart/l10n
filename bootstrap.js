const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
Cu.import('resource://gre/modules/Services.jsm');

var stringBundle = Services.strings.createBundle('chrome://l10n/locale/global.properties?' + Math.random()); // Randomize URI to work around bug 719376

function install() {}
function uninstall() {}

function startup() {
	Services.prompt.alert(null, stringBundle.GetStringFromName('startup_prompt_title'), stringBundle.GetStringFromName('startup_prompt_message'));
}
 
function shutdown() {}
