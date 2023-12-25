let horaAtual

fetch("http://worldtimeapi.org/api/timezone/America/Sao_Paulo")
    .then((res) => {
        console.log(res)
        if(res.ok) {
            console.log("Success")
            return res.json()
        } else {
            throw new Error('Erro na solicitacão')
        }
    })
    .then(data => {
        horaAtual = data.datetime
        
    })
    
    toString(horaAtual)
    

    const relogio = document.getElementById('hora')

    //deixa somente horário
    let horaAgora = horaAtual.slice(11,19)
    

    function clique(){
        relogio.innerHTML = horaAtual
    }

    