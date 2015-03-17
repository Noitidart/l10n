const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
Cu.import('resource://gre/modules/Services.jsm');

var stringBundle = Services.strings.createBundle('chrome://l10n/locale/global.properties?' + Math.random()); // Randomize URI to work around bug 719376

function install() {}
function uninstall() {}

function startup() {
	Services.prompt.alert(null, stringBundle.GetStringFromName('startup_prompt_title'), stringBundle.GetStringFromName('startup_prompt_message'));
	var replacements = ['first rep', '2nd replaced', 'and last one replaced'];
	Services.prompt.alert(null, stringBundle.GetStringFromName('startup_prompt_title'), stringBundle.formatStringFromName('msg_with_replacments', replacements, replacements.length));
	Services.prompt.alert(null, stringBundle.GetStringFromName('startup_prompt_title'), stringBundle.formatStringFromName('msg_with_replacments', [], [].length)); // just demo
	
	Services.prompt.alert(null, stringBundle.GetStringFromName('startup_prompt_title'), stringBundle.formatStringFromName('startup_prompt_message', [], [].length)); //also works
	Services.prompt.alert(null, stringBundle.GetStringFromName('startup_prompt_title'), stringBundle.formatStringFromName('startup_prompt_message', replacements, replacements.length)); //also works
}
 
function shutdown() {}
