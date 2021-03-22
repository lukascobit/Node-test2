


const fs = require('fs')

fs.writeFile('message','Hello everyone',function(err){
    if(err) throw err;

    console.log('file has been writen')
})


