const {} = require("graphql");
const Product = require("../model/Product");

//rover config whoami
const resolvers = {
  Query: {
    products: (obj, args, context, info) => {
      console.log("Object", obj);
      console.log("Args", args);
      console.log("Context", context);
      return Product.find({}).then((data) => data);
    },

    product: (_, args) => {
      return Product.findById(args.id).then((data) => data);
    },
  },

  Mutation: {
    createProduct: (_, args) => {
      const { name, category, inStock, price, tags } = args;
      return Product.create({ name, category, inStock, price, tags })
        .then((data) => {
          console.log("Product created successfully!", data);
          return data;
        })
        .catch((error) => {
          console.log("Error occured in create product", error.message);
        });
    },

    updateProduct: (_, args) => {
      const { id, ...data } = args;
      return Product.findByIdAndUpdate(
        id,
        {
          $set: data,
        },
        { new: true }
      )
        .then((data) => {
          console.log("Product successfully updated");
          console.log("Data", data);
          return data;
        })
        .catch((error) => {
          console.log("Error occured in update product");
          console.log("Error -> ", error.message);
        });
    },

    deleteProduct: (_, args) => {
      const { id } = args;
      Product.findByIdAndDelete(id)
        .then((d) => {
          console.log("Product deleted");
          return d;
        })
        .catch((error) => {
          console.log("Error occured during deleting product", error.message);
        });
    },
  },
};

module.exports = resolvers;
