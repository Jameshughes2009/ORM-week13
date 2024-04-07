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
    res.status
  }
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

// router.delete('/:id', (req, res) => {
//   // delete a category by its `id` value
//   try {
//     const deleted = await Tag.destroy({where: {id: req.params.id} });
//     !deleted
      
//   }
// });

module.exports = router;
