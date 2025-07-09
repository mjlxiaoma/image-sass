import { Button } from "@/components/ui/button"
import { InteractiveButtons } from "@/components/ui/interactive-buttons"

export default function Home() {
  return (
    <div className="p-4">
      {/* 服务器组件中的静态内容 */}
      <h1 className="text-2xl font-bold mb-4">事件处理演示</h1>
      
      {/* 引入客户端交互组件 */}
      <InteractiveButtons />

      {/* 内联事件处理（不推荐在服务器组件中使用） */}
      <div className="mt-4">
        <Button variant="outline">静态按钮</Button>
      </div>
    </div>
  );
}
