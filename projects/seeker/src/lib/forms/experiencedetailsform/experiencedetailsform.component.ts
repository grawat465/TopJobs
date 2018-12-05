import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatPaginator, MatSort, MatDialog, MatSnackBar, MatTableDataSource } from '@angular/material';
import { Experience } from '../../models/experience';
import { ConfirmdialogComponent } from '../../dialog/confirmdialog/confirmdialog.component';
import { ExperienceService } from '../../service/experience.service';
import { ActivatedRoute } from '@angular/router';
import { SeekerService } from '../../service/seeker.service';


@Component({
  selector: 'sek-experiencedetailsform',
  templateUrl: './experiencedetailsform.component.html',
  styleUrls: ['./experiencedetailsform.component.css']
})
export class ExperiencedetailsformComponent implements OnInit {
  thirdFormGroup: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  

  

  users: Array<Experience>;
  showTable: boolean;
  statusMessage: string;
  
  displayedColumnsUsers: string[] = ['Id', 'companyName', 'position', 'years', 'description', 'Change', 'Delete'];
  displayedColumnsAddUser: string[] = ['companyName', 'position', 'years', 'description', 'Save', 'Cancel'];
  dataSourceUsers: any;
  dataSourceAddUser: any;
  newUser : Experience;
  isLoaded: boolean;
  seekid:string;
  resumeid:string;
  constructor(private route:ActivatedRoute,private _formBuilder:FormBuilder, private serv:ExperienceService,
     public dialog: MatDialog, public snackBar: MatSnackBar,private seekerService:SeekerService) {
      this.users = new Array<Experience>();
  }



  ngOnInit() {
      this.loadUsers();
      this.dataSourceAddUser = new MatTableDataSource();
      this.seekid=this.route.snapshot.paramMap.get('seekid');
    //   alert(this.seekid);
      this.resumeid=this.getResumeID();
      this.serv.getUsers(this.resumeid).subscribe((data: Experience[]) => {
        alert(data);
          this.dataSourceUsers = data;});
    //    
    
  }

 

  
  getResumeID():string {
    this.seekerService.getResumeData(this.seekid).subscribe(data => {
        console.log(data);
      this.resumeid = data.resumeId;
      
    });
    alert(this.resumeid);

    return this.resumeid;
  }


  addNewUser: Experience[] = [
    { expId:0,resumeId:null, companyName: null, position: null, years: null, description: null }
];

  applyFilter(filterValue: string) {
      this.dataSourceUsers.filter = filterValue.trim().toLowerCase();

      if (this.dataSourceUsers.paginator) {
          this.dataSourceUsers.paginator.firstPage();
      }
  }

  private loadUsers() {
      this.isLoaded = true;
      this.serv.getUsers(this.resumeid).subscribe((data: Experience[]) => {
        console.log(data);
          this.users = data;
          this.users.sort(function (obj1, obj2) {
              // Descending: first id less than the previous
              return obj1.expId-obj2.expId;
          });
          this.isLoaded = true;
          this.dataSourceUsers = new MatTableDataSource(this.users);
          this.dataSourceAddUser = new MatTableDataSource(this.addNewUser);
          this.dataSourceUsers.sort = this.sort;
          this.dataSourceUsers.paginator = this.paginator;
      },
          error => {
              alert("Error: " + error.name);
              this.isLoaded = false;
          }
      );
  }
  
  deleteUserForDialog(user: Experience) {
      this.serv.deleteUser(user.expId).subscribe(data => {
          this.statusMessage = 'Details ' + user.resumeId + ' deleted',
              this.openSnackBar(this.statusMessage, "Success");
          this.loadUsers();
      })
  }
  
  editUser(user: Experience) {
      this.serv.updateUser( user).subscribe(data => {
          this.statusMessage = 'Details' + user.resumeId + ' updated',
          this.openSnackBar(this.statusMessage, "Success");
          this.loadUsers();
      },
          error => {
              this.openSnackBar(error.statusText, "Error");
          }
      );
  }
  
  saveUser(user: Experience) {
      user.resumeId=this.resumeid;
      console.log(user);
      if (user.companyName != null && user.position != null && user.companyName != "") {
          this.serv.createUser(user).subscribe(data => {
              this.statusMessage = 'Detail' + ' is added',
              this.showTable = false;
              this.openSnackBar(this.statusMessage, "Success");
              this.loadUsers();
          },
              error => {
                  this.showTable = false;
                  this.openSnackBar(error.statusText, "Error");
              }
          );
      }
      else {
          this.openSnackBar("Please enter correct data", "Error")
      }
  }
  
  show() {
      this.showTable = true;
      this.addNewUser = [{expId:0, resumeId:null, companyName: null, position: null, years:null, description: null }];
  
  }
  cancel() {
      this.showTable = false;
  }
  
  //snackBar
  openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
          duration: 3000,horizontalPosition:"right",verticalPosition:"top"
      });
  }
  
  //material dialog
  openDialog(element): void {
      const dialogRef = this.dialog.open(ConfirmdialogComponent, {
          width: '250px',
          data: element,
      });
  
      dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          if (result == "Confirm") {
              this.deleteUserForDialog(element);
          }
      });
  }
  
  //   Form field with error messages 
  name = new FormControl('', [Validators.required]);
  
  getErrorMessage() {
      return this.name.hasError('required') ? 'You must enter a value' :
          this.name.hasError('name') ? 'Not a valid name' : '';
  }
  
  years = new FormControl('', [Validators.required]);
  
  description = new FormControl('', [Validators.required]);
  surnameFormControl= new FormControl('', [Validators.required]);
  emailGetErrorMessage() {
      return this.description.hasError('required') ? 'You must enter a value': "";
      }
  
  onSubmit(newUser:Experience){
    alert("resumeid"+this.resumeid);
      this.newUser = new Experience(0,"","","","","",);
  }
}
