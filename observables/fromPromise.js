import $ from "jquery";
import Rx from "rxjs/Rx";

// Observables from Promises
function getUset(usename) {
    return $.ajax({
        url: 'https://api.github.com/users/' + usename,
        dataType: 'jsonp'
    }).promise();
}

const inputSource$ = Rx.Observable.fromEvent($('#user-name'));
inputSource$.subscribe(e => {
    const sourceP$ = new Rx.Observable.fromPromise(getUset('gdmitry'));
    sourceP$
        .subscribe(
        x => {
            console.log(x);
        });
});