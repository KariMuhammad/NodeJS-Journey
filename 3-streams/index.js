const fs = require("fs");
const zlib = require("zlib");
const crypto = require("crypto");
const { Transform } = require("stream");

class EncryptionStream extends Transform {
  constructor(key, vector) {
    super();
    this.key = key;
    this.vector = vector;
  }

  _transform(chunk, encoding, callback) {
    const cipher = crypto.createCipheriv("aes-256-cbc", this.key, this.vector);
    const encryptedChunks = Buffer.concat([
      cipher.update(chunk),
      cipher.final(),
    ]);

    this.push(encryptedChunks, encoding);
    callback();
  }
}

const key = crypto.randomBytes(32);
const vector = crypto.randomBytes(16);

const readableStream = fs.createReadStream(__dirname + "/input.txt");

const gzipStream = zlib.createGzip();

const encryptionStream = new EncryptionStream(key, vector);

const writableStream = fs.createWriteStream(__dirname + "/output.txt.gz.enc");

// Read -> Compress -> Encrypt -> Write
readableStream.pipe(gzipStream).pipe(encryptionStream).pipe(writableStream);
