/**
 * GET /books
 * @description Get All Books from database
 * @access Public/User
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getAllBooks = async (req, res, next) => {};

/**
 * GET /books/:id
 * @description Get Single Book by Id
 * @access Public/User
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getSingleBook = async (req, res, next) => {};

/**
 * POST /books/add
 * @description Create new Book in Database
 * @access Private/Admin
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.createBook = async (req, res, next) => {};

/**
 * PATCH /books/:id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.updateBook = async (req, res, next) => {};

/**
 * DELETE /books/:id
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.deleteBook = async (req, res, next) => {};
