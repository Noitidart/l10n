const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
Cu.import('resource://gre/modules/Services.jsm');

function install() {}
function uninstall() {}

function startup() {
	var aDOMWindow = Services.wm.getMostRecentWindow('navigator:browser');
	aDOMWindow.gBrowser.addTab('chrome://l10n/content/my.xul');
}
 
function shutdown() {}
