let left = null, right = null, oper = null;

function save(){
    const inp = document.getElementById("top-inp");
    let value =""

    if(left === null)
         return;
    value += left + " "
    inp.value = value


    if(oper === null)
         return;
    value += oper + " "
    inp.value = value
    
    if(right === null)
         return;
    value += right + " "
    inp.value = value

    if(res) {
        let res = " ";

        switch(oper){
            case "+":
                res = parseInt(left) + parseInt(right)
                break;
            case "-":
                res = parseInt(left) - parseInt(right)
                break;
            case "/":
                res = parseInt(left) / parseInt(right)
                break;
            case "*":
                res = parseInt(left) * parseInt(right)
                break;
        }

        value += "= " + res;
        inp.value = value
    }

}

function inputNum(num){
   if(oper === null){
       if(left === null){
           left = `${num}`
       }

       else {
           if(num === 0 && parseInt(left) === 0)
                 return;
           left += `${num}`
       }
   }

   else {
       if(right === null) {
           right =`${num}`
       }
       else {
        if(num === 0 && parseInt(right) === 0)
        return;
           right += `${num}`
       }
   }
   save();
}

function inputOper(op) {
    if(left === null && op === "-"){
        left = "-"
        save()
        return;
    }

    if(left === "-" && op === "-"){

        return;
    }
    oper = op;
    save()
}