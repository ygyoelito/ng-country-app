import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css'],
})
export class CountryInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  term: string = '';
  debouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe((value) => {
      this.onDebounce.emit(value)
    });
  }

  searchX() {
    this.onEnter.emit(this.term);
  }

  keyPress() {
    this.debouncer.next(this.term)
  }
}
