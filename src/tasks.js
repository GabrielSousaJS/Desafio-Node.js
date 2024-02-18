import { randomUUID } from 'node:crypto';

export class Tasks {
  id;
  title;
  description;
  completed_at;
  created_at;
  updated_at;

  constructor(title, description) {
    this.id = randomUUID();
    this.title = title;
    this.description = description;
    this.completed_at = null;
    this.created_at = new Date().toLocaleString();
    this.updated_at = new Date().toLocaleString();
  }

  toString() {
    return (`Id: ${this.id} \n
    title: ${this.title} \n
    description: ${this.description} \n
    completed_at: ${this.completed_at} \n
    created_at: ${this.created_at} \n
    updated_at: ${this.updated_at}`)
  }
}