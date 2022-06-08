const Website = require("../models/website");

module.exports = {
  create,
  delete: deleteInvite,
};

function deleteInvite(req, res) {
  Website.findOne({
    "invites._id": req.params.id,
    "invites.user": req.user._id,
  }).then(function (website) {
    console.log("not website: " + website);
    if (!website) return res.redirect("/websites");
    website
      .save()
      .then(function () {
        res.redirect(`/websites/${website._id}`);
      })
      .catch(function (err) {
        return next(err);
      });
  });
}

function create(req, res) {
  Website.findById(req.params.id, function (err, website) {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    website.invites.push(req.body);
    website.save(function (err) {
      res.redirect(`/websites/${req.params.id}`);
    });
  });
}
