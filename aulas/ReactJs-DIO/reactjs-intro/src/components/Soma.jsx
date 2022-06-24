const soma = (a, b) => a + b

function Soma(){
    return(
        <div className="container">
            <p>
                Vamos fazer uma soma?<br/>
                5 + 5 = {soma(5, 5)}
            </p>
        </div>
    )
}


export default Soma