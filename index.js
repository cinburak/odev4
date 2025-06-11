const fs = require('fs');

// Dosya adı
const filePath = 'employees.json';

// CREATE – Dosya oluştur ve veri yaz
fs.writeFile(filePath, JSON.stringify({ name: "Employee 1 Name", salary: 2000 }), 'utf8', (err) => {
  if (err) throw err;
  console.log('✅ Dosya oluşturuldu ve veri eklendi.');

  // READ – Dosyayı oku
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('\n📄 Okunan Veri:', data);

    // UPDATE – Veriyi güncelle
    const updatedData = JSON.stringify({ name: "Employee 1 Name", salary: 4000 });
    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) throw err;
      console.log('\n✏️ Veri güncellendi.');

      // DELETE – Dosyayı sil
      fs.unlink(filePath, (err) => {
        if (err) throw err;
        console.log('\n🗑️ Dosya silindi.');
      });
    });
  });
});
