# [OVERPICK.GG](https://speedewow.github.io/pomodoro-react/)

### О проекте:

Реализация автроского (моего) алгоритма по анализу пиков в игре Dota 2. Приложение имеет схожий интрефейс с интерфейсом в самой игре, с небольшими доработками. Алгоритм анализа строится исключительно на видимости меты и силы персонажей самого автора. Прект создан в первую очередь для реализации полученных знаний и опыта в технологиях, которые в нем применяются. Пользовательский интерфейс написан на React. Типизирован при помощи TypeScript. Менеджером состояния выступил Redux. За стилизацию отвечает SASS. При использовании приложения, стоит помнить, что, кроме статистики, существуюет еще и человеческий фактор. Советую конечно полагаться на алгоритм анализа пиков, но и не о собственном мнении и своей видимости. GL HF!

#

### Краткий GuidLine:

Для того что-бы пикнуть героя необходимо на него навести мышь, появится выделение, нажмите на него и он сразу попадет в ваш пик

![image](https://user-images.githubusercontent.com/96829326/202210471-e5a3bcde-4d82-4a48-9a1e-e04e53c578b2.png)

Если вы ошиблись или передумали на счет выбора данного персонажа, нажмите на его иконку в самом пике

![image](https://user-images.githubusercontent.com/96829326/202213601-a88830fd-65cf-4427-a09d-8a3797adee48.png)

Если не можете кого-то сразу найти, воспользуйтесь поиском, система подскажет вам, где персонаж находится

![image](https://user-images.githubusercontent.com/96829326/202210802-493e9c65-c809-4db3-bfc7-6d7e4cafff25.png)

После успешного выбора все персонажей, кнопка "Старт" станет активной, нажмите на нее.

![image](https://user-images.githubusercontent.com/96829326/202210948-0118fb84-9b04-42b6-8418-f3fb514c7afb.png)

После старта, вы сможете увидеть ваш пик, краткий анализ, и шансы на победу того или иного пика. Для составления нового пика, необходимо нажать на кнопку "Новый пик"

![image](https://user-images.githubusercontent.com/96829326/202850523-98e87980-b7d2-44cd-8d3d-55aa3a42a5cc.png)

#

### Что необходимо сделать в дальнейшем?:

- В первую очередь дописать, улучшить и протестировать существующий алгоритм.
- Реализовать адаптивный дизайн, и переделать верстку, для поддержки приложения на различных устройствах.
- Добавить тесты, например, Jest или React Testing Library
- Перенести алгоритм, и соответствующий расчет вероятности на Бэк, тем самым разгрузить нагрузку на страницу.
- Добавить новые возможности, например, создание личного кабинета, добавление выбранного пика в избранное, идей много, нужно только время :)

#

### Применялись следующие технологии:

<br>
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" title="SASS" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/webpack/webpack-original.svg" title="Webpack" alt="Webpack" width="40" height="40"/>&nbsp;
  
#

### Посмотреть локально:

#### Введите следующие команды в терминале:

#### Node:

1. npm install
2. npm start

#### Docker:

1. docker build -t i_overpick.gg .
2. docker run -p 8080:8080 --rm --name overpick.gg i_overpick.gg

#

### Посмотреть на GHpages:

https://speedewow.github.io/pomodoro-react/
