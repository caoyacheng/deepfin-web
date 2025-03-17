import { cn } from "@/lib/utils";
import {
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Paperclip,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { sendMessageToQwen, getChatHistory } from "@/services/api";

interface Conversation {
  id: string;
  title: string;
}

interface HistoryGroup {
  title: string;
  conversations: Conversation[];
}

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "我是DEEPFIN，很高兴见到你！",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // 自动滚动到最新消息
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 自动调整输入框高度
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // 清除之前的错误
    setError(null);

    // 添加用户消息
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      // 调用Qwen API获取回复
      const response = await sendMessageToQwen(inputValue.trim());
      
      // 添加AI回复消息
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("发送消息失败:", err);
      setError("发送消息失败，请稍后重试");
      
      // 添加错误消息
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "抱歉，我遇到了一些问题，无法回复您的消息。请稍后再试。",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 历史对话列表数据
  const [historyGroups, setHistoryGroups] = useState<HistoryGroup[]>([]);
  
  // 加载历史对话
  useEffect(() => {
    const loadHistory = async () => {
      try {
        const history = await getChatHistory();
        setHistoryGroups(history);
      } catch (error) {
        console.error("加载历史对话失败:", error);
      }
    };
    
    loadHistory();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 左侧边栏 */}
      <div
        className={cn(
          "bg-gray-900 text-white flex flex-col relative transition-all duration-300",
          isSidebarCollapsed ? "w-16" : "w-64"
        )}
      >
        {/* 收起/展开边栏按钮 */}
        <button
          onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
          className="absolute -right-4 top-20 bg-gray-700 text-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-600 transition-colors"
          aria-label={isSidebarCollapsed ? "展开边栏" : "收起边栏"}
          title={isSidebarCollapsed ? "展开边栏" : "收起边栏"}
        >
          {isSidebarCollapsed ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )}
        </button>
        {/* Logo */}
        <div className="p-4 border-b border-gray-800 flex justify-center">
          {isSidebarCollapsed ? (
            <span className="text-xl font-semibold">D</span>
          ) : (
            <h1 className="text-xl font-semibold">DEEPFIN</h1>
          )}
        </div>

        {/* 新对话按钮 */}
        <div className="p-4">
          <button
            className={cn(
              "flex items-center bg-blue-600 hover:bg-blue-700 text-white rounded-md w-full transition-all",
              isSidebarCollapsed ? "justify-center p-2" : "px-4 py-2 space-x-2"
            )}
            onClick={() => {
              setMessages([
                {
                  id: "welcome",
                  content: "我是DEEPFIN，很高兴见到你！",
                  isUser: false,
                  timestamp: new Date(),
                },
              ]);
            }}
          >
            <MessageSquare size={18} />
            {!isSidebarCollapsed && <span>开启新对话</span>}
          </button>
        </div>

        {/* 历史对话列表 */}
        <div className="flex-1 overflow-y-auto">
          {!isSidebarCollapsed &&
            historyGroups.map((group) => (
              <div key={group.title} className="mb-4">
                <div className="px-4 py-2 text-xs text-gray-400">
                  {group.title}
                </div>
                {group.conversations.map((convo) => (
                  <div
                    key={convo.id}
                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm truncate"
                  >
                    {convo.title}
                  </div>
                ))}
              </div>
            ))}
        </div>

        {/* 底部按钮 */}
        <div
          className={cn(
            "border-t border-gray-800",
            isSidebarCollapsed ? "p-2" : "p-4"
          )}
        >
          <button
            className={cn(
              "flex items-center bg-gray-800 hover:bg-gray-700 text-white rounded-md w-full mb-4 transition-all",
              isSidebarCollapsed ? "justify-center p-2" : "px-4 py-2 space-x-2"
            )}
          >
            {!isSidebarCollapsed && <span>下载 App</span>}
            <span className="text-xs bg-blue-600 px-1 rounded">NEW</span>
          </button>
          <button
            className={cn(
              "flex items-center text-gray-400 hover:text-white transition-all",
              isSidebarCollapsed ? "justify-center" : "space-x-2"
            )}
          >
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <span>y</span>
            </div>
            {!isSidebarCollapsed && <span>个人信息</span>}
          </button>
        </div>
      </div>

      {/* 右侧聊天区域 */}
      <div className="flex-1 flex flex-col">
        {/* 聊天消息区域 */}
        <div className="flex-1 overflow-y-auto p-4 bg-white">
          <div className="max-w-3xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "mb-6",
                  message.isUser ? "flex justify-end" : "flex"
                )}
              >
                {!message.isUser && (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">D</span>
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] p-4 rounded-lg",
                    message.isUser
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-800"
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex mb-6">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-blue-600 font-bold text-lg">D</span>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex space-x-1">
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className="text-center p-2 mb-4">
                <p className="text-red-500 text-sm">{error}</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* 底部输入区域 */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="mb-2 flex space-x-2">
              {/* <button className="flex items-center space-x-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
                <span>深度思考</span>
              </button> */}
              {/* <button className="flex items-center space-x-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm">
                <Search size={14} />
                <span>联网搜索</span>
              </button> */}
            </div>
            <div className="relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="DEEPFIN 发送消息"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 pr-12 resize-none overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={1}
                disabled={isTyping}
              />
              <div className="absolute right-3 bottom-3 flex space-x-2">
                <button className="text-gray-400 hover:text-gray-600">
                  <Paperclip size={20} />
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className={cn(
                    "rounded-full p-1",
                    inputValue.trim() && !isTyping
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-400"
                  )}
                >
                  <ArrowUp size={18} />
                </button>
              </div>
            </div>
            <div className="text-xs text-gray-400 text-center mt-2">
              内容由 AI 生成，请仔细甄别
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
