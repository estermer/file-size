const express     = require('express');
const app         = express();
const path        = require('path');
const multer      = require('multer');
const upload      = multer({ dest: './uploads/' });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/form.html'));
});

app.post('/get-file-size', upload.single('file'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.json({"file_size": req.file.size});
});

app.listen(process.env.PORT || 3000);
