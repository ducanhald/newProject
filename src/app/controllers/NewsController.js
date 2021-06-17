class NewsController {
  //GET /
  index(req, res) {
    res.render('home');
  }
  // GET /search
  show(req, res) {
    res.send('Hello');
  }
}
module.exports = new NewsController();
