import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ReferentielService} from '../../referentiel.service';

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.css']
})
export class AddReferentielComponent implements OnInit {

  submitted = false;

  AllgrpeCompetences: any;
  libelle: string | any;
  presentation: string | any;
  critereDevaluation: string | any;
  critereDadmission: string | any;

  groupeCompetence: number | any;
  groupeCompetencesSelected: string | any;
  programme: File | undefined ;
  dataReferentielRecup: FormGroup | any;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private  referentielService: ReferentielService,
              private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    // this.groupeCompeteceService.getAllGropuecompetencefromdb().subscribe((data: any) => {
    //   this.AllgrpeCompetences = data;
    //   // console.log(this.AllgrpeCompetences);
    // });

    this.dataReferentielRecup = this.formbuilder.group({
      libelle: ['', [Validators.required, Validators.minLength(2)]] ,
      presentation: ['', [Validators.required]] ,
      critereDevaluation: ['', [Validators.required]] ,
      critereDadmission: ['', [Validators.required]],
      // groupeCompetencesSelected: ['', [Validators.required]],
      programme: ['', [Validators.required]]
    });

    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'id',
    //   textField: 'libelle',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };
  }

  // tslint:disable-next-line:typedef
  get Validations(): any {
    return this.dataReferentielRecup.controls;
  }
  // onItemSelect(item: any) {
  //   // console.log(item.id);
  // }
  // onSelectAll(items: any) {
  //   // console.log(items);
  // }

  uploadFile(event: any) {
    this.programme =  event.target.files[0];   // console.log(this.programme)
  }

  saveReferentiel(): any {
    this.submitted = true;
    if (this.dataReferentielRecup.invalid) {
      console.log('ERROR!');
      return;
    }

    const formValue = this.dataReferentielRecup.value ;
    // console.log(formValue);return;
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
      if (key !== 'programme' && key !== 'groupeCompetence'){
        const value =  formValue[key] ;
        formData.append(key, value) ;
      }
    }

    // for (const groupeCompetence of this.selectedItems) {
    //   this.groupeCompetencesSelected += groupeCompetence.id + ',';
    //   // console.log(this.groupeCompetencesSelected);
    // }
    // groupe Competence
    // formData.append('groupeCompetences', this.groupeCompetencesSelected);

    // programme
    // formData.append('programme',  this.programme) ;


    this.referentielService.saveReferentiel(formData).subscribe((data: any) => {
      // Swal.fire({
      //   icon: 'success',
      //   title: 'Referentiel has been saved',
      //   showConfirmButton: false,
      //   timer: 2500
      // });
      alert('Referentiel ajouté avec succes');
    }, (error: any) => {
      // Swal.fire(
      //   'Error!',
      //   'error compared to the file check that the size is not too heavy please!',
      //   'warning'
      // );
      console.log(error);
    });

  }
}
