(function() {

  var firstScript = document.getElementsByTagName('script')[0];

  var gadgetScript = document.createElement('script');
  gadgetScript.type = 'text/javascript';
  gadgetScript.src = 'http://rvashow2.appspot.com/gadgets/gadgets.min.js';
  firstScript.parentNode.insertBefore(gadgetScript, firstScript);

  var configScript = document.createElement('script');
  configScript.type = 'text/javascript';
  configScript.src = 'https://rawgit.com/Rise-Vision/widget-common/master/dist/config.min.js';
  firstScript.parentNode.insertBefore(configScript, firstScript);

  var commonScript = document.createElement('script');
  commonScript.type = 'text/javascript';
  commonScript.src = 'https://rawgit.com/Rise-Vision/widget-common/master/dist/common.min.js';
  firstScript.parentNode.insertBefore(commonScript, firstScript);

  var loggerScript = document.createElement('script');
  loggerScript.src = "https://rawgit.com/Rise-Vision/widget-common/master/dist/logger.min.js";
  firstScript.parentNode.insertBefore(loggerScript, firstScript);

  var templateTrackerScript = document.createElement('script');
  templateTrackerScript.src = "https://rawgit.com/Rise-Vision/template-tracker/master/template-tracker.js";
  firstScript.parentNode.insertBefore(templateTrackerScript, firstScript);

})();