
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, Star, Building, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type CustomerStory = {
  id: number;
  name: string;
  company: string;
  position: string;
  category: string;
  logo: string;
  testimonial: string;
  challenge: string;
  solution: string;
  result: string;
  rating: number;
  industry: string;
};

// 客户案例数据
const customerStoriesData: CustomerStory[] = [
  {
    id: 1,
    name: "张伟",
    company: "金融科技有限公司",
    position: "首席技术官",
    category: "金融科技",
    logo: "/lovable-uploads/0bc90c42-9bb0-4ae5-a955-1714ac9404cb.png",
    testimonial: "DeepFin的AI解决方案帮助我们降低了40%的运营成本，同时提高了客户满意度。他们的团队非常专业，从需求分析到实施部署，全程提供了优质的支持。",
    challenge: "我们面临的最大挑战是如何在保证安全性的同时，提高金融交易的处理速度和准确性。",
    solution: "DeepFin为我们定制了一套智能风控系统，利用深度学习算法实时分析交易数据，精准识别异常行为。",
    result: "实施DeepFin的解决方案后，我们的交易处理速度提高了60%，风险检测准确率达到99.7%，客户满意度提升了35%。",
    rating: 5,
    industry: "金融服务"
  },
  {
    id: 2,
    name: "李梅",
    company: "国际贸易集团",
    position: "首席执行官",
    category: "国际贸易",
    logo: "/lovable-uploads/0bc90c42-9bb0-4ae5-a955-1714ac9404cb.png",
    testimonial: "DeepFin的跨境支付解决方案彻底改变了我们的国际业务流程，过去需要3-5天的跨境交易现在只需几分钟就能完成。",
    challenge: "国际贸易中的跨境支付流程复杂，周期长，成本高，严重影响了我们的资金周转效率。",
    solution: "DeepFin为我们提供了基于区块链的跨境支付平台，结合AI技术优化汇率和手续费，大大简化了支付流程。",
    result: "交易时间从平均4天缩短至15分钟，节省了30%的手续费，业务量在六个月内增长了45%。",
    rating: 5,
    industry: "国际贸易"
  },
  {
    id: 3,
    name: "王强",
    company: "零售连锁企业",
    position: "运营总监",
    category: "零售",
    logo: "/lovable-uploads/0bc90c42-9bb0-4ae5-a955-1714ac9404cb.png",
    testimonial: "DeepFin的智能供应链金融解决方案让我们的小微供应商也能享受到优质的金融服务，极大地提升了整个供应链的健康度。",
    challenge: "我们有大量的小微供应商难以获得传统银行融资，导致供应链不稳定，影响了我们的正常经营。",
    solution: "DeepFin基于我们的交易数据，开发了供应链金融平台，为小微供应商提供精准的信用评估和快速融资服务。",
    result: "供应商融资成本下降25%，供应链稳定性提高50%，供应商满意度达到历史新高。",
    rating: 4,
    industry: "零售"
  },
  {
    id: 4,
    name: "陈明",
    company: "医疗健康集团",
    position: "信息总监",
    category: "医疗健康",
    logo: "/lovable-uploads/0bc90c42-9bb0-4ae5-a955-1714ac9404cb.png",
    testimonial: "DeepFin的医疗AI支付系统不仅简化了我们的收费流程，还通过智能化的保险理赔服务大大减轻了患者的负担。",
    challenge: "医疗收费和保险理赔流程繁琐，既消耗医院资源，也增加了患者的负担。",
    solution: "DeepFin开发了智能医疗支付系统，结合OCR和NLP技术自动处理医疗单据，实现了与保险公司的无缝对接。",
    result: "收费处理时间减少70%，保险理赔速度提高80%，患者满意度提升55%。",
    rating: 5,
    industry: "医疗健康"
  },
  {
    id: 5,
    name: "林小红",
    company: "教育科技公司",
    position: "财务总监",
    category: "教育科技",
    logo: "/lovable-uploads/0bc90c42-9bb0-4ae5-a955-1714ac9404cb.png",
    testimonial: "作为一家快速成长的教育科技公司，DeepFin的金融云服务让我们能够灵活应对各种财务挑战，支持我们的业务扩张。",
    challenge: "业务快速扩张带来的财务管理复杂性增加，传统财务系统难以适应多元化业务模式。",
    solution: "DeepFin提供了可扩展的金融云服务，包括智能会计、预算管理和现金流预测，支持多币种、多实体的复杂业务场景。",
    result: "财务处理效率提高65%，错误率下降90%，帮助企业成功完成B轮融资。",
    rating: 4,
    industry: "教育"
  },
  {
    id: 6,
    name: "赵建国",
    company: "能源科技有限公司",
    position: "战略发展总监",
    category: "能源科技",
    logo: "/lovable-uploads/0bc90c42-9bb0-4ae5-a955-1714ac9404cb.png",
    testimonial: "DeepFin的绿色金融解决方案帮助我们更好地管理ESG相关投资和融资，为公司的可持续发展战略提供了有力支持。",
    challenge: "随着ESG要求的提高，公司需要更好地管理绿色项目的投融资，并量化可持续发展绩效。",
    solution: "DeepFin开发了绿色金融管理平台，结合卫星数据和AI分析，实现了ESG绩效的自动化评估和报告。",
    result: "成功发行绿色债券3亿元，碳减排项目融资成本降低15%，ESG评级提升两个等级。",
    rating: 5,
    industry: "能源"
  },
  {
    id: 7,
    name: "孙文博",
    company: "制造业集团",
    position: "数字化转型负责人",
    category: "制造业",
    logo: "/lovable-uploads/0bc90c42-9bb0-4ae5-a955-1714ac9404cb.png",
    testimonial: "DeepFin的智能工厂金融方案将我们的生产数据与金融服务无缝结合，大大提高了资产利用效率和投资回报率。",
    challenge: "传统制造业数字化转型面临资金压力，需要更精准的成本控制和更高效的资产管理。",
    solution: "DeepFin基于物联网数据，开发了工业资产金融管理系统，包括设备租赁、保险和预测性维护的金融优化方案。",
    result: "设备停机时间减少40%，保险成本降低20%，资产利用率提高35%。",
    rating: 4,
    industry: "制造业"
  }
];

