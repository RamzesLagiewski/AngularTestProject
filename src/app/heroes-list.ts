import { Hero } from './hero';

export const HEROES: Hero[]= [

    { id: 1, name: 'Geralt z Rivii', class: 'Wiedźmin', img: 'assets/img/Geralt.jpg'},
    { id: 2, name: 'Jaskier wicehrabia de Lettenhove', class: 'bard', img: 'assets/img/Jaskier.jpg'},
    { id: 3, name: 'Zoltan Chivay', class: 'Weteran', img: 'assets/img/Zoltan.jpg'},
    { id: 4, name: 'Yennefer z Vengerbergu', class: 'Czarodziejka', img: 'assets/img/Yennefer.jpg'},
    { id: 5, name: 'Triss Merigold', class: 'Czarodziejka', img: 'assets/img/Triss.jpg'},
    { id: 6, name: 'Cirilla Fiona Elen Riannon', class: 'Wiedźminka', img: 'assets/img/Cirilla.jpg'},

];
/*
<h2>Detale:</h2>
<div><span>Id:</span>{{hero.id}}</div>
<div><span>Imię:</span> {{hero.name}}</div>
<div><span>Zawód:</span>{{hero.class}}</div>
<div><span></span><img src={{hero.img}} height="500px" width="500px"></div>
*/