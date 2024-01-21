const http=require("http");
const fs=require("fs");
let homecont="";
let projectcont="";
let regcont="";
fs.readFile("home.html",(err,home)=>{
    if(err){
        throw err;
    }
    homecont=home;
});
fs.readFile("project.html",(err,project)=>{
    if(err){
        throw err;
    }
    projectcont=project;
});
fs.readFile("registration.html",(err,registration)=>{
    if(err){
        throw err;
    }
    regcont=registration;
});
http.createServer((req,res)=>{
    let url=req.url;
    res.writeHeader(200,{"content-Type":"text/html"});
    switch(url){
        case "/project":
            res.write(projectcont);
            res.end();
            break;
        case "/registration":
            res.write(regcont);
            res.end();
            break;
        default:
            res.write(homecont);
            res.end();
            break;
    }
}).listen(5000);