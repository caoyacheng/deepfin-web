import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  BarChart3,
  CreditCard,
  GanttChart,
  Lock,
  PieChart,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

// 定义解决方案类型
interface Solution {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  benefits: string[];
}

// 按行业分类的解决方案数据
const solutionsByIndustry: Record<string, Solution[]> = {
  银行与保险: [
    {
      id: "risk-management",
      title: "智能报告生成",
      description:
        "基于大语言大模型的文档生成能力，面向具体客户业务场景，提供针对性的报告生成。",
      icon: ShieldCheck,
      features: [
        "报告一键生成",
        "灵活的模版配置",
        "支持模版修改",
        "生成内容随时可编辑",
        "支持下载和分享",
      ],
      benefits: [
        "报告生成效率提升5倍",
        "报告质量大幅提升",
        "报告准确度提升",
        "降低人工处理",
        "降低人工成本",
      ],
    },
    {
      id: "payment-solutions",
      title: "保险营销话术智能生成",
      description:
        "通过大模型自动分析保险产品特点，针对性生成营销策略和话术，提升产品营销成功率",
      icon: CreditCard,
      features: [
        "产品智能理解与分析",
        "营销话术智能生成",
        "Q&A 互动",
        "结合移动大数据标签",
        "多维度分析与优化",
      ],
      benefits: [
        "营销成功率提升50%",
        "营销话术生成效率提升5倍",
        "客户满意度提升",
        "人工成本降低",
        "用户画像更加精准",
      ],
    },
  ],
  政府公共: [
    {
      id: "supply-chain-finance",
      title: "税务助手",
      description:
        "基于AI技术的税务助手，为税务部门提供智能分析与决策支持，提升税务效率。",
      icon: GanttChart,
      features: [
        "基于税务数据的精准分析",
        "智能税务风险预警",
        "个性化税务筹划建议",
        "税务申报自动化处理",
        "多渠道税务政策解读",
      ],
      benefits: [
        "税务申报错误率降低50%",
        "税务处理效率提升80%",
        "税务合规风险降低70%",
        "企业税务成本降低30%",
        "税务政策响应速度加快",
      ],
    },
    {
      id: "treasury-management",
      title: "财务审核",
      description:
        "基于大模型文本抽取和审核能力，自动进行差旅、业务招待、ICT项目、合同等智能审核",
      icon: BarChart3,
      features: [
        "文本抽取自动化",
        "多类型审核覆盖",
        "审核规则灵活配置",
        "审核结果实时反馈",
        "审核记录可追溯",
      ],
      benefits: [
        "审核效率提升50%",
        "降低漏审风险80%",
        "减少人工调整成本30%",
        "问题处理时间缩短60%",
        "审计合规性提高90%",
      ],
    },
  ],
  大模型工具: [
    {
      id: "financial-data-security",
      title: "微调数据自动配比工具",
      description:
        "专为大模型微调数据配比开发，解决大模型微调数据配比难题，提高模型效果。",
      icon: Lock,
      features: ["自动数据配比", "无需人工干预", "最优微调效果", "可视化展示"],
      benefits: [
        "数据配比精准",
        "降低人工成本50%",
        "微调效率提升100%",
        "模型效果大幅提升",
      ],
    },
    {
      id: "risk-analytics",
      title: "智能体和知识库构建平台",
      description: "通过大模型技术，为企业构建智能体和知识库，提升决策效率。",
      icon: PieChart,
      features: ["本地知识库", "可视化智能体构建", "多模型集成", "多工具集成"],
      benefits: [
        "智能体构建效率提升50%",
        "本地知识库轻松创建",
        "业务开发效率提升20%",
        "交付效率提升50%",
      ],
    },
  ],
};

// 行业分类
const industries = [
  { id: "银行与保险", label: "银行与保险" },
  { id: "政府公共", label: "政府公共" },
  { id: "大模型工具", label: "大模型工具" },
];

const Solutions = () => {
  const [selectedIndustry, setSelectedIndustry] =
    useState<string>("银行与保险");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* 解决方案头部 */}
        <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
                人工智能行业解决方案
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                DeepFin提供全面的垂直行业大模型解决方案，帮助企业应对数字化转型挑战，提升业务效率与客户体验
              </p>
            </div>
          </div>
        </section>

        {/* 解决方案内容 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs
              defaultValue={selectedIndustry}
              onValueChange={setSelectedIndustry}
              className="w-full"
            >
              <div className="flex justify-center mb-12">
                <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
                  {industries.map((industry) => (
                    <TabsTrigger
                      key={industry.id}
                      value={industry.id}
                      className="rounded-full data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                    >
                      {industry.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {industries.map((industry) => (
                <TabsContent
                  key={industry.id}
                  value={industry.id}
                  className="space-y-12"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {solutionsByIndustry[industry.id].map((solution) => (
                      <Card
                        key={solution.id}
                        className="hover-scale overflow-hidden"
                      >
                        <CardHeader className="pb-2 flex flex-row items-start justify-between">
                          <div>
                            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                              <solution.icon className="h-6 w-6 text-accent" />
                            </div>
                            <CardTitle className="text-xl">
                              {solution.title}
                            </CardTitle>
                            <CardDescription className="mt-2">
                              {solution.description}
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-sm mb-3">
                                核心功能
                              </h4>
                              <ul className="space-y-2">
                                {solution.features.map((feature, index) => (
                                  <li
                                    key={index}
                                    className="text-sm flex items-start"
                                  >
                                    <span className="text-accent mr-2">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-sm mb-3">
                                业务价值
                              </h4>
                              <ul className="space-y-2">
                                {solution.benefits.map((benefit, index) => (
                                  <li
                                    key={index}
                                    className="text-sm flex items-start"
                                  >
                                    <span className="text-accent mr-2">•</span>
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Link to="/contact" className="w-full">
                            <Button variant="outline" className="w-full">
                              咨询解决方案{" "}
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* 解决方案咨询 */}
        <section className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-6">
                需要定制解决方案？
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                我们的专业团队可以根据您的业务需求提供量身定制的解决方案，帮助您应对特定的业务挑战
              </p>
              <Link to="/contact">
                <Button size="lg" className="mx-auto">
                  联系我们的专家团队
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
