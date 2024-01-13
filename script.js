// Password generator
const checkbox = document.getElementById("check");
const checkbox1 = document.getElementById("check1");
const checkbox2 = document.getElementById("check2");
const checkbox3 = document.getElementById("check3");
const checkbox4 = document.getElementById("check4");
const finalPass = document.getElementById("password")
const passwordLength = document.getElementById("length");
// main part
passwordLength.addEventListener("input", () =>{
    currentValue =  passwordLength.value;
    rangeVal.innerText = currentValue;
});
var myPass = "";
checkbox.addEventListener("change", ()=> {
    if (checkbox.checked==true) {
        pass = "abcdefghijklmnopqrstuvwxyz"
        myPass = myPass+pass;
    }
    else {
        console.log("Not checked")
    }
})
checkbox1.addEventListener("change", ()=> {
    if (checkbox1.checked==true) {
        pass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        myPass = myPass+pass;
    }
    else {
        console.log("Not checked")
    }
});
checkbox2.addEventListener("change", ()=> {
    if (checkbox2.checked==true) {
        pass = "123456789";
        myPass = myPass+pass;
        }
    else {
        console.log("Not checked")
    }
});
checkbox3.addEventListener("change", ()=> {
    if (checkbox3.checked==true) {
        pass = ["!@#$&*"];
        myPass = myPass+pass;
    }
    else {
        console.log("Not checked")
    }  
});


document.getElementById("generate").addEventListener("click",()=> {
    let mainPass = "";
    for(let i=0;i<passwordLength.value;i++) {
        mainPass += myPass[Math.floor(Math.random()*myPass.length)];
    }
    if(checkbox4.checked==true){
        const distinctPass = (str) =>{
            const splitPass = str.split('');
            const distinct = [...new Set(splitPass)];
            const finalStr = distinct.join('');
            return finalStr;
        }
        var realPass = distinctPass(mainPass);
       
        finalPass.value = realPass;   
    }
    else {
    finalPass.value = mainPass;
    }
});






