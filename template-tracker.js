var TemplateTracker =  {
    track: function(event, templateId, templateName) {
      var type = RiseVision.Common.Utilities.getQueryParameter("type");

      if (type === "display") {
        var logger = RiseVision.Common.Logger;
        var tableName = "template_events";

        params = {
          "event": event,
          "display_id": RiseVision.Common.Utilities.getQueryParameter("id"),
          "template_id": templateId,
          "template_name": templateName
        };

        logger.log(tableName, params);
      }
    }
  }


