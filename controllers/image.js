const { uploadToCloudinary, cloudinary } = require("../services/upload-image");
const imageModel = require("../models/image");
const fs = require("fs");

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

exports.deleteImage = async (req, res) => {
  try {
    const { imageId } = req.params;
    const { userId } = req.user;

    // 1. Disk Storage
    // 1.1 Delete Image in Server
    const image = await imageModel.findById(imageId);
    fs.unlinkSync(image.url);

    // 1.2 Delete Image record from database
    await image.deleteOne();

    // 2. Memory Storage
    // 2.1 Delete From Cloudinary
    // await cloudinary.uploader.destroy(image.publicUrl);

    // 2.2 Delete Record from database
    // await image.deleteOne();

    // End Request
    return res.status(204);
  } catch (error) {
    console.log("Error -> ", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete image operation!",
    });
  }
};
