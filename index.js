function App() {
    const [expression, setExpression] = React.useState("");
    const [answer, setAnswer] = React.useState(0);

    const display = symbol => {
        setExpression(prev => prev + symbol);
        if (expression[expression.length-1] == "=") {
            if (/[0-9]/.test(symbol)) {
                setExpression(symbol)
            } else {
                setExpression(answer + symbol)
            }
        }
    }

    const calculate = () => {
        setAnswer(eval(expression));
        setExpression(prev => prev + "=")
    }

    const allClear = () => {
        setExpression("")
        setAnswer(0)
    };

    const clear = () => {
        setExpression(expression.slice(0, expression.length-1))
        // setExpression(prev => prev.split("").slice(0, prev.length-1).join(""));
        setAnswer(0)
    };


    return (
        <div className="container">
            <div className="grid">
                <div className="dis">
                    <input type="text" value={expression} placeholder="0" disabled />
                    <div className="total">{answer}</div>
                </div>
                <div onClick={allClear} className="divButton AC tomato">AC</div>
                <div onClick={clear} className="divButton C tomato">C</div>
                <div onClick={() => display("/")} className="divButton div">/</div>
                <div onClick={() => display("*")} className="divButton times">x</div>
                <div onClick={() => display("7")} className="divButton seven dark-gray">7</div>
                <div onClick={() => display("8")} className="divButton eight dark-gray">8</div>
                <div onClick={() => display("9")} className="divButton nine dark-gray">9</div>
                <div onClick={() => display("-")} className="divButton minus">-</div>
                <div onClick={() => display("4")} className="divButton four dark-gray">4</div>
                <div onClick={() => display("5")} className="divButton five dark-gray">5</div>
                <div onClick={() => display("6")} className="divButton six dark-gray">6</div>
                <div onClick={() => display("+")} className="divButton plus">+</div>
                <div onClick={() => display("1")} className="divButton one dark-gray">1</div>
                <div onClick={() => display("2")} className="divButton two dark-gray">2</div>
                <div onClick={() => display("3")} className="divButton three dark-gray">3</div>
                <div onClick={calculate} className="divButton equal blue">=</div>
                <div onClick={() => display("0")} className="divButton zero dark-gray">0</div>
                <div onClick={() => display(".")} className="divButton dot dark-gray">.</div>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));