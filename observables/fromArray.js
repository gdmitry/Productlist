import Rx from "rxjs/Rx";

// Observables from Arrays (the same for map, set)
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
