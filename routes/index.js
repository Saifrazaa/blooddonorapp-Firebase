var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blood Donor App' });
});
function checkauthentication(req,res,next)
{
  if(req.isAuthenticated())
  {
    return next();
  }
  else {
    res.redirect("/login");
  }
}
router.get("/login",function(req,res,next){
  res.render("login",{title:"Login To Your Account"});
});
router.get('/donate-blood',checkauthentication, function(req, res, next) {
  res.render('donate-blood', { title: "Donate Your Blood" });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up To Get Start' });
});
router.get('/find-donors', function(req, res, next) {
  res.render('yourblood-group', { title: 'Blood Donors' });
});
module.exports = router;
