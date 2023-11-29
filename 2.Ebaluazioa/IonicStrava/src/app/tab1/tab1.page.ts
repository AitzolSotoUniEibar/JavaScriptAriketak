import { Component } from '@angular/core';
import { KlubaService} from '../services/kluba.service';
import { Kluba } from '../classes/kluba';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  klubak: Kluba[] = [];
  constructor(private klubaService: KlubaService) {}
  kluba = {
    id: 783189,
    name: 'uni eibar',
    cover_photo_small: 'assets/img/kluba.jpg',
    sport_type: 'running',
    private: true,
    member_count: 3,
    description: 'Lanbide Heziketako Ikastetxea',
    club_type: 'company',
  };

 

  getKlubak(): void{
    this.klubaService.getKlubak()
      .subscribe(data => {this.klubak = data; },
          error => console.log('Error::' + error)); }

  ngOnInit(){
    this.getKlubak();
  }
}
