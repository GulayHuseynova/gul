/*const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Frontend (index.html) faylını birbaşa server üzərindən açmaq üçün
app.use(express.static(__dirname));

// PostgreSQL ilə əlaqə tənzimləmələri
const pool = new Pool({
    user: 'postgres',          
    host: 'localhost',
    database: 'testdb',        
    password: 'gulay', 
    port: 5432,
});*/
/*
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Zəif kod (Hücum üçün)
        const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
        console.log("İcra olunan SQL:", query); 
        
        const result = await pool.query(query);

        if (result.rows.length > 0) {
            res.json({ success: true, message: 'Giriş uğurludur!' });
        } else {
            res.json({ success: false, message: 'İstifadəçi adı və ya şifrə səhvdir.' });
        }
    } catch (err) {
    
        console.error("!!! SQL XƏTASI BAŞ VERDİ !!!:", err.message);
        
        // Frontend-in "Yoxlanılır"da qalmaması üçün xəta cavabı qaytarırıq
        res.status(500).json({ success: false, message: 'Serverdə SQL xətası yarandı!' });
    }
});*/
/*app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
       
        const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
        console.log("İcra olunan SQL:", query); // 
        
        const result = await pool.query(query); // Parametr yoxdur ($1, $2 yoxdur)

        if (result.rows.length > 0) {
            res.json({ success: true, message: 'Sistemə sızıldı! (SQL Injection)' });
        } else {
            res.json({ success: false, message: 'Uğursuz giriş.' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Server xətası!' });
    }
});*/
// Login marşrutu (Route)
/*app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE username = $1 AND password = $2',
            [username, password]
        );

        if (result.rows.length > 0) {
            res.json({ success: true, message: 'Sistemə uğurla daxil oldunuz!' });
        } else {
            res.json({ success: false, message: 'İstifadəçi adı və ya şifrə səhvdir!' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: 'Serverdə xəta baş verdi!' });
    }
});*/
/*app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        // Zəif kod (Hücum üçün)
        const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
        console.log("İcra olunan SQL:", query); 
        
        const result = await pool.query(query);

        if (result.rows.length > 0) {
            res.json({ success: true, message: 'Giriş uğurludur!' });
        } else {
            res.json({ success: false, message: 'İstifadəçi adı və ya şifrə səhvdir.' });
        }
    } catch (err) {
        // BAX BU SƏTİR ÇOX VACİBDİR:
        console.error("!!! SQL XƏTASI BAŞ VERDİ !!!:", err.message);
        
        // Frontend-in "Yoxlanılır"da qalmaması üçün xəta cavabı qaytarırıq
        res.status(500).json({ success: false, message: 'Serverdə SQL xətası yarandı!' });
    }
});

// Serverin dinlədiyi port
app.listen(3000, () => {
    console.log('Server işləyir: http://localhost:3000');
});
// server.js daxilində
const path = require('path');

// Dashboard səhifəsini göstərmək üçün
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});
/*app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});*/
//kriptosu olan kod
/*
const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto'); // Kriptoqrafik alqoritmlər üçün Node.js daxili modulu

const app = express();
app.use(express.json());
app.use(cors());

// Frontend fayllarını birbaşa server üzərindən açmaq üçün
app.use(express.static(__dirname));

// PostgreSQL ilə əlaqə tənzimləmələri
const pool = new Pool({
    user: 'postgres',          
    host: 'localhost',
    database: 'testdb',         
    password: 'gulay', 
    port: 5432,
});

/* ==========================================================
   1. ZƏİF KOD (SQL Injection nümayişi üçün)
   Müəllimə hücumu göstərmək üçün BU BLOQU AKTİV EDİN, 
   təhlükəsiz bloku isə şərhə alın.
   (Bu aktiv olanda admin' -- yazaraq sızmağı göstərə bilərsiniz)
   ========================================================== */
