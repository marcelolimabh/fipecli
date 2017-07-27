import { Component, OnInit } from '@angular/core';
import { FipeService } from './fipe.service';

@Component({
  selector: 'app-fipe',
  templateUrl: './fipe.component.html',
  styleUrls: ['./fipe.component.css']
})
export class FipeComponent implements OnInit {

  service: FipeService;
  idMarca = 0;
  tipoVeiculo: string = '';
  modeloSelecionado = '';
  veiculoSelecionado = '';
  tipos = [];
  veiculos: Veiculo[] = [];
  modelos: Modelo[] = [];
  marcas: Marca[] = [];
  isExibeResultado: boolean = false;
  selectedTipoVeiculo: { [key: string]: any } = {
    value: null,
    description: null
  };
  resultado: InfoVeiculo;

  constructor(service: FipeService) {
    this.service = service;

  }

  //Combo Marcas
  onChange(event) {
    //Event eh o id da maarca
    this.idMarca = event;
    this.veiculos =[];
    this.modelos =[];
    this.isExibeResultado=false;
    console.log(this.tipoVeiculo);
    console.log(this.idMarca);
    this.service.getVeiculosByTipoVeiculoAndMarca(this.tipoVeiculo, this.idMarca)
      .subscribe(veiculos => {

        if (veiculos) {
          veiculos.forEach(element => {
            this.veiculos.push(new Veiculo(element.key, element.id, element.fipe_name, element.name));
          });
        }


      })
  }


  onChangeVeiculo(event) {
    this.veiculoSelecionado = event;
    this.modelos =[];
    console.log(this.veiculoSelecionado);
    this.service.getModelosByTipoVeiculoAndMarcaAndVeiculo(this.tipoVeiculo, this.idMarca, this.veiculoSelecionado)
      .subscribe(modelos => {
        if (modelos) {
          modelos.forEach(element => {
            this.modelos.push(new Modelo(element.id, element.fipe_codigo, element.name, element.veiculo));
          });
        }
      });

  }

  onChangeModelo(event) {
    this.modeloSelecionado = event;
    this.resultado = null;
    console.log(this.modeloSelecionado);
    this.service.getVeiculoEscolhidoByTipoVeiculoAndMarcaAndVeiculoAndModelo(this.tipoVeiculo, this.idMarca, this.veiculoSelecionado, this.modeloSelecionado).
      subscribe(veiculo => {
        this.resultado = new InfoVeiculo(veiculo.id, veiculo.referencia, veiculo.fipe_codigo, 
                                          veiculo.name, veiculo.combustivel, veiculo.marca, 
                                          veiculo.ano_modelo, veiculo.preco, veiculo.key, 
                                          veiculo.time, veiculo.veiculo);
       this.isExibeResultado=true;                                   
       console.log(this.resultado);                                   
      })

  }

  ngOnInit() {

    this.tipos = [
      {
        description: 'Carros',
        value: 'carros'
      },
      {
        description: 'Motos',
        value: 'motos'
      },
      {
        description: 'Caminhões',
        value: 'caminhoes'
      },

    ];

    // select the first one
    if (this.tipos) {
      this.onSelectionChange(this.tipos[0]);
    }
  }

  onSelectionChange(tipoVeiculo) {
    // clone the object for immutability

    console.log(tipoVeiculo);
    this.marcas = [];
    this.veiculos =[];
    this.modelos =[];
    this.resultado = null;
    this.selectedTipoVeiculo = Object.assign({}, this.selectedTipoVeiculo, tipoVeiculo);
    if (tipoVeiculo) {
      this.tipoVeiculo = tipoVeiculo.value;
      this.service.obterMarcasPorTipoVeiculo(tipoVeiculo.value).subscribe(marcas => {

        if (marcas) {
          marcas.forEach(element => {
            this.marcas.push(new Marca(element.key, element.id, element.fipe_name, element.name));
            console.log(this.marcas.length)
          });
        }

      });
    }
  }
}

export class Marca {


  key: string;
  id: number;
  fipe_name: string;
  name: string;

  constructor(key: string, id: number, fipe_name: string, name: string) {
    this.key = key;
    this.id = id;
    this.fipe_name = fipe_name;
    this.name = name;
  }



}

export class Veiculo {

  key: string;
  id: string;
  fipe_name: string;
  name: string;

  constructor(key: string, id: string, fipe_name: string, name: string) {
    this.key = key;
    this.id = id;
    this.fipe_name = fipe_name;
    this.name = name;
  }


}


export class Modelo {


  fipe_codigo: string;
  name: string;
  veiculo: string;
  id: string;

  constructor(id: string, fipe_codigo: string, name: string, veiculo: string) {
    this.id = id;
    this.fipe_codigo = fipe_codigo;
    this.name = name;
    this.veiculo = veiculo;


  }


}


export class InfoVeiculo {

  //id
  id: string;
  //referencia fipe
  referencia: string;
  //codigo fipe
  fipe_codigo: string;
  //nome do veiculo
  name: string;
  //descricao do combustivel
  combustivel: string;
  //descricao da marca
  marca: string;
  //ano do modelo
  ano_modelo: string;
  //preco
  preco: string;
  //chave
  key: string;
  time: number;
  //descricao do veiculo
  veiculo: string;



  constructor(id: string, referencia: string, fipe_codigo: string, name: string,
    combustivel: string, marca: string, ano_modelo: string,
    preco: string, key: string, time: number, veiculo: string) {

    this.id = id;
    this.referencia = referencia;
    this.fipe_codigo = fipe_codigo;
    this.name = name;
    this.combustivel = combustivel;
    this.marca = marca;
    this.ano_modelo = ano_modelo;
    this.preco = preco;
    this.key = key;
    this.time = time;
    this.veiculo = veiculo;

  }



}
