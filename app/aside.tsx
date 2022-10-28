"use client";

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";
import { Todo } from "../types";

const routes = ["server", "client", "static"];

export default function Aside({ data }: { data: Todo[] }) {
  const selectedLayoutSegments = useSelectedLayoutSegments();
  return (
    <div className="grid gap-1">
      {data.map((todo) => {
        const currentRoute = selectedLayoutSegments?.[0];
        const currentId = selectedLayoutSegments?.[1];
        return (
          <div
            key={todo.id}
            className="flex justify-between border-b pb-1 text-sm"
          >
            <p>
              <span className="text-gray-500">#{todo.id}</span> {todo.title}
            </p>
            <p className="flex gap-1">
              {routes.map((route) => {
                const active =
                  route === currentRoute && todo.id === Number(currentId);
                return (
                  <Link
                    key={route}
                    href={`/${route}/${todo.id}`}
                    prefetch={false}
                    className={
                      active
                        ? "text-black font-bold underline"
                        : "text-gray-700 underline"
                    }
                  >
                    {route}
                  </Link>
                );
              })}
            </p>
          </div>
        );
      })}
    </div>
  );
}
