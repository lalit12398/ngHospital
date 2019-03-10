import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	submitted = false;
	speciality = ['Speciality 1', 'Speciality 2', 'Speciality 3', 'Speciality 4', 'Speciality 5', 'Speciality 6'];
	doctors = ['Doctors 1', 'Doctors 2', 'Doctors 3', 'Doctors 4', 'Doctors 5', 'Doctors 6'];
	
	model :any ={
	};
	constructor() { }

	ngOnInit() {
		this.model.spec = "";
		this.model.doc = "";
	}

	onSubmit(){
		this.submitted = true;
		console.log('hello');
		console.log(this.model);
	}

}
