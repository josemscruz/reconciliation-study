import { createFileRoute } from "@tanstack/react-router";
import "../index.css";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="m-10">
      <h1 className="text-3xl">Hello. Click on the 'Accounts' tab to see all accounts.</h1>
    </div>
  );
}