/*
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
        console.log("İcra olunan ZƏİF SQL:", query); 
        
        const result = await pool.query(query);

        if (result.rows.length > 0) {
            res.json({ success: true, message: 'Giriş uğurludur! (Zəif kod - Sızıldı)' });
        } else {
            res.json({ success: false, message: 'İstifadəçi adı və ya şifrə səhvdir.' });
        }
    } catch (err) {
        console.error("!!! SQL XƏTASI BAŞ VERDİ !!!:", err.message);
        res.status(500).json({ success: false, message: 'Serverdə SQL xətası yarandı!' });
    }
});
*/


/* ==========================================================
   2. TƏHLÜKƏSİZ KOD (Parametrli sorğu + Kriptoqrafiya nümunəsi)
   Müəllimə təhlükəsizliyi göstərmək üçün BU BLOQ AKTİV OLMALIDIR.
   (Bazadakı parollarla problem yaratmır, birbaşa düzgün yoxlayır)
   ========================================================== */
/*app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Parametrləşdirilmiş sorğu: SQL Injection-ı tam bloklayır!
        const result = await pool.query(
            'SELECT * FROM users WHERE username = $1 AND password = $2',
            [username, password]
        );

        if (result.rows.length > 0) {
            // Nümunə: Kriptoqrafik alqoritm (AES-256) ilə həssas məlumatın şifrələnməsi (Müəllim üçün)
            const secretData = "GulBoutique-Admin-Token-123";
            const algorithm = 'aes-256-cbc';
            const secretKey = crypto.randomBytes(32);
            const iv = crypto.randomBytes(16);

            const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
            let encryptedData = cipher.update(secretData, 'utf8', 'hex');
            encryptedData += cipher.final('hex');

            console.log("Kriptoqrafik Şifrələnmiş Məlumat (AES-256):", encryptedData);

            res.json({ 
                success: true, 
                message: 'Təhlükəsiz giriş uğurludur!',
                cryptoDemo: encryptedData // Kriptoqrafiyanın işlədiyini sübut edən token
            });
        } else {
            res.json({ success: false, message: 'İstifadəçi adı və ya şifrə səhvdir!' });
        }
    } catch (err) {
        console.error("Server xətası:", err);
        res.status(500).json({ success: false, message: 'Serverdə xəta baş verdi!' });
    }
});


// Səhifə marşrutları
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

app.listen(3000, () => {
    console.log('Server işləyir: http://localhost:3000');
});*/
// itis
/*const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

// PostgreSQL Bağlantısı
const pool = new Pool({
    user: process.env.DB_USER || 'postgres',          
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'testdb',         
    password: process.env.DB_PASSWORD || 'gulay', 
    port: process.env.DB_PORT || 5432,
});*/

/* ==========================================================
   İTİS HİSSƏSİ: Audit Logging (Təhlükəsizlik Loqları)
   ========================================================== */
/*function writeAuditLog(eventType, username, ipAddress, statusDetails) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [EVENT: ${eventType}] [USER: ${username}] [IP: ${ipAddress}] [STATUS: ${statusDetails}]\n`;
    
    // Console audit
    console.log(logMessage.trim());
    
    // Fayla loqların yazılması (İTİS İdarəetmə tələbi)
    fs.appendFile(path.join(__dirname, 'audit_security.log'), logMessage, (err) => {
        if (err) console.error("Loq yazılarkən xəta baş verdi:", err);
    });
}*/

/* ==========================================================
   KRİPTOQRAFİYA HİSSƏSİ: AES-256-CBC Simmetrik Şifrələmə
   ========================================================== */
/*const ENCRYPTION_KEY = crypto.scryptSync('GulBoutiqueSecretPass', 'saltKey', 32);
const IV_LENGTH = 16;

function encryptSensitiveData(text) {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}*/

/* ==========================================================
   1. DEMO REJİM: ZƏİF KOD (SQL Injection Nümayişi)
   ========================================================== */

