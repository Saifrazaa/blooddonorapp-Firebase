var express = require('express');
var passport=require("passport");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blood Donor App' });
});

router.get("/login",function(req,res,next){
  res.render("login",{title:"Login To Your Account"});
});
router.get('/donate-blood', function(req, res, next) {
  res.render('data', { title: "Donate Your Blood" });
});
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up To Get Start' });
});
// passport.serializeUser(function(user, done) {
//   done(null, user.email);
// });
// passport.deserializeUser(function(email, done) {
//   done(email);
// });
router.get("/find-donors",function(req,res,next){
  res.render("login",{title:"Login In to Account "});
})
router.get('/find-donors/:users',function(req, res, next) {

    res.render('yourblood-group', { title: 'Blood Donors' });
 
});
router.get('/aboutus',function(req, res, next) {
  res.render('about', { title: 'Blood Donors' });
});
router.get('/contactus',function(req, res, next) {
  res.render('contactus', { title: 'Blood Donors' });
});
module.exports = router;
