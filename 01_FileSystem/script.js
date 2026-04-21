
const fs = require('fs');

//here fs is file system 
// fs.writeFile("hy.txt" , "hy aryan how are u " , function(err){
//     if (err) console.error(err);
//     else  console.log("its done");
// })


// fs.appendFile("hy.txt","du du du max Verstepen " , function(err){
//     if(err) console.error(err); 
//     else console.log("Every Thing All right ")
// })

// fs.rename("hy.txt","Hello.txt" , function(err){
//     if(err) console.error(err);
//     else console.log("every thing is alright");
// })

// fs.copyFile("./Hello.txt" ,"./copy1/copyresult.txt", function(err){
//     if (err) console.error(err);
//     else console.log("alright");
// } )

// fs.unlink("./copy/copyresult.txt", function(err){ 
//     if (err) console.error(err);
//     console.log("alright");
// })

fs.rm("./copy",{recursive:true},  function(err) {   // this will remove the folder   
    if(err) console.error(err);         
    else console.log("done");
})