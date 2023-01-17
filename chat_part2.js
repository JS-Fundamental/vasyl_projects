let members=document.querySelectorAll(".sideBar_item");
let inputs=document.querySelector(".inputs")
let hide=document.querySelector('.hide');
let hide2=document.querySelector('.hide2');
let btn=document.querySelector(".btn");
let textMessage=document.querySelector('.textMessage');
let i=0;
let iterSaved=0, iterAndriy=0, iterSasha=0, iterMaksym=0;
let user=[];
let temp=0;
let target=0;
let arrSaved=[];
let arrAndriy=[];
let arrSasha=[];
let arrMaksym=[];


function getTime(){
    let time= new Date();
    let now=`${time.getHours()}h `+`${time.getMinutes()}m `+`${time.getSeconds()}s `;
    return now;
}

function printMessage(array)
{
    for (let i = 0; i < array.length; ++i) 
    {
        textMessage.value+=array[i];
        textMessage.value+="\n";  
    }
}

function saveMessage(array, k)
{
    array[k]=inputs.value;
    k++;
}

function print()
{
    textMessage.value+=inputs.value;
    textMessage.value+="\n";
}

class Chat{
    constructor(name, date, text)
    {
        this.name=name;
        this.date=date;
        this.text=text;
    }

    set name (value)
    {
        this._name=value;
    }

    set date(value)
    {
        this._date=value;
    }
    
    set text(value)
    {
        this._text=value;
    }
    
}

members.forEach(element => {
    element.addEventListener("click", (e)=>{
        target=e.target.parentElement;
        console.group("Trying")
        console.log(element.id);
        console.log(target);
        console.log(target.id);
        console.groupEnd();
        hide.classList.remove("hide");
        hide2.classList.remove("hide2");
        inputs.value="";
        textMessage.value="";
        temp=element.id;
        switch (target.id) {
            case "Saved":
                printMessage(arrSaved);
                break;
            case "Andriy(C#)":
                printMessage(arrAndriy);
                break;
            case "Sasha(back)":
                printMessage(arrSasha);
                break;
            case "Maksym(JS)":
                printMessage(arrMaksym);
                break;
            default:
                textMessage.value="";
                break;
        }
    })
});


btn.addEventListener("click", ()=>{
    user[i]=new Chat();
    user[i].text=inputs.value;
    user[i].date=getTime();
    user[i].name=temp;
    console.log(user[i]);
    ++i;
    switch (target.id) {
        case "Saved":
            saveMessage(arrSaved, iterSaved);
            print();
            ++iterSaved;
            console.log(iterSaved);
            break;
        case "Andriy(C#)":
            saveMessage(arrAndriy, iterAndriy);
            print();
            ++iterAndriy;
            break;
        case "Maksym(JS)":
            saveMessage(arrMaksym, iterMaksym);
            print();
            ++iterMaksym;
            break;
        case "Sasha(back)":
            saveMessage(arrSasha, iterSasha);
            print();
            ++iterSasha;
            break;
        default:
            print();
            break;
    }
    inputs.value="";
})
