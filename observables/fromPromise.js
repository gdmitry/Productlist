import $ from "jquery";
import Rx from "rxjs/Rx";

// Observables from Promises
function getUser(usename) {
    return $.ajax({
        url: 'https://api.github.com/users/' + usename,
        dataType: 'jsonp'
    }).promise();
}
const source$ = Rx.Observable.fromEvent($('#user-name'), 'keyup')
    .map(e => e.target.value)
    .map(getUser)
    .switchMap(Rx.Observable.fromPromise);

source$.subscribe(x => {
    console.log(x);
});