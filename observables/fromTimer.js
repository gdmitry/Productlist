import $ from "jquery";
import Rx from "rxjs/Rx";

// Interval
const source$ = Rx.Observable.timer(1000, 100)
    .take(5);

source$.subscribe(
    x => console.log('Timer: ', x),
    err => {
        console.log(err);
    },
    complete => {
        console.log('Completed');
    });
