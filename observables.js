import $ from "jquery";
import Rx from "rxjs/Rx";
import _ from "lodash";

// Observables from Event
const btn = $("#btn");
const btnStream$ = Rx.Observable.fromEvent(btn, "click");

btnStream$.subscribe(() => {
    console.log('Clicked');
}, _.noop, _.noop);

// Observables from Arrays
const numbers = [33, 44, 55, 66, 77];

const numbers$ = Rx.Observable.from(numbers);
numbers$.subscribe(
    v => {
        console.log(v);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log("complete");
    });


// Observables from 
// https://www.youtube.com/watch?v=ei7FsoXKPl0