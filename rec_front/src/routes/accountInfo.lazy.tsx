import "../tw.css";
import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getAccountInfo } from "../api/accountsController";

// 'as never' was necessary to satisfy my editor so it would stop giving me errors. will look into how to fix it permanently later
export const Route = createLazyFileRoute("/accountInfo" as never)({
    component: RouteComponent,
});

function RouteComponent() {
    return <div>Hello "/accountInfo"!</div>;
}
