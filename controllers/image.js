const { uploadToCloudinary } = require("../services/upload-image");
const imageModel = require("../models/image");

exports.addImage = async (req, res) => {
  try {
    const file = req.file;
    console.log("File", file);

    if (!file) {
      return res.status(401).json({
        message: "No file uploaded!",
      });
    }

    // for memory storage
    // const uploadedFile = await uploadToCloudinary(file);
    // console.log("Uploaded File", uploadedFile);

    const image = await imageModel.create({
      publicUrl: file.path, // disk storage
      url: file.path, // disk storage
      uploadedBy: req.user.userId,
    });

    // fs.unlinkSync(req.file.path)

    return res.status(201).json({
      success: true,
      message: "Image uploaded successfully!",
      data: image,
    });
  } catch (error) {
    console.log("Upload Error -> ", error);
    return res.status(500).json({
      success: false,
      message: "Failed to upload image",
    });
  }
};

exports.getImages = async (req, res) => {
  const data = await imageModel
    .find({})
    .populate("uploadedBy", "-password -role");
  return res.status(200).json({
    data,
  });
};
