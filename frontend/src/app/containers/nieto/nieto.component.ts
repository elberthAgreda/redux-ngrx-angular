import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from '../../reducers/actions/counter.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent {

  constructor(private store: Store<number>) { }

  increment(): void {
    this.store.dispatch( increment() );
  }

  decrement(): void {
    this.store.dispatch( decrement() );
  }

}
