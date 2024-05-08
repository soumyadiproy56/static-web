const express = require("express");
const path = require("path");

const app = express();
const PORT = 4000;

// 'public' folder ko static files serve karne ke liye set karen
app.use(express.static(path.join(__dirname, "public")));

// Server ko start karen
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
