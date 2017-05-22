import $ from "jquery";
import Rx from "rxjs/Rx";

// Observables from Promises
function getUser(usename) {
    return $.ajax({
        url: 'https://api.github.com/users/' + usename,
        dataType: 'jsonp'
    }).promise();
}
const inputSource$ = Rx.Observable.fromEvent($('#user-name'), 'keyup');
inputSource$.subscribe(e => {
    const sourceP$ = new Rx.Observable.fromPromise(getUser(e.target.value))
    // .map(user => user.data)
    .pluck('data');

    sourceP$
        .subscribe(x => {
            console.log(x);
        });
});