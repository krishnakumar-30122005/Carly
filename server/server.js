

// Load environment variables from .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// ---------------- Serve Client ----------------
app.use('/client', express.static(path.join(__dirname, 'public/client')));
app.get('/client/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/client/index.html'));
});

// ---------------- Serve Admin ----------------
app.use('/admin', express.static(path.join(__dirname, 'public/admin')));
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/admin/index.html'));
});

// ---------------- Sample API ----------------
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working fine!' });
});

// ---------------- Start Server ----------------
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
