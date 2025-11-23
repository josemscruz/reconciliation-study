import "./index.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { type } from "os";

interface NavigateButtonProps {
  path: string;
  text: string;
}

export function NavigateButton({ path, text }: NavigateButtonProps) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate({ to: `${path}` })} className="cursor-pointer mx-2">
      {text}
    </Button>
  );
}
