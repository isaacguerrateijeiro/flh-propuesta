const express = require('express');
const path    = require('path');
const session = require('express-session');

const app         = express();
const PORT        = process.env.PORT || 3000;
const ACCESS_CODE = (process.env.ACCESS_CODE || 'FLH26A').toUpperCase();

app.set('trust proxy', 1);

app.use(express.urlencoded({ extended: false }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'flh-propuesta-dev-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  },
}));

function requireAuth(req, res, next) {
  if (req.session.authenticated) return next();
  res.redirect('/login');
}

app.get('/login', (req, res) => {
  if (req.session.authenticated) return res.redirect('/');
  res.sendFile(path.join(__dirname, 'login.html'));
});

app.post('/login', (req, res) => {
  const code = (req.body.code || '').toUpperCase().trim();
  if (code === ACCESS_CODE) {
    req.session.authenticated = true;
    return res.redirect('/');
  }
  res.redirect('/login?error=1');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use(requireAuth, express.static(path.join(__dirname, 'public')));

app.get('*', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Servidor arrancado en http://localhost:${PORT}`);
});
