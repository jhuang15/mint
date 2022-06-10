const Website = require("../../models/website");

module.exports = {
  create,
  getAll,
  delete: deleteWebsite

};

async function deleteWebsite(req, res) {
  await Website.findOneAndDelete({
    _id: req.params.id,
    "website.user": req.user._id,
  }); 
  res.json('Deleted Weddingsite </3')
}

async function getAll(req, res) {
  const website = await Website.find({user: req.user._id});
  res.json(website);
}

async function create(req, res) {
  req.body.user = req.user._id
  var newWebsite = new Website(req.body);
  await newWebsite.save()
  //console.log(website);
  res.json(newWebsite);
}
