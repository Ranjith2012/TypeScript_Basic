import { values, Details} from './class1';

export function addproduct(description: string): void {
    const newTask: Details = {
      id: values.length + 1,
      description,
      completed: false,
    };
    values.push(newTask);
    console.log(`Task added: "${description}"`);
}

export function listTasks(): void {
    console.log("Your Tasks:");
    values.forEach(product => {
      console.log(`[${product.completed ? '✔' : ' '}] ${product.id}: ${product.description}`);
    });
  }