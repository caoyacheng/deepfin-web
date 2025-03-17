import { cn } from "@/lib/utils";
import { Brain, FileCheck, FileText, GitBranch, Megaphone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FeatureCard from "./FeatureCard";

const ProductSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !sectionVisible) {
            setSectionVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [sectionVisible]);

  return (
    <section
      id="产品"
      className="relative py-20 overflow-hidden bg-white"
      ref={sectionRef}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute -left-20 top-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -right-20 bottom-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl" />

      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <div
            className={cn(
              "inline-block transition-all duration-500",
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            <span className="px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
              创新产品
            </span>
          </div>

          <h2
            className={cn(
              "text-3xl md:text-4xl font-display font-bold transition-all duration-500 delay-100",
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            全球领先的人工智能产品和解决方案
          </h2>

          <p
            className={cn(
              "text-secondary max-w-2xl mx-auto transition-all duration-500 delay-200",
              sectionVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            )}
          >
            我们的AI驱动产品为行业带来革命性变革，提供高效、准确的智能工具
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {/* 第一行：文档智能生成助手、文档审核助手和营销助手 */}
          <FeatureCard
            title="文档智能生成助手"
            description="自动生成合规的金融文档，降低人工成本，提高效率，确保准确性和专业性。"
            icon={FileText}
            delay={100}
          />

          <FeatureCard
            title="文档审核助手"
            description="智能识别文档中的风险点和不合规内容，确保文档符合监管要求，减少合规风险。"
            icon={FileCheck}
            delay={200}
          />

          <FeatureCard
            title="营销助手"
            description="结合自有核心数据，基于客户画像和市场趋势，生成个性化营销内容，提高转化率和客户满意度。"
            icon={Megaphone}
            delay={300}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* 第二行：金融行业大模型和大模型工具链 */}
          <FeatureCard
            title="金融投融资大模型"
            description="专为金融机构定制的行业大模型，深度理解金融知识，提供精准分析和预测，帮助决策者把握市场脉搏。"
            icon={Brain}
            delay={400}
          />

          <FeatureCard
            title="大模型工具链"
            description="完整的大模型应用工具链，帮助客户快速构建和部署AI应用，实现业务创新。"
            icon={GitBranch}
            delay={500}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
