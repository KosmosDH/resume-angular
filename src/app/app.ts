import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly name: string = "Николай";
  protected readonly age: number = 17;

  protected readonly hasExperience: boolean = false;

  protected readonly skills: string[] = [
    "JavaScript",
    "TypeScript", 
    "Angular",
    "HTML5",
    "CSS3",
    "Git",
    "Алгоритмы и математика",
    "Английский язык B1"
  ];

}