let horaAtual
let horaAgora
let horaCalc
let vetHora = []
const relogio = document.getElementById('hora')

/*function getTime(){
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
            converteHora()
            console.log(horaAtual)
        })
    }*/

    function getTime(){
        horaAtual = '2024-01-04T23:59:50.635186-03:00'
        converteHora()
        console.log(horaAtual)
    }

getTime();

function converteHora(){
    horaAgora = horaAtual.slice(11, 19);
    horaCalc = horaAgora.replace(/:/g, '')
    for(let i = 0; i < 6; i++) {
        vetHora[i] = horaCalc.slice(i, i+1)
    }
}

function attHora(){
    vetHora[5]++
    if(vetHora[5] >= 10){
        vetHora[4]++
        vetHora[5] = 0
        if(vetHora[4] >= 6){
            vetHora[3]++
            vetHora[4] = 0
        }
            if(vetHora[3] >= 10){
                vetHora[2]++
                vetHora[3] = 0
            }
                if(vetHora[2] >= 6){
                    vetHora[1]++
                    vetHora[2] = 0
                }
                    if(vetHora[1] >= 10){
                        vetHora[0]++
                        vetHora[1] = '0'
                    }
                        if(vetHora[0] == 2 && vetHora[1] == 4) {
                            for(let i = 0; i < 6; i++) {
                                vetHora[i] = '0'
                            }
                        }
    }

    relogio.innerHTML = vetHora[0] + vetHora[1] + ':' + vetHora[2] + vetHora[3] + ':' + vetHora[4] + vetHora[5]

}

function attRelogio(){
    relogio.innerHTML = horaAgora
    attHora()
}

setInterval(attRelogio, 1000)