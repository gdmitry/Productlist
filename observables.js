import $ from "jquery";
import Rx from "rxjs/Rx";

const btn = $("#btn");

const btnStream$ = Rx.Observable.fromEvent(btn, "click");

btnStream$.subscribe(function() {
    
});


// https://www.youtube.com/watch?v=ei7FsoXKPl0