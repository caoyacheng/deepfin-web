import { cn } from "@/lib/utils";
import { Compass } from "lucide-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      const text = titleRef.current.innerText;
      titleRef.current.innerHTML = "";

      [...text].forEach((char, index) => {
        const span = document.createElement("span");
        span.innerText = char;
        span.style.animationDelay = `${index * 40}ms`;
        span.className = "inline-block opacity-0 animate-fade-in";
        titleRef.current?.appendChild(span);
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10 -z-10" />

      <div className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-accent/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 left-[10%] w-48 h-48 rounded-full bg-blue-100/20 blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center space-y-16 pt-20">
        <div className="space-y-5 max-w-4xl">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
          >
            AI+金融的无限未来
          </h1>

          <p
            className="text-lg md:text-xl text-secondary max-w-2xl mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s", animationDuration: "0.8s" }}
          >
            DEEPFIN基于金融投融资大模型，自研底层通用AI能力，打造垂类行业智能体，帮助客户提升效率、降低成本、增强决策能力。
          </p>
        </div>

        <div
          className="opacity-0 animate-fade-up flex flex-wrap justify-center gap-8 w-full max-w-5xl"
          style={{ animationDelay: "0.5s", animationDuration: "0.8s" }}
        >
          <div 
            onClick={() => navigate('/chat')}
            className="bg-white rounded-xl shadow-lg p-8 w-80 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-3">开始对话</h3>
            <p className="text-gray-600 text-sm">免费与金融投融资大模型对话</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 w-80 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] cursor-pointer">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">AI智能体</h3>
            <p className="text-gray-600 text-sm">提供文档生成、审核垂类智能体</p>
          </div>
        </div>
        <span
          className="text-lg md:text-xl text-secondary max-w-2xl mx-auto opacity-0 animate-fade-up"
          style={{ animationDelay: "0.7s", animationDuration: "0.8s" }}
        >
          立足金融，不止于金融
        </span>
      </div>
    </section>
  );
};

export default Hero;
