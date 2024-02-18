import { Database } from "./database.js";
import { Tasks } from "./tasks.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = [
  {
    method: 'POST',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const { title, description } = req.body;

      if (!title || !description) {
        return res.writeHead(400).end('O título e a descrição devem ser preenchidos!');
      }

      const tasks = new Tasks(title, description);

      database.insert('tasks', tasks);

      res.writeHead(201).end();
    }
  },
  {
    method: 'GET',
    path: buildRoutePath('/tasks'),
    handler: (req, res) => {
      const tasks = database.select('tasks');

      res.end(JSON.stringify(tasks));
    }
  },
  {
    method: 'PUT',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;

      if (!title || !description) {
        return res.writeHead(400).end("O título e a descrição devem ser preenchidos!");
      }

      const [tasks] = database.select('tasks', { id });

      if (!tasks) {
        return res.writeHead(404).end("Task não encontrada!");
      }

      database.update('tasks', id, { title, description });
      res.end();
    }
  },
  {
    method: 'DELETE',
    path: buildRoutePath('/tasks/:id'),
    handler: (req, res) => {
      const { id } = req.params;

      const [tasks] = database.select('tasks', { id });

      if (!tasks) {
        return res.writeHead(404).end("Task não encontrada!");
      }

      database.delete('tasks', id);
      res.writeHead(204).end();
    }
  },
  {
    method: 'PATCH',
    path: buildRoutePath('/tasks/:id/complete'),
    handler: (req, res) => {
      const { id } = req.params;

      const [tasks] = database.select('tasks', { id });

      if (!tasks) {
        return res.writeHead(404).end("Tasks não encontrada!");
      } else if (tasks.completed_at) {
        return res.writeHead(400).end("Task já finalizada!");
      }

      database.completeTasks('tasks', id);
      res.end();
    }
  }
]