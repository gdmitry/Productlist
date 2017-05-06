import $ from "jquery";
import Rx from "rxjs/Rx";
import _ from "lodash";

// Observables from Event
const btn = $("#btn");
const btnStream$ = Rx.Observable.fromEvent(btn, "click");

btnStream$.subscribe(() => {
    console.log('Clicked');
}, _.noop, _.noop);

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


// Create an observable from scratch
const source$ = new Rx.Observable(observer => {
    console.log('Creating an observable');
    observer.next('First value');

    observer.error(new Error('Something went wrong'));
    setTimeout(() => {
        observer.next('Another value');
        observer.complete();
    }, 3000);
});

source$
    .catch(err => Rx.Observable.of(err)) // need to call complete callback after error
    .subscribe(
    x => {
        console.log(x);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log(complete);
    });

// Observables from Promises

function getUset(usename) {
    return $.ajax({
        url: 'https://api.github.com/users/' + usename,
        dataType: 'jsonp'
    }).promise();
}


const sourceP$ = new Rx.Observable.fromPromise(getUset('gdmitry'));

const inputSource$ = Rx.Observable.fromEvent($('#input'));

sourceP$
    .subscribe(
    x => {
        console.log(x);
    });

// https://www.youtube.com/watch?v=ei7FsoXKPl0