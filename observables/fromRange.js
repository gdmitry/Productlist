import $ from "jquery";
import Rx from "rxjs/Rx";

// Range
const source$ = Rx.Observable.range(25, 100);

source$.subscribe(
    x => console.log('Range: ', x),
    err => {
        console.log(err);
    },
    complete => {
        console.log('Completed');
    });
