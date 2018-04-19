import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ToastyService } from 'ng2-toasty';
import { ItemService } from '../item.service';

@Component({
  selector: 'ds-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  item: Item;

  constructor(private itemService: ItemService,
              private toasty: ToastyService) { }

  ngOnInit() {
  }

}
