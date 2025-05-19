const express = require('express');
const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Đường dẫn đến file JSON
const filePath = './data.json';

// Ghi dữ liệu vào file
app.post('/api/book', (req, res) => {
  const newBooking = req.body;

  fs.readFile(filePath, (err, data) => {
    if (err) return res.status(500).json({ error: 'Đọc file lỗi' });

    const bookings = JSON.parse(data);
    bookings.push(newBooking);

    fs.writeFile(filePath, JSON.stringify(bookings, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'Ghi file lỗi' });

      res.status(200).json({ message: 'Đặt phòng thành công!' });
    });
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
