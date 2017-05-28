import $ from "jquery";
import Rx from "rxjs/Rx";

// Interval
const source$ = Rx.Observable.interval(100)
    .take(5);

source$.subscribe(
    x => console.log('Interval: ', x),
    err => {
        console.log(err);
    },
    complete => {
        console.log('Completed');
    });
