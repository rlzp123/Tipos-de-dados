// Crie um array `times` com `"Flamengo"`, `"Palmeiras"` e `"São Paulo"`.

// 1. Adicione `"Corinthians"` no final.
// 2. Adicione `"Grêmio"` no início.
// 3. Remova o último time.
// 4. Encontre a posição do `"Palmeiras"`.
// 5. Inverta a ordem dos times.

let times = ["Flamengo", "Palmeiras", "São Paulo"];


times.push("Corinthians");
console.log(times);

times.unshift("Grêmio");
console.log(times);

times.pop();
console.log(times);

let palmeiras = times.indexOf("Palmeiras");
console.log(palmeiras);

times.reverse();
console.log(times);