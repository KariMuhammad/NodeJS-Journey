// 1#
const bufferOne = Buffer.alloc(10); // Allocate in Memory heap buffer data with 10 bytes
console.log(bufferOne);

// 2.1# Buffer from String Text
const bufferFromStringText = Buffer.from("Hello");
console.log(bufferFromStringText);

// Reverse from buffer to string
const stringFromBuffer = bufferFromStringText.toString();
console.log(stringFromBuffer);

// 2.2# Buffer From Array of Integer
const bufferFromAInt = Buffer.from([1, 2, 3, 4, 10, 15, 32, 64]);
console.log(bufferFromAInt);

// Reverse
const aIntFrombuffer = bufferFromAInt.toString();
console.log(aIntFrombuffer);

// 3# Write to Buffer
// bufferOne is empty buffer with length = 10.

bufferOne.write("Karim");
console.log("Buffer One", bufferOne, ", Text =", bufferOne.toString());

// 4# Reading single Byte from Buffer
console.log(bufferOne[1]); // K[a]rim -> 61 -> (61)₁₆ = (6 × 16¹) + (1 × 16⁰) = (97)₁₀

// 5# Slice Buffer
console.log(bufferOne.slice(0, 3));
console.log(bufferOne.slice(0, 3).toString());

// 6# Concat Buffers
const concatedBuffers = Buffer.concat([bufferOne, Buffer.from("Omar")]);
console.log(concatedBuffers);
console.log(concatedBuffers.toString());
console.log(concatedBuffers.toJSON());
