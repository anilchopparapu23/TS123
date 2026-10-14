//any
let finish:any;
finish=67;
finish="Akhil"
finish=789;
//-------------
let k:unknown="Automation with typescript";
if(typeof k === "string")
{
    console.log(k.startsWith("Automation"));
}