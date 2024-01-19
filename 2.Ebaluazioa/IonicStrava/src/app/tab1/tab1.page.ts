import { Component, OnInit } from '@angular/core';
import { KlubaService} from '../services/kluba.service';
import { Kluba } from '../classes/kluba';
import { ApiService} from '../services/api.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  klubak: Kluba[] = [];
  showLoader=true;
  errorMessage= '';

  constructor(private apiService: ApiService,private navCtrl: NavController) {}
  
  getKlubak(): void{
    this.apiService.dbState().subscribe((res) => {
      if(res){
        this.apiService.fetchKlubak().subscribe(
          data => {this.klubak = data;
          this.showLoader=false;}
        )
      }
    });
  }

  deleteKluba(id: any): void{
    try {
      this.apiService.deleteKluba(id);
      //Hasierako orrira bueltatu
      this.navCtrl.navigateForward('tabs/tab1');
    } catch (error) {
      this.errorMessage = error as any;
    }
  }
  
  ngOnInit(){
    this.getKlubak();
  }
}
 