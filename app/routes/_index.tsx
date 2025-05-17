import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [{ title: "tuneboxd" }, { name: "description", content: "tuneboxd" }];
};

export default function Index() {
  return <button className="btn btn-primary">Click me</button>;
}
