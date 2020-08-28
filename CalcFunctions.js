const calc = (EnteredSymb, result) =>
{
    switch (EnteredSymb)
    {
        case ".":
            return (result+".");
        case "%":
            result = calcBefore(result);
            return (result+"|%|");
        case "-":
            result =calcBefore(result);
            return (result+"|-|");
        case "+":
            result =calcBefore(result);
            return (result+"|+|");
        case "/":
            result =calcBefore(result);
            return (result+"|/|");
        case "x":
            result =calcBefore(result);
            return (result+"|x|");   
        default:
            {
                if(!isNaN(EnteredSymb))
                {
                    result =  String(result)+String(EnteredSymb);
                }
                else{
                    result = "";
                    alert("ERROR: NaN");
                }
                return result;
            }
    }
}

//считает результат операции, который был до нажатия новой операции (|)
const calcBefore = (res)  =>
{
    res = res.split("|");
  //  console.log(res+" ============================")
   // if(res[2]!="")
        switch (res[1])
        {
            case "%":
                return String(Number(res[0])%Number(res[2]));
            case "-":
                return String(Number(res[0])-Number(res[2]));
            case "+":
                return String(Number(res[0])+Number(res[2]));
            case "/":
                return String(Number(res[0])/Number(res[2]));
            case "x":
                return String(Number(res[0])*Number(res[2]));
            default:
                return String(res.join());
        }
}

function changeColorWhenPassed(passedButton)
{
    console.log(passedButton);
    document.querySelectorAll("button").forEach(but =>
    {
            if(but.value==="=")
                but.style.background = "#4d3e3e";
            else if(but.value==="+"||but.value==="-"||but.value==="/"||but.value==="%"||but.value==="delete"||but.value==="C"||but.value==="c"||but.value==="x"||but.value===".")
                but.style.background = "#f9b384";
            else
                 but.style.background = "#f1e3cb";

            passedButton.style.backgroundColor = "#FFFFF0";
            //passedButton.style.background = "white";
            passedButton.style.transition = "color .2s linear";
    }   ); 
}