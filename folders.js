// The fs "import" is short for file system
const fs = require('fs');

// This will make a folder named "data"
fs.mkdirSync("data");

// Programmatically creating folders named "A-Z"
for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    fs.mkdirSync(`data/${letter}`);
};