const Products = require("../models/model");

const getAllData = async (req, res) => {
  const products = await Products.find();
  res.send(products);
};
const deleteById = async (req, res) => {
  await Products.findOneAndDelete({ _id: req.params.id });
  res.send("deleted");
};
const patchById = async (req, res) => {
  const newProducts = await Products.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  );
  res.send(newProducts);
};
const putById = async (req, res) => {
  const newProducts = await Products.findOneAndReplace(
    { _id: req.params.id },
    req.body
  );
  res.send(newProducts);
};

const getById = async (req, res) => {
  const getElems = await Products.find({ _id: req.params.id });
  res.send(getElems);
};
const postData = async (req, res) => {
  const obj = req.body;
  const newProducts = await new Products(obj);
  newProducts.save();
  res.send("succes");
};

module.exports={getAllData,postData,deleteById,getById,patchById,putById}