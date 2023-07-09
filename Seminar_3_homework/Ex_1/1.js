const C = parseFloat(prompt("Введите температуру в градусах Цельсия: "));
function F(c) {
    return ((9/5) * c + 32).toFixed(1);
}
alert (`Цельсий: ${C}, Фаренгейт: ${F(C)}`);
