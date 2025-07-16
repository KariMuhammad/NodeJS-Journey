const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://kimoomar007:<db_password>@medium-blog.vpdqzf9.mongodb.net/?retryWrites=true&w=majority&appName=medium-blog"
  )
  .then(() => {
    console.log("Connected correctly");
  })
  .catch((error) => {
    console.error("Failed in Connecting!");
  });

//   1# Create a Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  isActive: Boolean,
  age: Number,
  tags: [String],
  createdAt: { type: String, default: Date.now },
});

// 2# Create A Model
const UserModel = mongoose.model("User", UserSchema);

// 3# Operations on Model
async function RunQueryExamples() {
  try {
    // Create User
    const newUser = await UserModel.create({
      name: "Karim",
      email: "karim@gmail.com",
      isActive: false,
      age: 40,
      tags: ["developer", "designer"],
    });

    // Get All Users
    const allUsers = await UserModel.find({});

    // [Projection] Get Specific Fields (only name, email and exclude _id)
    const allUsers2 = await UserModel.find({}).select("name email -_id");

    // [Filteration] Get With Filteration Criteria
    const allUsers3 = await UserModel.find({ isActive: true });

    // [Pagination] Pagination Example
    const allUsers4 = await UserModel.find({}).limit(5).skip(2); // get only 5 records but skip first 2 records

    // [Sorting] Sort Example
    const allUsers5 = await UserModel.find({}).sort({ age: -1 }); // Descending Order (high -> low)

    // Delete
    await UserModel.findByIdAndDelete(newUser._id);

    // Update
    await UserModel.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 23 },
        $push: { tags: "Push new tag" },
        $inc: { age: 1 },
      },
      { new: true }
    );
  } catch (error) {
    console.log("Error -> ", error);
  } finally {
    mongoose.connection.close();
  }
}
