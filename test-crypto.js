const crypto = require('crypto');

// 1. Gizli açarın təyin edilməsi (AES-256 üçün 32 baytlıq açar)
const secretKey = crypto.scryptSync('GulBoutiqueSecretPass', 'saltKey', 32);
const IV_LENGTH = 16;

// ŞİFRƏLƏMƏ FUNKSİYASI
function encrypt(text) {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    // IV və şifrələnmiş mətni birləşdirib qaytarırıq
    return iv.toString('hex') + ':' + encrypted;
}

// DEŞİFRƏLƏMƏ (ŞİFRƏNİ AÇMA) FUNKSİYASI
function decrypt(encryptedText) {
    const textParts = encryptedText.split(':');
    const iv = Buffer.from(textParts[0], 'hex');
    const encryptedData = textParts[1];
    const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, iv);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// --- TEST EDƏK ---
const orijinalMetn = "User:gulay|Role:Admin|Access:Full";

console.log("--------------------------------------------------");
console.log("1. Orijinal Mətn (Açıq, hər kəsin oxuya bildiyi hal):");
console.log(orijinalMetn);

const sifrelenmisHali = encrypt(orijinalMetn);
console.log("--------------------------------------------------");
console.log("2. Şifrələnmiş Halı (Serverin brauzerə göndərdiyi oxunmaz simvollar):");
console.log(sifrelenmisHali);

const geriAcilmisHali = decrypt(sifrelenmisHali);
console.log("--------------------------------------------------");
console.log("3. Serverin şifrəni yenidən geri açdığı hal:");
console.log(geriAcilmisHali);
console.log("--------------------------------------------------");