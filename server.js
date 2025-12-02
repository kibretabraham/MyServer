const express = require("express");
const app = express();

app.use(express.json());

// Simple endpoint to echo back what the user sends
app.post("/echo", (req, res) => {
  res.json({ message: req.body.message });
});

// Use Render-assigned port, fallback to 3000 for local testing
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});