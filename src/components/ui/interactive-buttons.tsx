'use client';

import { useState } from 'react';
import { Button } from './button';

export function InteractiveButtons() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // 异步事件处理
  const handleAsyncClick = async () => {
    try {
      // 模拟异步操作
      setMessage('加载中...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage('操作完成！');
    } catch (error) {
      setMessage('出错了！');
    }
  };

  return (
    <div className="space-y-4">
      {/* 使用 state 的事件处理 */}
      <div className="flex items-center gap-2">
        <Button onClick={() => setCount(count - 1)} variant="outline">-</Button>
        <span className="mx-2">{count}</span>
        <Button onClick={() => setCount(count + 1)} variant="outline">+</Button>
      </div>

      {/* 异步事件处理 */}
      <div className="flex items-center gap-2">
        <Button onClick={handleAsyncClick} variant="outline">
          异步操作
        </Button>
        <span>{message}</span>
      </div>

      {/* 事件对象处理 */}
      <div>
        <input
          type="text"
          className="border p-2 rounded"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="输入内容"
        />
      </div>
    </div>
  );
} 