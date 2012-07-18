var audio = document.getElementById('html5AudioSample1Audio1'); /*Объявляет переменную для плеера и задает ей имя audio*/
var play = document.getElementById('html5AudioSample1Play'); /*Объявляет переменную для кнопки плей и задает ей имя play*/
var pause = document.getElementById('html5AudioSample1Pause'); /*Объявляет переменную для кнопки пауза и задает ей имя pause*/
var stop = document.getElementById('html5AudioSample1Stop');

   play.addEventListener('click', function() {audio.play();}, false); /*Добавляет обработчик события для кнопки плей. click имя события без 'on' (при нажатии), function функция которой передается событие (запускает плеер), false */

   pause.addEventListener('click', function() {audio.pause();}, false); /*Добавляет обработчик события для кнопки плей. click имя события без 'on' (при нажатии), function функция которой передается событие (ставит на паузу), false */
   
   stop.addEventListener('click', function(){audio.pause(); audio.currentTime = 0;}, false); /*Добавляет обработчик события для кнопки плей. click имя события без 'on' (при нажатии), function функция которой передается событие (ставит на паузу и сбрасывает), false */
   
   audio.addEventListener("timeupdate", function() {
      var duration = document.getElementById('html5AudioSample1Duration'); /*Объявляет переменную и задает ей имя duraction*/
      var s = parseInt(audio.currentTime % 60); /*Объявляет переменную и задает ей имя s. Число считается до 60, потом начинает заново с 0, округляет дроби*/
      var m = parseInt((audio.currentTime / 60) % 60); /*Объявляет переменную и задает ей имя s. Число считается до 60, потом начинает заново с 0, округляет дроби*/
      duration.innerHTML = m + '.' + s + 'sec';}, /*Присваивает переменной duraction выводимое в HTML значение. Переменные 'm'.s'sec*/
   false); /*Добавляет обработчик события для кнопки плей. click имя события без 'on' (показывает время работы плеера), function функция которой передается событие (отображает минуты и секунды), false */