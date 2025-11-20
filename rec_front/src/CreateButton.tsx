import "./tw.css";
import { Link } from "@tanstack/react-router";

interface CreateButtonProps {
  name: string;
}

export default function CreateButton({ name }: CreateButtonProps) {
  const onClickRoute: string = "/create" + name;
  return (
    <Link
      to={`/new${name}Form`}
      className="inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
    >
      Create {name}
    </Link>
  );
}
