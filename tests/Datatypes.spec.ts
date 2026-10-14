//Array
//let browser:string[]=["Chrome","FireFox"];
let values: number[]=[324,245,789];
console.log(values[1])
//-------------
let stu=
{
    name:"Suma",
    age:28,
    Location:"Hyd"
}
await page.fill("#name",stu.name);
//----------------
enum colours
{
    YELLOW,
    GREEN,
    RED
}
let brow:colours=colours.YELLOW;
//-------------
let stu4:[string,number]=["Anil",407]
//----------
function mul(a:number, b:number): number
{
    return a*b;
}
mul(23,78);
//------------------
class Students1
{
    name:string;

    constructor(set:string)
    {
        this.name=set;
    }

}
let stuis= new Students1("Akhil")