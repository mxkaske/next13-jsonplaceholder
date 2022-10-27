import { Todo } from "../../../types";

async function getAllData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  return res.json() as Promise<Todo[]>;
}

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return res.json() as Promise<Todo>;
}

export async function generateStaticParams() {
  const todos = await getAllData();
  return todos.map((todo) => ({ id: `${todo.id}` }));
}

export default async function StaticTodo({
  params,
}: {
  params: { id: string };
}) {
  const data = await getData(params.id);
  return (
    <div className="grid gap-3">
      <p className="text-sm text-gray-400">Static</p>
      <h1 className="text-4xl">
        {data.title} <span className="text-gray-500">#{data.id}</span>
      </h1>
    </div>
  );
}
