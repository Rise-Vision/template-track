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


  commonScript.onload = function() {
    var script = document.createElement('script');
    var type = RiseVision.Common.Utilities.getQueryParameter("type");

    script.onload = function() {
      window.TemplateTracker = {
        track : function (templateId) {
          var logger = RiseVision.Common.Logger;
          var tableName = "template_tracking";

          params = {
            "display_id": RiseVision.Common.Utilities.getQueryParameter("id"),
            "template_id" : templateId
          };

          logger.log(tableName, params);
        }
      }
    };

    if (type === "display") {
      script.src = "https://rawgit.com/Rise-Vision/widget-common/master/dist/logger.min.js";
      document.head.appendChild(script);
    }
  }

  firstScript.parentNode.insertBefore(commonScript, firstScript);
})();