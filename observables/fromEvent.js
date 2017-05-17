import $ from "jquery";
import Rx from "rxjs/Rx";
import _ from "lodash";

// Observables from Event
const btn = $("#btn");
const btnStream$ = Rx.Observable.fromEvent(btn, "click");

btnStream$.subscribe(() => {
    console.log('Clicked');
}, _.noop, _.noop);