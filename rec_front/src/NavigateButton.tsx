import "./index.css";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

interface GenericButtonProps {
  path: string;
  text: string;
}

export default function CreateButton({ path, text }: GenericButtonProps) {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate({ to: `${path}` })} className="cursor-pointer">
      {text}
    </Button>
  );
}
