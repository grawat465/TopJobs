import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


import { MatPaginator, MatSort, MatDialog, MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { AddComponent } from '../../dialog/add/add.component';
import { EditComponent } from '../../dialog/edit/edit.component';
import { DeleteComponent } from '../../dialog/delete/delete.component';
import { fromEvent, BehaviorSubject, Observable, merge } from 'rxjs';
import { Education } from '../../models/education';
import { DataSource } from '@angular/cdk/table';
import { map, startWith } from 'rxjs/operators';
import { EducationService } from '../../service/education.service';
import { HttpClient } from '@angular/common/http';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
@Component({
  selector: 'sek-educationdetailsform',
  templateUrl: './educationdetailsform.component.html',
  styleUrls: ['./educationdetailsform.component.css']
})
export class EducationdetailsformComponent implements OnInit {
  secondFormGroup: FormGroup;

  displayedColumns = ['id', 'level', 'board', 'instituteName', 'marks', 'started_at', 'ended_at', 'actions'];
  exampleDatabase: EducationService| null;
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;
 
  

// Chip control

visible = true;
selectable = true;
removable = true;
addOnBlur = true;
separatorKeysCodes: number[] = [ENTER, COMMA];
skillCtrl = new FormControl();
filteredSkills: Observable<string[]>;
skills: string[] = ['Lemon'];
allSkills: string[] = ['A', 'B', 'C', 'D', 'E'];

@ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
@ViewChild('auto') matAutocomplete: MatAutocomplete;



  constructor(private _formBuilder: FormBuilder,public dialog: MatDialog,
    public dataService: EducationService, private httpClient : HttpClient) { 


      this.filteredSkills = this.skillCtrl.valueChanges.pipe(
        startWith(null),
        map((skill: string | null) => skill ? this._filter(skill) : this.allSkills.slice()));
    }

  ngOnInit() {
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }



  ////education crud table///////
  refresh() {
    this.loadData();

  }

  addNew(issue: Education) {
    const dialogRef = this.dialog.open(AddComponent, {
      data: {issue: issue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
      }
    });
  }
  startEdit(i: number, id: number, level: string, board: string,
    instituteName: string, marks: string, started_at: string, ended_at: string) {
    this.id = id;
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditComponent, {
      data: {id: id, level: level, board: board, instituteName: instituteName, marks: marks, started_at: started_at, ended_at: ended_at}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }

  deleteItem(i: number, id: number, level: string, board: string,
    instituteName: string, marks: string, started_at: string, ended_at: string) {
    this.index = i;
    this.id = id;
    const dialogRef = this.dialog.open(DeleteComponent, {
      data: {id: id, level: level, board: board, instituteName: instituteName, marks: marks, started_at: started_at, ended_at: ended_at}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.id === this.id);
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }


  private refreshTable() {
    this.paginator._changePageSize(this.paginator.pageSize);
}


public loadData() {
  this.exampleDatabase = new EducationService(this.httpClient);
    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);
    fromEvent(this.filter.nativeElement, 'keyup')
      // .debounceTime(150)
      // .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });

}

//////chip control /////////////////

add(event: MatChipInputEvent): void {
  // Add fruit only when MatAutocomplete is not open
  // To make sure this does not conflict with OptionSelected Event
  if (!this.matAutocomplete.isOpen) {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.skills.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.skillCtrl.setValue(null);
  }
}

remove(skill: string): void {
  const index = this.skills.indexOf(skill);

  if (index >= 0) {
    this.skills.splice(index, 1);
  }
}

selected(event: MatAutocompleteSelectedEvent): void {
  this.skills.push(event.option.viewValue);
  this.fruitInput.nativeElement.value = '';
  this.skillCtrl.setValue(null);
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.allSkills.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
}

//////////////////////////////////////////////////////////
}










export class ExampleDataSource extends DataSource<Education> {
  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Education[] = [];
  renderedData: Education[] = [];

  constructor(public _exampleDatabase: EducationService, public _paginator: MatPaginator,
    public _sort: MatSort) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Education[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAllData();


    return merge(...displayDataChanges).pipe(map( () => {
        // Filter data
        this.filteredData = this._exampleDatabase.data.slice().filter((education: Education) => {
          const searchStr = (education.id + education.level + education.marks ).toLowerCase();
          return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
        });

        // Sort filtered data
        const sortedData = this.sortData(this.filteredData.slice());

        // Grab the page's slice of the filtered sorted data.
        const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
        this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
        return this.renderedData;
      }
    ));
  }

  disconnect() {}


  /** Returns a sorted copy of the database data. */
  sortData(data: Education[]): Education[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
       }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });

  }



}
