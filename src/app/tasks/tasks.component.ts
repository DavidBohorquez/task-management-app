import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service'

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgFor, NgIf, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  // imports: [TaskComponent]
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;
  //private tasksService: TasksService;

  constructor(private tasksService: TasksService) {
    //this.tasksService = tasksService;
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  get isAddingNewTask() {
    return this.isAddingTask
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id)
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
