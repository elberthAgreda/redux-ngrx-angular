import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement } from '../../reducers/actions/counter.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {

  constructor(private store: Store<number>) { }

  increment(): void {
    this.store.dispatch( increment() );
  }

  decrement(): void {
    this.store.dispatch( decrement() );
  }

}