/*app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const clientIp = req.ip || req.socket.remoteAddress;

    try {
        const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
        console.log("İcra olunan ZƏİF SQL:", query); 
        
        const result = await pool.query(query);

        if (result.rows.length > 0) {
            writeAuditLog("LOGIN_ATTEMPT", username, clientIp, "SUCCESS_SQL_INJECTION_VULNERABLE");
            res.json({ success: true, message: 'Giriş uğurludur! (Sızma baş verdi)' });
        } else {
            writeAuditLog("LOGIN_ATTEMPT", username, clientIp, "FAILED_INVALID_CREDENTIALS");
            res.json({ success: false, message: 'İstifadəçi adı və ya şifrə səhvdir.' });
        }
    } catch (err) {
        writeAuditLog("SQL_ERROR", username, clientIp, err.message);
        res.status(500).json({ success: false, message: 'Serverdə SQL xətası yarandı!' });
    }
});*/


/* ==========================================================
   2. TƏHLÜKƏSİZ REJİM (İTİS + Bulud + Kriptoqrafiya)
   ========================================================== */
/*app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const clientIp = req.ip || req.socket.remoteAddress;

    try {
        // Parametrləşdirilmiş sorğu ($1, $2) - Bulud və Veb Təhlükəsizliyi
        const result = await pool.query(
            'SELECT * FROM users WHERE username = $1 AND password = $2',
            [username, password]
        );

        if (result.rows.length > 0) {
            const user = result.rows[0];

            // Kriptoqrafik Əməliyyat: Sessiya məlumatının AES-256 ilə şifrələnməsi
            const encryptedSession = encryptSensitiveData(`User:${user.username}|Role:Admin`);

            // İTİS Audit Loqlama
            writeAuditLog("LOGIN_ATTEMPT", username, clientIp, "SUCCESS_SECURE_AUTH");

            res.json({ 
                success: true, 
                message: 'Təhlükəsiz daxil olundu!',
                sessionToken: encryptedSession
            });
        } else {
            // İTİS Audit Loqlama (Uğursuz giriş cəhdi)
            writeAuditLog("LOGIN_ATTEMPT", username, clientIp, "FAILED_AUTHENTICATION");
            res.json({ success: false, message: 'İstifadəçi adı və ya şifrə səhvdir!' });
        }
    } catch (err) {
        writeAuditLog("SYSTEM_ERROR", username, clientIp, err.message);
        res.status(500).json({ success: false, message: 'Serverdə xəta baş verdi!' });
    }
});*/

/* ==========================================================
   İTİS HİSSƏSİ: Audit Loqlarının İdarəetmə Paneli Marşrutu
   ========================================================== */
/*app.get('/api/logs', (req, res) => {
    fs.readFile(path.join(__dirname, 'audit_security.log'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Loq faylı oxunmadı" });
        }
        res.type('text/plain').send(data);
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server işləyir: http://localhost:${PORT}`);
});*/

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');
const fs = require('fs');
const rateLimit = require('express-rate-limit'); // <-- 1. Rate-limit paketi əlavə olundu

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname));

// İP ünvanının düzgün izlənilməsi (Rate-limiting üçün vacibdir)
app.set('trust proxy', 1);

// PostgreSQL Bağlantısı
const pool = new Pool({
    user: process.env.DB_USER || 'postgres',          
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'testdb',         
    password: process.env.DB_PASSWORD || 'gulay', 
    port: process.env.DB_PORT || 5432,
});

/* ==========================================================
   RATE LİMİTİNG: Brute-Force Hücumlarından Qorunma
   ========================================================== */
const loginLimiter = rateLimit({
    windowMs: 60 * 1000, // 1 dəqiqə vaxt pəncərəsi
    max: 3, // Maksimum 3 cəhd icazəsi
    message: { 
        success: false, 
        message: 'Çox sayda ardıcıl cəhd edildi! Zəhmət olmasa 1 dəqiqə sonra yenidən cəhd edin.' 
    },
    standardHeaders: true,
    legacyHeaders: false,
});

/* ==========================================================
   İTİS HİSSƏSİ: Audit Logging (Təhlükəsizlik Loqları)
   ========================================================== */