// 客户案例类别
const categories = [
  { value: "all", label: "全部案例" },
  { value: "金融科技", label: "金融科技" },
  { value: "国际贸易", label: "国际贸易" },
  { value: "零售", label: "零售" },
  { value: "医疗健康", label: "医疗健康" },
  { value: "教育科技", label: "教育科技" },
  { value: "能源科技", label: "能源科技" },
  { value: "制造业", label: "制造业" },
];

const CustomerStories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedStory, setSelectedStory] = useState<CustomerStory | null>(null);

  // 基于选择的类别过滤客户案例
  const filteredStories = selectedCategory === 'all' 
    ? customerStoriesData 
    : customerStoriesData.filter(story => story.category === selectedCategory);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* 客户案例头部 */}
        <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 gradient-text">
                客户成功案例
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                看看我们的客户如何利用 DeepFin 的解决方案实现业务转型和增长
              </p>
            </div>
          </div>
        </section>
        
        {/* 案例分类标签页 */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
              <div className="flex justify-center mb-12">
                <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.value} 
                      value={category.value}
                      className="rounded-full data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                    >
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {/* 案例列表 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredStories.map((story) => (
                  <Card key={story.id} className="hover-scale">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 flex items-center justify-center">
                          <img src={story.logo} alt={story.company} className="w-full h-full object-contain" />
                        </div>
                        <Badge variant="outline">{story.industry}</Badge>
                      </div>
                      <CardTitle className="mt-4 text-xl">{story.company}</CardTitle>
                      <CardDescription className="flex items-center">
                        <Building className="h-4 w-4 mr-1" />
                        {story.category}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                        "{story.testimonial}"
                      </p>
                      <div className="flex items-center mt-2">
                        <User className="h-4 w-4 mr-1 text-muted-foreground" />
                        <span className="text-sm font-medium">{story.name}</span>
                        <span className="mx-1 text-muted-foreground">·</span>
                        <span className="text-sm text-muted-foreground">{story.position}</span>
                      </div>
                      <div className="flex items-center mt-3">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star 
                            key={index} 
                            className={`h-4 w-4 ${index < story.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setSelectedStory(story)}
                      >
                        查看详情 <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </Tabs>
          </div>
        </section>
        
        {/* 案例详情模态框 */}
        {selectedStory && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-background rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">{selectedStory.company}</h2>
                    <p className="text-muted-foreground">{selectedStory.category}</p>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedStory(null)}>
                    <span className="sr-only">关闭</span>
                    <span aria-hidden="true">&times;</span>
                  </Button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">客户评价</h3>
                    <blockquote className="pl-4 border-l-4 border-accent italic">
                      <p className="text-muted-foreground">"{selectedStory.testimonial}"</p>
                      <footer className="mt-2 font-medium">
                        — {selectedStory.name}, {selectedStory.position}
                      </footer>
                    </blockquote>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">挑战</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{selectedStory.challenge}</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">解决方案</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{selectedStory.solution}</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">成果</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">{selectedStory.result}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedStory(null)}
                    >
                      关闭
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default CustomerStories;
