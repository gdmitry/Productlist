import $ from "jquery";
import Rx from "rxjs/Rx";

/*const source$ = Rx.Observable.of('Hello')
    .merge(Rx.Observable.of('Everyone'));

source$.subscribe(v => console.log(v));*/

/*Rx.Observable.interval(2000)
    .merge(Rx.Observable.interval(500))
    .take(25)
    .subscribe(x => console.log(x));*/


// Merge
/*const source1$ = Rx.Observable.interval(2000)
    .map(v => 'Merge1: ' + v);


const source2$ = Rx.Observable.interval(500)
    .map(v => 'Merge2: ' + v);


Rx.Observable.merge(source1$, source2$)
    .take(25)
    .subscribe(x => console.log(x)); */


// Concat
/*const source1$ = Rx.Observable.range(0, 5)
    .map(v => 'Source1: ' + v);


const source2$ = Rx.Observable.interval(500)
    .map(v => 'Source2: ' + v);

Rx.Observable.concat(source1$, source2$)
    .subscribe(x => console.log(x));*/

// MergeMap
Rx.Observable.of('Hello')
    .mergeMap(v => {
        return Rx.Observable.of(v + ' Everyone');
    })
    .subscribe(x => console.log(x));