import { Observable, range, of, Subject } from "rxjs";

var mySubject: Subject<boolean> = new Subject<boolean>();

function printResult(r: boolean) {
  console.log("Subscribe: " + r.toString());
}

mySubject.subscribe(r => printResult(r));

console.log("End");
