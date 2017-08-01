import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { InfoVeiculo } from '../fipe/fipe.component'

@Component({
  selector: 'resultado',
  templateUrl: './infoveiculo.component.html',
  styleUrls: ['./infoveiculo.component.css']
})
export class InfoVeiculoComponent implements OnInit {


  @Input() resultado : InfoVeiculo;
  

  constructor(private router: Router) { 

    this.router = router;

    
  }



  ngOnInit() {
  }

  limpar(){
    console.log('voltar');
     window.location.reload();
  }

}
