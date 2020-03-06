 var safe = require("safe-regex");
  var regex = "(x+x+)+y";
  var regex2 = "(x+x+)+y";
  var preTax = eval(process.argv.slice(2));
  console.log(safe(regex));
  console.log(safe(regex2));
  console.log(preTax);

  sequelize
  .query("SELECT * FROM user WHERE email = " + req.params.email + ";", {})
  .then(projects => {
    // Do your stuff
  });