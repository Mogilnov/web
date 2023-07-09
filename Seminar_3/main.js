// const num1 = parseFloat(prompt("Введите первое число: "));
// const num2 = +prompt("Введите второе число: ");
// function sum(n1, n2){
//     return n1 + n2;
// }
// alert (`Результат сложения чисел ${num1} и ${num2} равен ${sum(num1, num2)}`);

// const userAgree = confirm("Вам хорошо живётся?");
// if (userAgree) {
//     alert ("Тогда мы идём к вам!")
// } else { 
// alert ("Ну, выдержитесь там!")
// }

const product = prompt ("Введите фрукт: ");

switch (product.toLocaleLowerCase()){
    case "мандарины":
        alert ("Мандарины стоят 100 руб/кг.");
        break;
    case "бананы":
    case "груши":
        alert ("Бананы и груши стоят 70 руб/кг.");
        break;
    default:
        alert ("Такого продукта нет");
}