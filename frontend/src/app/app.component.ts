import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as countActions from './reducers/actions/counter.actions';
import * as fromStore from './reducers/contador.reducer';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  count$: Observable<number>;

  constructor( private store: Store<number> ) {
    this.count$ = this.store.select('count');
  }

  increment(): void {
    this.store.dispatch( countActions.increment() );
  }

  decrement(): void {
    this.store.dispatch( countActions.decrement() );
  }

  multiply( num: number ): void {
    this.store.dispatch( countActions.multiply({count: num}) );
  }

  divide( num: number ): void {
    this.store.dispatch( countActions.divide({count: num}) );
  }

  reset(): void {
    this.store.dispatch( countActions.reset() );
  }

}
