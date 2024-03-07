// console.log("Implement servermu disini yak 😝!");

const http = require("http");
const fs = require("fs");
const path = require("path");

// third party
const url = require("url");

const PULIC_DIR = path.join(__dirname, "../public");
const PORT = 8000;

const server= (req,res) => {
    //local host 8000
    if (req.url ==="/") {
        res.end('Ini halaman default');

    }
    // localhost:8000/search
    else if(req.url ==="/search"){
        res.end("ini halaman search");

    } else {
        res.end ("halaman yang tak ada seperti ....");

    }
};

http.createServer(server).listen(PORT)
console.log(`server is running .. port :localhost:${PORT}`);