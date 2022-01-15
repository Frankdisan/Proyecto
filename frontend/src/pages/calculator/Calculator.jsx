import React from "react";
import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import "./calculator.css"
import { useState } from "react";

function Calculator () {
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("");
    const operations= ["/", "*", "+", "-", "."];
    const updateCalc= value => {
        if (
          (operations.includes(value) && calc === "") || (
          operations.includes(value) && operations.includes(calc.slice(-1))
          ) 
        ) {
              return;
          }
        setCalc(calc + value);
        if (!operations.includes(value)) {
            setResult (eval(calc + value).toString())
        }
    }
    const createDigits = () => {
        const digits = [];
        for (let i=1; i<10; i++) {
            digits.push (
                <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
            )
        }
        return digits;
    }

    const calculate= () => {
        setCalc (eval(calc).toString());
    }
    const deleteLast = () => {
        if (calc == "") {
            return;
        }
        const value= calc.slice(0,-1);
        setCalc(value);
    }
        return (
        <>
            <Header/>
            <div className="calculator">
                    <div className="display">{result ? <span>{result}</span> : ""}{calc || "0"}</div>
                    <button onClick={deleteLast} className="special">DEL</button>
                    <button onClick={() => updateCalc("/")}>÷</button>
                    <button onClick={() => updateCalc("*")}>×</button>
                    <button onClick={() => updateCalc("+")} className="special">+</button>
                    <button onClick={() => updateCalc("-")} className="special">-</button>
                    {createDigits()} 
                    <button onClick={() => updateCalc("0")} id="cero">0</button>
                    <button onClick={() => updateCalc(".")}>.</button>
                    <button onClick={calculate}>=</button>

            </div>
            <Footer/>
        </>
    )
}

export default Calculator; 
