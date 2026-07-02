import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
  count=0
  inc(){
    this.count++;

  }
  dec()
  {
    this.count--;

  }
  reset()
  {
    this.count=0;
    
  }
}