function writeAuditLog(eventType, username, ipAddress, statusDetails) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [EVENT: ${eventType}] [USER: ${username}] [IP: ${ipAddress}] [STATUS: ${statusDetails}]\n`;
    
    // Console audit
    console.log(logMessage.trim());
    
    // Fayla loqların yazılması (İTİS İdarəetmə tələbi)
    fs.appendFile(path.join(__dirname, 'audit_security.log'), logMessage, (err) => {
        if (err) console.error("Loq yazılarkən xəta baş verdi:", err);
    });
}

/* ==========================================================
   KRİPTOQRAFİYA HİSSƏSİ: AES-256-CBC Simmetrik Şifrələmə
   ========================================================== */
const ENCRYPTION_KEY = crypto.scryptSync('GulBoutiqueSecretPass', 'saltKey', 32);
const IV_LENGTH = 16;

function encryptSensitiveData(text) {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
}

/* ==========================================================
   1. DEMO REJİM: ZƏİF KOD (SQL Injection Nümayişi)
   ========================================================== */

/*app.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;
    const clientIp = req.ip || req.socket.remoteAddress;

    try {
        const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
        console.log("İcra olunan ZƏİF SQL:", query); 
        
        const result = await pool.query(query);

        if (result.rows.length > 0) {
            writeAuditLog("LOGIN_ATTEMPT", username, clientIp, "SUCCESS_SQL_INJECTION_VULNERABLE");
            res.json({ success: true, message: 'Giriş uğurludur! (Sızma baş verdi)' });
        } else {
            writeAuditLog("LOGIN_ATTEMPT", username, clientIp, "FAILED_INVALID_CREDENTIALS");
            res.json({ success: false, message: 'İstifadəçi adı və ya şifrə səhvdir.' });
        }
    } catch (err) {
        writeAuditLog("SQL_ERROR", username, clientIp, err.message);
        res.status(500).json({ success: false, message: 'Serverdə SQL xətası yarandı!' });
    }
});*/


/* ==========================================================
   2. TƏHLÜKƏSİZ REJİM (İTİS + Bulud + Kriptoqrafiya + Rate Limit)
   ========================================================== */
app.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body;
    const clientIp = req.ip || req.socket.remoteAddress;

    try {
        // Parametrləşdirilmiş sorğu ($1, $2) - Bulud və Veb Təhlükəsizliyi
        const result = await pool.query(
            'SELECT * FROM users WHERE username = $1 AND password = $2',
            [username, password]
        );

        if (result.rows.length > 0) {
            const user = result.rows[0];

            // Kriptoqrafik Əməliyyat: Sessiya məlumatının AES-256 ilə şifrələnməsi
            const encryptedSession = encryptSensitiveData(`User:${user.username}|Role:Admin`);

            // İTİS Audit Loqlama
            writeAuditLog("LOGIN_ATTEMPT", username, clientIp, "SUCCESS_SECURE_AUTH");

            res.json({ 
                success: true, 
                message: 'Təhlükəsiz daxil olundu!',
                sessionToken: encryptedSession
            });
        } else {
            // İTİS Audit Loqlama (Uğursuz giriş cəhdi)
            writeAuditLog("LOGIN_ATTEMPT", username, clientIp, "FAILED_AUTHENTICATION");
            res.json({ success: false, message: 'İstifadəçi adı və ya şifrə səhvdir!' });
        }
    } catch (err) {
        writeAuditLog("SYSTEM_ERROR", username, clientIp, err.message);
        res.status(500).json({ success: false, message: 'Serverdə xəta baş verdi!' });
    }
});

/* ==========================================================
   İTİS HİSSƏSİ: Audit Loqlarının İdarəetmə Paneli Marşrutu
   ========================================================== */
app.get('/api/logs', (req, res) => {
    fs.readFile(path.join(__dirname, 'audit_security.log'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Loq faylı oxunmadı" });
        }
        res.type('text/plain').send(data);
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index2.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'dashboard.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server işləyir: http://localhost:${PORT}`);
});