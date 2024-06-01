const nome = "Vinicius"
let exp = 0
let rank = "Bronze"

while (exp <= 10001){
    exp += 1
}

if(exp <= 1001){
    rank = "Bronze"
}else if(exp > 1001 && exp <= 2001){
    rank = "Prata"
}else if(exp > 2001 && exp <= 3001){
    rank = "Ouro"
}else if(exp > 3001){
    rank = "Diamante"
}

console.log("O " + nome + " está no nível " + rank + " com " + exp + " pontos de experiência")