import { Component } from '@angular/core';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent {
  animals = [
    { name: 'monkey', emoji: '🐒' },
    { name: 'dog', emoji: '🐶' },
    { name: 'wolf', emoji: '🐺' },
    { name: 'cat', emoji: '🐱' },
    { name: 'tiger', emoji: '🐅' },
    { name: 'gepard', emoji: '🐆' },
    { name: 'horse', emoji: '🐎' },
    { name: 'bue', emoji: '🐂' },
    { name: 'cow', emoji: '🐄' },
    { name: 'pig', emoji: '🐷' },
    { name: 'boar', emoji: '🐗' },
    { name: 'goat', emoji: '🐏' },
    { name: 'alpaca', emoji: '🐑' },
    { name: 'goat', emoji: '🐐' },
    { name: 'camel', emoji: '🐪' },
    { name: 'elefant', emoji: '🐘' },
    { name: 'mouse', emoji: '🐭' },
    { name: 'rat', emoji: '🐀' },
    { name: 'rabbit', emoji: '🐰' },
    { name: 'bear', emoji: '🐻' },
    { name: 'koala', emoji: '🐨' },
    { name: 'panda', emoji: '🐼' },
    { name: 'cock', emoji: '🐓' },
    { name: 'chick', emoji: '🐥' },
    { name: 'penguin', emoji: '🐧' },
    { name: 'frog', emoji: '🐸' },
    { name: 'crocodile', emoji: '🐊' },
    { name: 'turtle', emoji: '🐢' },
    { name: 'snake', emoji: '🐍' },
    { name: 'dragon', emoji: '🐉' },
    { name: 'whale', emoji: '🐳' },
    { name: 'dolphin', emoji: '🐬' },
    { name: 'fish', emoji: '🐟' },
    { name: 'octopus', emoji: '🐙' },
    { name: 'shell', emoji: '🐚' },
    { name: 'snail', emoji: '🐌' },
    { name: 'caterpillar', emoji: '🐛' },
    { name: 'ant', emoji: '🐜' },
    { name: 'bee', emoji: '🐝' },
    { name: 'ladybug', emoji: '🐞' }
  ];
}
