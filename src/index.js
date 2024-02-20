import './index.html';
import './index.scss';
import {quality} from "./js/const";
import qualityCard from './js/quality';
import personCard from './js/person';
import {person} from "./js/const";

quality.forEach((quality) => {
  new qualityCard(quality, '.quality').render();
})

person.forEach((person) => {
  new personCard(person, '.person').render();
})