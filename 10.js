// Crie um array `times` com `"Flamengo"`, `"Palmeiras"` e `"São Paulo"`.

// 1. Adicione `"Corinthians"` no final.
// 2. Adicione `"Grêmio"` no início.
// 3. Remova o último time.
// 4. Encontre a posição do `"Palmeiras"`.
// 5. Inverta a ordem dos times.

let times = ["Flamengo", "Palmeiras", "São Paulo"]

times.push("Corinthians")
console.log("Grêmio")

times.shift()
console.log("Corinthians")

console.log(times.indexOf("Palmeiras"))

times.reverse()
console.log(times)