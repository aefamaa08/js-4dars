function checkName(name) {
    // Приводим имя к нижнему регистру для унификации
    const lowerCaseName = name.toLowerCase();
  
    // Создаем объект для хранения информации о буквах
    let letterInfo = {};
  
    // Перебираем все буквы имени и записываем их присутствие
    for (let char of lowerCaseName) {
      if (!letterInfo[char]) {
        letterInfo[char] = true;
      }
    }
  
    // Проверяем, есть ли вторая буква
    const secondLetter = lowerCaseName.length > 1 ? lowerCaseName[1] : null;
    if (secondLetter) {
      console.log(`Вторая буква "${secondLetter}" присутствует в имени.`);
    } else {
      console.log("Второй буквы в имени нет.");
    }
  
    // Выводим информацию о всех буквах
    console.log("Все буквы, входящие в имя:");
    for (let letter in letterInfo) {
      console.log(letter);
    }
}
  
// Пример использования:
let name = prompt("Введите ваше имя:");
checkName(name);
