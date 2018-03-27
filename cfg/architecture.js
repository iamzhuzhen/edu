var fs = require("fs")  
var path = require("path")  
  
var root = path.join(__dirname,'../');
var load_dir = ['routes','models'];

var architecture = {};

loadDir ();
function loadDir () {
    load_dir.map((dir) => {
        architecture[dir] = [];
        readDirSync(architecture[dir],path.join(root,dir));
    })
}

function readDirSync(architecture_model,dir_path) {  
    fs.readdirSync(dir_path).map(function(file,index) {  
        let file_name = file.slice(0,file.indexOf('.'))
        architecture_model[file_name] = path.join(dir_path,file_name);
    })  
}

module.exports = architecture;