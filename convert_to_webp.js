const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = 'assets';

fs.readdirSync(assetsDir).forEach(file => {
    if (file.toLowerCase().endsWith('.png')) {
        const filePath = path.join(assetsDir, file);
        const outputFilePath = path.join(assetsDir, file.replace(/\.png$/i, '.webp'));
        
        sharp(filePath)
            .webp({ quality: 80 })
            .toFile(outputFilePath)
            .then(() => {
                console.log(`Converted ${file} to WebP`);
            })
            .catch(err => {
                console.error(`Error converting ${file}:`, err);
            });
    }
});
