import { createFileRoute } from "@tanstack/react-router";
import "../tw.css";

// 'as never' was necessary to satisfy my editor so it would stop giving me errors. will look into how to fix it permanently later
export const Route = createFileRoute("/home" as never)({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <div className="m-10">
                <h1 className="text-3xl">
                    Hello. Click on the 'accounts' tab to see all accounts.
                </h1>
            </div>
        </>
    );
}
