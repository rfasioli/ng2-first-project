import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste-pipe',
  templateUrl: './teste-pipe.component.html',
  styleUrls: ['./teste-pipe.component.css']
})
export class TestePipeComponent implements OnInit {

  texto: string;

  constructor() {
    this.texto = this.transform("{registry} - {name} [{vacationPeriod}]", ["123456", "Nome do individuo", "30"]);
  }

  ngOnInit() {
  }

      transform(message: string, args: string[]): string {
        return message.replace(/{registry}/g, args[0])
                      .replace(/{name}/, args[1])
                      .replace(/{vacationPeriod}/, args[2]);
    }

}
