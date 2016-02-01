# Template Tracker

## Introduction

*A JS script for tracking templates sending the data to BQ*

Project Name works in conjunction with [Rise Vision](http://www.risevision.com), the [digital signage management application](http://rva.risevision.com/) that runs on [Google Cloud](https://cloud.google.com).

At this time Chrome is the only browser that this project and Rise Vision supports.

## Built With
- *JavaScript*

## Usage
To use the tracker you have to insert the following script into the head section of the template html passing the presentation id to track function.

```javascript
<script>
  (function() {
    var script = document.createElement('script');
    script.onload = function() {
      window.onload = function() {
        TemplateTracker.track("EVENT","TEMPLATE_ID","TEMPLATE_NAME");
      };
    };
    script.src = 'https://cdn.rawgit.com/Rise-Vision/template-tracker/master/template-tracker-loader.js?v='+parseInt(Math.random()*99999999);;
    document.head.appendChild(script);
  })();
</script>
```


## Submitting Issues
If you encounter problems or find defects we really want to hear about them. If you could take the time to add them as issues to this Repository it would be most appreciated. When reporting issues please use the following format where applicable:

**Reproduction Steps**

1. did this
2. then that
3. followed by this (screenshots / video captures always help)

**Expected Results**

What you expected to happen.

**Actual Results**

What actually happened. (screenshots / video captures always help)

## Contributing
All contributions are greatly appreciated and welcome! If you would first like to sound out your contribution ideas please post your thoughts to our [community](http://community.risevision.com), otherwise submit a pull request and we will do our best to incorporate it

## Resources
If you have any questions or problems please don't hesitate to join our lively and responsive community at http://community.risevision.com.

If you are looking for user documentation on Rise Vision please see http://www.risevision.com/help/users/

If you would like more information on developing applications for Rise Vision please visit http://www.risevision.com/help/developers/.

**Facilitator**

[Rodrigo Serviuc Pavezi](https://github.com/rodrigopavezi "Rodrigo Serviuc Pavezi")
