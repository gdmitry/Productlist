import $ from "jquery";
import Rx from "rxjs/Rx";

// Interval
/*const source$ = Rx.Observable.interval(1000)
    .take(10)
    .map(v => v * 2);

source$.subscribe(v => console.log(v));*/

const source$ = Rx.Observable.from(['John', 'Tom', 'Shawn'])
    .map(v => v.toUpperCase())
    .map(v => 'I am ' + v);

source$.subscribe(v => console.log(v));
