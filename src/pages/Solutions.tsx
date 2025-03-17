
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Building2, CreditCard, GanttChart, Globe, Lock, PieChart, ShieldCheck } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

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
  "银行与金融": [
    {
      id: "risk-management",
      title: "智能风控系统",
      description: "基于深度学习的实时风险评估与欺诈检测系统，为金融机构提供全方位的风险防控。",
      icon: ShieldCheck,
      features: [
        "实时交易监控与风险评分",
        "多维度用户行为分析",
        "异常交易自动预警",
        "欺诈模式识别与预测",
        "合规风险评估"
      ],
      benefits: [
        "降低欺诈损失达60%",
        "减少误报率超过40%",
        "提高风控决策速度300%",
        "优化客户体验",
        "降低合规风险"
      ]
    },
    {
      id: "payment-solutions",
      title: "新一代支付解决方案",
      description: "整合传统支付与新兴支付技术，提供安全、高效、低成本的一站式支付服务。",
      icon: CreditCard,
      features: [
        "多渠道支付整合",
        "跨境支付优化",
        "智能路由与手续费优化",
        "实时结算",
        "支付风控"
      ],
      benefits: [
        "交易成功率提升15%",
        "支付处理成本降低30%",
        "客户转化率提高25%",
        "跨境支付时间缩短80%",
        "提升支付安全性"
      ]
    }
  ],
  "企业金融": [
    {
      id: "supply-chain-finance",
      title: "供应链金融平台",
      description: "连接核心企业、供应商与金融机构的智能供应链金融服务，解决中小企业融资难题。",
      icon: GanttChart,
      features: [
        "基于交易数据的信用评估",
        "动态额度管理",
        "多级供应商融资",
        "区块链确权与防篡改",
        "多金融机构对接"
      ],
      benefits: [
        "供应商融资成本降低25%",
        "融资放款速度提升90%",
        "供应链稳定性提高50%",
        "核心企业资金效率提升35%",
        "金融机构风险控制优化"
      ]
    },
    {
      id: "treasury-management",
      title: "企业资金管理系统",
      description: "基于AI与大数据的企业资金管理平台，优化现金流、投融资决策与财务风险管理。",
      icon: BarChart3,
      features: [
        "全球资金池管理",
        "智能现金流预测",
        "FX风险管理",
        "投融资决策支持",
        "多银行账户整合"
      ],
      benefits: [
        "资金使用效率提升40%",
        "财务成本降低20%",
        "现金流预测准确率达92%",
        "汇率风险敞口减少30%",
        "财务决策效率提高"
      ]
    }
  ],
  "跨境贸易": [
    {
      id: "cross-border-payment",
      title: "跨境支付与结算",
      description: "结合区块链与人工智能技术，提供快速、低成本、合规的全球支付与结算服务。",
      icon: Globe,
      features: [
        "多币种实时结算",
        "智能汇率优化",
        "合规性自动检查",
        "全球支付网络接入",
        "支付追踪与透明度"
      ],
      benefits: [
        "跨境支付时间从天级缩短至分钟级",
        "交易成本降低40%",
        "汇率优化节省2-3%",
        "合规风险大幅降低",
        "提升交易透明度"
      ]
    },
    {
      id: "trade-finance",
      title: "智能贸易金融",
      description: "数字化的贸易金融解决方案，通过智能合约与数据分析简化信用证、保函等贸易金融产品。",
      icon: Building2,
      features: [
        "电子信用证处理",
        "智能贸易合规检查",
        "贸易融资匹配平台",
        "供应链可视化",
        "贸易单据数字化"
      ],
      benefits: [
        "贸易融资审批时间缩短80%",
        "单据处理成本降低60%",
        "融资获取能力提升50%",
        "贸易欺诈风险降低70%",
        "提高贸易效率"
      ]
    }
  ],
  "数据安全": [
    {
      id: "financial-data-security",
      title: "金融数据安全方案",
      description: "专为金融机构设计的数据安全解决方案，保护敏感信息同时支持数据价值挖掘。",
      icon: Lock,
      features: [
        "端到端数据加密",
        "隐私计算框架",
        "多方安全计算",
        "区块链数据确权",
        "合规审计支持"
      ],
      benefits: [
        "在保护隐私的同时实现数据价值",
        "满足全球数据合规要求",
        "降低数据泄露风险99%",
        "实现安全的数据协作",
        "建立数据安全信任机制"
      ]
    },
    {
      id: "risk-analytics",
      title: "金融风险分析平台",
      description: "集成市场、信用与操作风险的综合分析平台，为机构提供全面的风险管理视图。",
      icon: PieChart,
      features: [
        "多维度风险仪表盘",
        "情景分析与压力测试",
        "风险限额管理",
        "资本充足率优化",
        "监管报告自动化"
      ],
      benefits: [
        "风险识别能力提高75%",
        "资本使用效率提升30%",
        "监管合规成本降低50%",
        "决策反应时间缩短60%",
        "全面风险控制"
      ]
    }
  ]
};

// 行业分类
const industries = [
  { id: "银行与金融", label: "银行与金融" },
  { id: "企业金融", label: "企业金融" },
  { id: "跨境贸易", label: "跨境贸易" },
  { id: "数据安全", label: "数据安全" }
];

const Solutions = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("银行与金融");
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* 解决方案头部 */}
        <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
                智能金融解决方案
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                DeepFin提供全面的金融科技解决方案，帮助企业应对数字化转型挑战，提升业务效率与客户体验
              </p>
            </div>
          </div>
        </section>
        
        {/* 解决方案内容 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue={selectedIndustry} onValueChange={setSelectedIndustry} className="w-full">
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
                <TabsContent key={industry.id} value={industry.id} className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {solutionsByIndustry[industry.id].map((solution) => (
                      <Card key={solution.id} className="hover-scale overflow-hidden">
                        <CardHeader className="pb-2 flex flex-row items-start justify-between">
                          <div>
                            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                              <solution.icon className="h-6 w-6 text-accent" />
                            </div>
                            <CardTitle className="text-xl">{solution.title}</CardTitle>
                            <CardDescription className="mt-2">
                              {solution.description}
                            </CardDescription>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-medium text-sm mb-3">核心功能</h4>
                              <ul className="space-y-2">
                                {solution.features.map((feature, index) => (
                                  <li key={index} className="text-sm flex items-start">
                                    <span className="text-accent mr-2">•</span>
                                    <span>{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-sm mb-3">业务价值</h4>
                              <ul className="space-y-2">
                                {solution.benefits.map((benefit, index) => (
                                  <li key={index} className="text-sm flex items-start">
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
                              咨询解决方案 <ArrowRight className="ml-2 h-4 w-4" />
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
