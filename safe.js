 var safe = require("safe-regex");
  var regex = "(x+x+)+y";
  var regex2 = "(x+x+)+y";
  console.log(safe(regex));
  console.log(safe(regex2));