let width = document.getElementById('width');                   //Ширина фасада
let height = document.getElementById('height');                 //Высота фасада
let thicknessValue = document.getElementById('thickness');      //Толщина фасада
let densityValue = document.getElementById('material');         //Тип материала
let count = document.querySelector('.count');                   // Кнопка "Считать"
let output = document.getElementById('door-weight');            // Вывод массы фасада
let liftType = document.getElementById('lift-type');
let clearParametres = document.querySelector('.clear');


count.onclick = function () {
    //Получение толщины материалы
    const thickness = thicknessValue.options[thicknessValue.selectedIndex].value;

    //Получение плотности материалы
    const density = densityValue.options[densityValue.selectedIndex].value;

    //Получение массы фасада
    let weight = width.value * height.value * thickness * density;

    //Вывод значения массы фасада
    output.textContent = weight.toFixed(3);

    //Получение количества кронштейнов
    let liftQuantity = document.querySelector('input[name="quantity"]:checked').value;

    let liftQuantityOutput = document.querySelector('input[name="quantity"]:checked').dataset.quantity;

    let deg = document.querySelector('input[name="degrees"]:checked').value;

    //Расчёт усилия
    let force = (((weight * (height.value / 2)) / (liftQuantity * deg)) * 0.15) * 10;

    if(width.value.length == 0) {
        console.log('error')                           //Обработка ошибки
    }
    if (force <= 5) {
      liftType.textContent = liftQuantityOutput + '50N';
    } else if (force <= 6) {
      liftType.textContent = liftQuantityOutput + '60N';
    } else if (force <= 8) {
      liftType.textContent = liftQuantityOutput + '80N';
    }  else if (force <= 10) {
        liftType.textContent = liftQuantityOutput + '100N';
    }  else if (force <= 12) {
        liftType.textContent = liftQuantityOutput + '120N';
    }  else {
        liftType.textContent = liftQuantityOutput + '150N';
    }
};

clearParametres.onclick = function () {
    width.value = '';
    height.value = '';
    output.textContent = '0';
    liftType.textContent = '-';
};
