<!--  -->

### Cloudinary need file path to upload file

but when we are uploading file using `memoryStorage`, we have field called `buffer` instead, so how we can upload to cloudinary?
we can use `dataUri` package to make `filepath` for file, or use `upload_stream` and `end` and pass `buffer` directly.
https://medium.com/@joeeasy_/uploading-images-to-cloudinary-using-multer-and-expressjs-f0b9a4e14c54
