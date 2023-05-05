import { Component } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent {
  fruits = [
    { name: 'grapes', emoji: '🍇' },
    { name: 'melon', emoji: '🍈' },
    { name: 'watermelon', emoji: '🍉' },
    { name: 'orange', emoji: '🍊' },
    { name: 'lemon', emoji: '🍋' },
    { name: 'banana', emoji: '🍌' },
    { name: 'ananas', emoji: '🍍' },
    { name: 'apple', emoji: '🍎' },
    { name: 'green apple', emoji: '🍏' },
    { name: 'pear', emoji: '🍐' },
    { name: 'peach', emoji: '🍑' },
    { name: 'cherries', emoji: '🍒' },
  ]

}
