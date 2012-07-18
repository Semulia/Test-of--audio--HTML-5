var audio = document.getElementById('html5AudioSample1Audio1'); /*��������� ���������� ��� ������ � ������ �� ��� audio*/
var play = document.getElementById('html5AudioSample1Play'); /*��������� ���������� ��� ������ ���� � ������ �� ��� play*/
var pause = document.getElementById('html5AudioSample1Pause'); /*��������� ���������� ��� ������ ����� � ������ �� ��� pause*/
var stop = document.getElementById('html5AudioSample1Stop');

   play.addEventListener('click', function() {audio.play();}, false); /*��������� ���������� ������� ��� ������ ����. click ��� ������� ��� 'on' (��� �������), function ������� ������� ���������� ������� (��������� �����), false */

   pause.addEventListener('click', function() {audio.pause();}, false); /*��������� ���������� ������� ��� ������ ����. click ��� ������� ��� 'on' (��� �������), function ������� ������� ���������� ������� (������ �� �����), false */
   
   stop.addEventListener('click', function(){audio.pause(); audio.currentTime = 0;}, false); /*��������� ���������� ������� ��� ������ ����. click ��� ������� ��� 'on' (��� �������), function ������� ������� ���������� ������� (������ �� ����� � ����������), false */
   
   audio.addEventListener("timeupdate", function() {
      var duration = document.getElementById('html5AudioSample1Duration'); /*��������� ���������� � ������ �� ��� duraction*/
      var s = parseInt(audio.currentTime % 60); /*��������� ���������� � ������ �� ��� s. ����� ��������� �� 60, ����� �������� ������ � 0, ��������� �����*/
      var m = parseInt((audio.currentTime / 60) % 60); /*��������� ���������� � ������ �� ��� s. ����� ��������� �� 60, ����� �������� ������ � 0, ��������� �����*/
      duration.innerHTML = m + '.' + s + 'sec';}, /*����������� ���������� duraction ��������� � HTML ��������. ���������� 'm'.s'sec*/
   false); /*��������� ���������� ������� ��� ������ ����. click ��� ������� ��� 'on' (���������� ����� ������ ������), function ������� ������� ���������� ������� (���������� ������ � �������), false */