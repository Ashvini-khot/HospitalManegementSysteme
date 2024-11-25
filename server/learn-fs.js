import fileModule from "node:fs";
/*fileModule.mkdir("./Users/email/a",{recursive:true},(err)=>
{if(err){console.log("errorrrr",err)}});*/
/*fileModule.writeFile("./users/email/a/info.txt","HelloWorld !!!,",(err)=>
{
    if(err){
    console.log("Unable",err);}
}
);
/*fileModule.appendFile("./users/email/a/info.txt","HelloWorldAppended !!!,",(err)=>
    {
        if(err){
        console.log("Unable",err);}
    }
    );*/
   /* fileModule.unlink("./users/email/a/info.txt",(err)=>
        {
            if(err){
            console.log("file not getting unlinked",err);}
        }
        );*/
        fileModule.readFile("./users/email/a/info.txt",(err,data)=>
            {
                if(err){
                console.log("Unable",err);
            }
            console.log(data.toString());
        }
            );