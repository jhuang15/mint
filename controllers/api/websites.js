const Website = require("../models/website");

module.exports = {
  index,
  show,
  new: newSite,
  create,
  delete: deleteSite,
  update,
};

function update(req, res) {
  Website.findByIdAndUpdate(
    req.params.id,
    req.body.id,
    { new: true },
    function (err, website) {
      console.log(err);
      website.price = req.body.price;
      website.quantity = req.body.quantity;
      website.invites = req.body.invites;
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

function create(req, res) {
  var website = new Website(req.body);
  website.save(function (err) {
    if (err) return console.log("Error" + website);
    console.log("Created:" + website);
    res.redirect("websites");
  });
}

function newSite(req, res) {
  res.render("websites");
}
