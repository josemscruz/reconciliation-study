import "./index.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

interface CreateButtonProps {
  name: string;
}

export default function CreateButton({ name }: CreateButtonProps) {
  const onClickRoute: string = "/create" + name;
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate({ to: `${onClickRoute}` })} className="cursor-pointer">
      Create Account
    </Button>
  );
}
