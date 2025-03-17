// API服务文件，用于处理与后端API的交互

// Qwen API配置
const QWEN_API_URL = 'https://dashscope.aliyuncs.com/compatible-mode/v1'; // 这里使用示例URL，需要替换为实际的Qwen API地址
const QWEN_API_KEY = import.meta.env.VITE_QWEN_API_KEY || ''; // 从环境变量获取API密钥

// 发送消息到Qwen API并获取回复
export async function sendMessageToQwen(message: string): Promise<string> {
  try {
    const response = await fetch(QWEN_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${QWEN_API_KEY}`
      },
      body: JSON.stringify({
        model: 'qwen-max', // 使用的模型，根据实际情况调整
        messages: [
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 800
      })
    });

    if (!response.ok) {
      throw new Error(`API请求失败: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    if (error instanceof Error) {
      console.error('调用Qwen API出错:', error.message);
      if (error.stack) {
        console.error('错误堆栈信息:', error.stack);
      }
    } else {
      console.error('调用Qwen API出错，未知错误:', error);
    }
    throw error;
  }
}

// 获取聊天历史记录
export async function getChatHistory() {
  // 这里可以实现获取聊天历史的逻辑
  // 目前返回模拟数据
  return [
    {
      title: "今天",
      conversations: [{ id: "1", title: '"不要在字"的英文表达方式' }],
    },
    {
      title: "7天内",
      conversations: [
        { id: "2", title: "智能玩具的AI功能实现方法" },
        { id: "3", title: "Whisper-large-v3模型代码解析" },
        { id: "4", title: "You are Manus, an AI agent creat" },
        { id: "5", title: "扩散模型原理与应用详解" },
      ],
    },
    {
      title: "30天内",
      conversations: [
        { id: "6", title: "上海2025年AI发展趋势" },
        { id: "7", title: "数学运算顺序与结果计算" },
        { id: "8", title: "Solving 5+3-2*4 with Order of Op" },
        { id: "9", title: "Summarizing Dialogue for Minima" },
        { id: "10", title: "生成JSON接口文件示例" },
      ],
    },
    {
      title: "2025-01",
      conversations: [],
    },
  ];
}
