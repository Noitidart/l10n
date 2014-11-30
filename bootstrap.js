const {classes: Cc, interfaces: Ci, utils: Cu} = Components;
Cu.import('resource://gre/modules/Services.jsm');

var stringBundle = Services.strings.createBundle('chrome://l10n/locale/global.properties?' + Math.random()); // Randomize URI to work around bug 719376

function install() {}
function uninstall() {}

function startup() {
	var aDOMWindow = Services.wm.getMostRecentWindow('navigator:browser');
	aDOMWindow.gBrowser.addTab('chrome://l10n/content/my_html.xhtml');
	aDOMWindow.gBrowser.addTab('chrome://l10n/content/my.xul');
}
 
function shutdown() {}
