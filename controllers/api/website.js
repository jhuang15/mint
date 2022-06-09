const Website = require("../../models/website");

module.exports = {
  index,
  show,
  new: newSite,
  create,
  delete: deleteSite,
  update
};

function update(req, res) {
  Website.findByIdAndUpdate(
    req.params.id,
    req.body.id,
    { new: true },
    function (err, website) {
      console.log(err);
      website.story = req.body.story;
      website.invite = req.body.invite;
      website.save(function (err) {
        res.redirect(`/websites/${website._id}`);
      });
    }
  );
}

function deleteSite(req, res) {
  Website.findByIdAndDelete(req.params.id, function (err) {
    res.redirect("/websites");
  });
}

function index(req, res) {
  Website.find({}, function (err, websites) {
    res.render("websites", { websites });
  });
}

function show(req, res) {
  Website.findById(req.params.id, function (err, website) {
    console.log(website);
    res.render("websites/show", { website });
  });
}

async function create(req, res) {
  //req.body.user = req.user._id
  var website = new Website(req.body);
  await website.save()
  console.log(website)
}

function newSite(req, res) {
  res.render("websites");
}
