var fs = require('fs');

var jsn = [{
    "name": "Nilesh",
    "school": "RDTC",
    "marks": "77"
}, {
    "name": "Sagar",
    "school": "RC",
    "marks": "99.99"
}, {
    "name": "Prashant",
    "school": "Solapur",
    "marks": "100"
}];

var data = '';
for (var i = 0; i < jsn.length; i++) {
    data = data + jsn[i].name + '\t' + jsn[i].school + '\t' + jsn[i].marks + '\n';
}
console.log('data-----', data)
fs.appendFile('Filename.xls', data, (err) => {
    if (err) throw err;
    console.log('File created');
}); 
// fs.unlink('Filename.xls', (err) => {
//     if (err) throw err;
//     console.log('successfully deleted /tmp/hello');
// });

// fs.rename('Filename2.xls', 'Filename3.xls', (err) => {
//     if (err) throw err;
//     console.log('renamed complete');
//     fs.stat('Filename3.xls', (err, stats) => {
//         if (err) throw err;
//         console.log(`stats: ${JSON.stringify(stats)}`);
//     });

// });

fs.open('Filename.xls', 'r', (err, fd) => {
    if (err) throw err;
    console.log('fd------',fd)
    // fs.close(fd, (err) => {
    //     if (err) throw err;
    // });
});