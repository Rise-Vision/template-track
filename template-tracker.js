var TemplateTracker = function() {
  var track = function(templateId) {
    var type = RiseVision.Common.Utilities.getQueryParameter("type");

    if (type === "display") {
      var logger = RiseVision.Common.Logger;
      var tableName = "template_tracking";

      params = {
        "display_id": RiseVision.Common.Utilities.getQueryParameter("id"),
        "template_id": templateId
      };

      logger.log(tableName, params);
    }
  }
}