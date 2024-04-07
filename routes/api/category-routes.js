const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try{
    const categories = await Category.findAll({ include: [{model: Product}] });
    res.status(200).json(categories);
  } catch(err) {
    res.status(500).json({ message: 'not found!' });
  }
  // find all categories as well as to be sure to include its associated Products
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product}] });
    if (!category){
      res.status(404).json({message: "No id found"});
      return;
    }

    res.status(200).json(category);
  } catch (err){
    res.status(500).json({ message: "No value found"})
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err){
    res.status(400).json;
  }
});

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
// });

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
//   try {
//     const deleted = await Tag.destroy({where: {id: req.params.id} });
//     !deleted
      
//   }
// });
router.put('/:id', async (req, res) => {
  try {
    const updated = await Category.update(req.body, {where: {id: req.params.id}, });
    !updated[0] ? res.status(404).json({message: "Cannot find tag with id!"}) : res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({message:"Failed to Upadte"})
  }
});
module.exports = router;
