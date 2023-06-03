const productsController = require('../controllers/products.controller');
const multer  = require('multer')
const path = require('path');
// const upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) 
    }
  })
  
const upload = multer({ storage: storage });


const router = require('express').Router();

router.get('/', productsController.getProducts);
router.get('/:id', productsController.getProduct);
router.post('/', [upload.single('photo')], productsController.createProduct);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);


module.exports = router;
