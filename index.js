const express = require('express');
const fs = require('fs');
const port = 8080;

const app = express();

// require('./db');

const responseFile = (response, fileName) => {
    const filePath = './resources/' + fileName;
    // Check if file specified by the filePath exists
    fs.access(filePath, function(err) {
        if (!err) {
            // Content-type is very interesting part that guarantee that
            // Web browser will handle response in an appropriate manner.
            response.writeHead(200, {
                "Content-Type": "application/octet-stream",
                "Content-Disposition": "attachment; filename=" + fileName,
            });
            fs.createReadStream(filePath).pipe(response);
        } else {
            response.writeHead(400, {"Content-Type": "text/plain"});
            response.end("ERROR File does not exist");
        }
    });
}


app.get('/', async (req, res) => {
    res.send('Здесь скоро будет новый ORMAS ☺️')
});
app.listen(port);

console.log(`running on port ${port}`);
