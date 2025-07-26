const Product = require("../models/Product");
const sampleProducts = require("../mocks/products");

exports.insertSampleProducts = async (req, res, next) => {
  try {
    const result = await Product.insertMany(sampleProducts);

    res.status(201).json({
      success: true,
      message: `Inserted ${result} samples products`,
    });
  } catch (error) {
    console.log("Error -> ", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to insert samples!",
    });
  }
};

exports.fetchProducts = async (req, res, next) => {
  try {
  } catch (error) {
    console.log("Error -> ", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch samples!",
    });
  }
};

exports.fetchProductsStats = async (req, res, next) => {
  try {
    // Get Only Products which exist in stock with price >= 100
    const productsStatistics = await Product.aggregate([
      //   Stage #1
      {
        $match: {
          inStock: true,
          price: {
            $gte: 100,
          },
        },
      },
      //   Stage #2 - Group by Category & Calculate Average Price for all products, count them
      {
        $group: {
          _id: "$category",
          avgeragePrice: {
            $avg: "$price",
          },
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: productsStatistics,
    });
  } catch (error) {
    console.log("Error -> ", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch samples statstics!",
    });
  }
};

exports.fetchProductsAnalysis = async (req, res, next) => {
  try {
    // Get Only Products which exist in stock with price >= 100
    const productsStatistics = await Product.aggregate([
      //   Stage #1
      {
        $match: {
          category: "Electronics",
        },
      },
      //   Stage #2 - Group by Category & Calculate Average Price for all products, count them
      {
        $group: {
          _id: null,
          avgeragePrice: {
            $avg: "$price",
          },
          totalRevenue: {
            $sum: "$price",
          },
          max: {
            $max: "$price",
          },
          min: {
            $min: "$price",
          },
        },
      },
      // Stage #3 - Project desired fields
      {
        $project: {
          _id: 0,
          min: 1,
          max: 1,
          totalRevenue: 1,
          avgeragePrice: 1,
          range: {
            $subtract: ["$max", "$min"],
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: productsStatistics,
    });
  } catch (error) {
    console.log("Error -> ", error);
    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch samples statstics!",
    });
  }
};
