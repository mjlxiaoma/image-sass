import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button variant="outline">Button</Button>
      <button style={{
        backgroundColor: "#f60", // bg-blue-500
        color: "white",
        fontWeight: "bold",
        padding: "0.5rem 1rem", // py-2 px-4
        borderRadius: "0.25rem", // rounded
        marginLeft: "0.5rem",
      }}>
        原生Button测试
      </button>
    </div>
  );
}
