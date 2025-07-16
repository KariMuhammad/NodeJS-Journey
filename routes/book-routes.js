const {
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/book-controller");

const router = require("express").Router();

router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBook);
router.post("/add", createBook);
router.patch("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

exports.bookRoute = router;
