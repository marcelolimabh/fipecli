import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';



@Injectable()
export class FipeService {
  http: Http;
  url: string = 'http://fipeapi.appspot.com/api/1/';

  constructor(http: Http) {

    this.http = http;
  }


  obterMarcasPorTipoVeiculo(tipoVeiculo: string) {
    return this.http.get(this.url + tipoVeiculo + '/marcas.json').map(res => res.json());

  }

  getVeiculosByTipoVeiculoAndMarca(tipoVeiculo: string, idMarca: number) {
    return this.http.get(this.url + tipoVeiculo + '/veiculos/' + idMarca + '.json').map(res => res.json());
  }

  getModelosByTipoVeiculoAndMarcaAndVeiculo(tipoVeiculo: string, idMarca: number, idVeiculo: string) {
    return this.http.get(this.url + tipoVeiculo + '/veiculo/' + idMarca + '/' + idVeiculo + '.json').map(res => res.json());
  }

  getVeiculoEscolhidoByTipoVeiculoAndMarcaAndVeiculoAndModelo(tipoVeiculo: string, idMarca: number, idVeiculo: string, idModelo: string) {
    return this.http.get(this.url + tipoVeiculo + '/veiculo/' + idMarca + '/' + idVeiculo + '/' + idModelo + '.json').map(res => res.json());

  }

}


