import httpmodule from "http";
const server=httpmodule.createServer((req,res)=>{
console.log(req.method,req.url,req.headers);
if(req.method ==="POST")
{
res.write("Post method");
res.end();
}
 else if(req.method ==="GET")
    {
        res.write("Get method");
       res.end();
    }
     else if(req.method ==="PUT")
        {
            res.write("Put method");
            res.end();  
        }
        else(req.method ==="DELETE")
            {
                res.write("Delete method");
                res.end();
            }
res.write("<h1>Hellow-Word1</h1>");
res.write("<h1>Hellow-Word2</h1>");
res.write("<h1>Hellow-Word3</h1>");
res.write("<h1>Hellow-Word4</h1>");
res.end();
});
server.listen(3101,()=>{
    console.log("Server started on port 3101");
})
