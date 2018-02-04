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
router.get('/donate-blood', function(req, res, next) {
  res.render('data', { title: "Donate Your Blood" });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up To Get Start' });
});

router.get('/find-donors',function(req, res, next) {
  res.render('yourblood-group', { title: 'Blood Donors' });
});
router.get('/aboutus',function(req, res, next) {
  res.render('about', { title: 'Blood Donors' });
});
router.get('/contactus',function(req, res, next) {
  res.render('contactus', { title: 'Blood Donors' });
});
module.exports = router;
