const Course = require('../models/Courses');
class SiteController {
  //GET /news
  index(req, res) {
    Course.find({}, function (err, courses) {
      if(!err) res.json(courses)
      res.status(400).json({ error: 'message' })
    });
    // res.render('home');
  }
  // GET /new/slug
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
