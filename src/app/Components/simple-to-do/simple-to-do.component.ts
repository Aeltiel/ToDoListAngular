import { Component, Input, OnInit } from '@angular/core';
import { ToDoList } from 'src/app/core/model/liste.model';
import { toDoListService } from 'src/app/core/Service/toDoListService.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simple-to-do',
  templateUrl: './simple-to-do.component.html',
  styleUrls: ['./simple-to-do.component.scss']
})
export class SimpleToDoComponent implements OnInit {
  @Input() toDo! : ToDoList; //import mon modèle de donnée pour pouvoir l'afficher

  constructor(private todoListService : toDoListService,
              private router : Router){};

  ngOnInit(): void {
    
  }

  detail(){
    this.router.navigateByUrl(`{liste/${this.toDo.id}}`)
  }
}
