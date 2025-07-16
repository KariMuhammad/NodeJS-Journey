const { BookModel } = require("../models/book");

/**
 * GET /books
 * @description Get All Books from database
 * @access Public/User
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getAllBooks = async (req, res, next) => {
  try {
    const allBooks = await BookModel.find({});
    if (!allBooks.length) {
      res
        .status(404)
        .json({ success: false, message: "No Books exist!", data: [] });
    }

    res.status(200).json({
      success: true,
      message: "All books fetched successfully",
      data: allBooks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

/**
 * GET /books/:id
 * @description Get Single Book by Id
 * @access Public/User
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getSingleBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await BookModel.findById(id);
    if (!book) {
      res
        .status(404)
        .json({ success: false, message: "No book with this id!" });
    }

    res.status(200).json({
      success: true,
      message: "Book fetched successfully",
      data: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

/**
 * POST /books/add
 * @description Create new Book in Database
 * @access Private/Admin
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.createBook = async (req, res, next) => {
  try {
    const data = req.body;
    const newBook = await BookModel.create(data);

    res.status(201).json({
      success: true,
      message: "new book inserted in library database",
      data: newBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

/**
 * PATCH /books/:id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.updateBook = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedBook = await BookModel.findByIdAndUpdate(
      id,
      {
        $set: data,
      },
      { new: true }
    );

    if (!updatedBook) {
      res.status(404).json({
        success: false,
        message: "Book with this id not exist!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Book is updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

/**
 * DELETE /books/:id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedBook = await BookModel.findByIdAndDelete(id);
    if (!deletedBook) {
      res
        .status(404)
        .json({ success: false, message: "Book with this id is not exist!" });
    }

    res.status(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};
