# Rəsmi Node.js imicini istifadə edirik
FROM node:24-alpine

# İşçi qovluğunu təyin edirik
WORKDIR /app

# Paket fayllarını köçürürük
COPY package*.json ./

# Asılılıqları quraşdırırıq
RUN npm install

# Bütün layihə fayllarını kopyalayırıq
COPY . .

# Serverin işləyəcəyi portu qeyd edirik
EXPOSE 3000

# Serveri işə salma əmri
CMD ["node", "server.js"]