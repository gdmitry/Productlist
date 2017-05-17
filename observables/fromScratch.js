import Rx from "rxjs/Rx";

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
    .subscribe(x => {
        console.log(x);
    },
    err => {
        console.log(err);
    },
    complete => {
        console.log(complete);
    });