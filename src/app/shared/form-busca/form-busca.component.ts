import { Component } from '@angular/core';
import { FormBuscaService } from 'src/app/core/services/form-busca.service';

@Component({
  selector: 'app-form-busca',
  templateUrl: './form-busca.component.html',
  styleUrls: ['./form-busca.component.scss'],
})
export class FormBuscaComponent {
  constructor(public formBuscaService: FormBuscaService) {}

  buscar() {
    console.log(this.formBuscaService.formBusca.value);
  }

  inverterOrigemDestino() {
    const origem = this.formBuscaService.obterControle('origem').value;
    const destino = this.formBuscaService.obterControle('destino').value;

    this.formBuscaService.obterControle('origem').setValue(destino);
    this.formBuscaService.obterControle('destino').setValue(origem);
  }
}
