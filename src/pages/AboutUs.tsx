import Footer from "@/components/Footer";
import { FounderCard } from "@/components/FounderCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Rocket, Target, Users } from "lucide-react";

const AboutUs = () => {
  const founders = [
    {
      name: "张伟",
      title: "创始人兼首席执行官",
      bio: "曾任职于阿里巴巴金融科技部门，拥有15年金融科技经验。斯坦福大学计算机科学博士。",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&auto=format&fit=crop&q=80",
      expertise: ["人工智能", "金融科技", "战略领导"],
    },
    {
      name: "李欣",
      title: "联合创始人兼首席技术官",
      bio: "前谷歌AI研究员，专注于大型语言模型研发。麻省理工学院人工智能硕士。",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&auto=format&fit=crop&q=80",
      expertise: ["深度学习", "自然语言处理", "大型语言模型"],
    },
    {
      name: "王强",
      title: "联合创始人兼首席产品官",
      bio: "曾在蚂蚁金服负责产品设计与开发，对金融产品有独到见解。北京大学金融学硕士。",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&auto=format&fit=crop&q=80",
      expertise: ["产品设计", "用户体验", "金融产品"],
    },
    {
      name: "刘梅",
      title: "首席运营官",
      bio: "前平安银行数字化转型负责人，专注于企业运营效率提升。清华大学工商管理硕士。",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&auto=format&fit=crop&q=80",
      expertise: ["数字化转型", "运营管理", "流程优化"],
    },
    {
      name: "赵海",
      title: "首席数据官",
      bio: "前腾讯数据科学家，专注于大数据分析与应用。中国科学院统计学博士。",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&auto=format&fit=crop&q=80",
      expertise: ["数据分析", "机器学习", "风险控制"],
    },
    {
      name: "孙玲",
      title: "首席市场官",
      bio: "拥有丰富的金融行业市场营销经验，曾服务于多家知名金融机构。复旦大学市场营销硕士。",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&auto=format&fit=crop&q=80",
      expertise: ["市场策略", "品牌建设", "客户关系"],
    },
    {
      name: "陈明",
      title: "首席风险官",
      bio: "曾在国际投行担任风险管理总监，拥有丰富的金融风险评估经验。上海交通大学金融工程博士。",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&auto=format&fit=crop&q=80",
      expertise: ["风险管理", "合规监管", "金融安全"],
    },
  ];

  const companyValues = [
    {
      icon: Target,
      title: "客户为先",
      description:
        "我们以客户需求为导向，提供卓越的服务和解决方案，帮助客户在数字化转型中取得成功。",
    },
    {
      icon: Rocket,
      title: "创新驱动",
      description:
        "我们不断探索前沿技术，将人工智能与金融深度融合，创造有价值的行业解决方案。",
    },
    {
      icon: Users,
      title: "协作共赢",
      description:
        "我们相信合作的力量，与客户、伙伴和员工建立长期互利的关系，共同成长。",
    },
    {
      icon: Award,
      title: "追求卓越",
      description:
        "我们坚持高标准，精益求精，不断超越自我，提供最高品质的产品和服务。",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* 页面标题部分 */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold animate-fade-in">
              关于我们
            </h1>
            <p
              className="mt-4 text-lg text-secondary md:text-xl max-w-3xl mx-auto animate-fade-in"
              style={{ animationDelay: "100ms" }}
            >
              DEEPFIN致力于通过人工智能技术推动金融行业的数字化转型，为客户创造价值，引领行业创新
            </p>
          </div>
        </div>
      </section>

      {/* 公司介绍部分 */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold">我们的使命</h2>
              <p className="text-secondary text-lg leading-relaxed">
                DEEPFIN成立于2020年，是一家专注于金融科技领域的人工智能公司。我们的使命是通过先进的人工智能技术，帮助金融机构提升效率、降低风险、增强客户体验，推动整个金融行业的智能化升级。
              </p>
              <p className="text-secondary text-lg leading-relaxed">
                我们的团队由来自顶尖科技公司和金融机构的专业人才组成，拥有深厚的技术积累和丰富的行业经验。通过融合人工智能与金融专业知识，我们为银行、保险、投资等各类金融机构提供创新的解决方案。
              </p>
              <Button className="mt-4 group" size="lg">
                了解我们的产品
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80"
                alt="DEEPFIN团队"
                className="w-full h-auto object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-sm font-medium">DEEPFIN总部，上海</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 公司价值观部分 */}
      <section className="py-16 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold">我们的价值观</h2>
            <p className="mt-4 text-secondary max-w-3xl mx-auto">
              这些核心价值观指引着我们的决策和行动，帮助我们实现使命并为客户创造更大价值
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-medium mb-2">{value.title}</h3>
                <p className="text-secondary text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 创始人团队部分 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold">创始团队</h2>
            <p className="mt-4 text-secondary max-w-3xl mx-auto">
              我们的创始团队拥有深厚的技术背景和丰富的行业经验，致力于打造金融科技领域的创新解决方案
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {founders.map((founder, index) => (
              <FounderCard
                key={founder.name}
                founder={founder}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 公司里程碑部分 */}
      <section className="py-16 bg-muted relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold">公司里程碑</h2>
            <p className="mt-4 text-secondary max-w-3xl mx-auto">
              从创立至今，我们不断成长与进步，这些重要时刻见证了我们的发展历程
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative border-l-2 border-accent/20 pl-8 pb-10 ml-4">
              <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-accent -translate-x-1/2 shadow-md shadow-accent/20"></div>
              <div className="mb-8">
                <span className="text-sm font-medium text-accent">2023年</span>
                <h3 className="text-xl font-medium mt-1">完成B轮融资5亿元</h3>
                <p className="mt-2 text-secondary">
                  由红杉资本领投，老股东跟投。公司估值达到30亿元，标志着资本市场对DEEPFIN发展前景的高度认可。
                </p>
              </div>

              <div className="absolute left-0 top-[120px] w-4 h-4 rounded-full bg-accent -translate-x-1/2 shadow-md shadow-accent/20"></div>
              <div className="mb-8">
                <span className="text-sm font-medium text-accent">2022年</span>
                <h3 className="text-xl font-medium mt-1">服务客户突破100家</h3>
                <p className="mt-2 text-secondary">
                  产品线覆盖银行、保险、证券、资管等多个金融领域，成为金融科技领域的领先企业。
                </p>
              </div>

              <div className="absolute left-0 top-[240px] w-4 h-4 rounded-full bg-accent -translate-x-1/2 shadow-md shadow-accent/20"></div>
              <div className="mb-8">
                <span className="text-sm font-medium text-accent">2021年</span>
                <h3 className="text-xl font-medium mt-1">推出金融行业大模型</h3>
                <p className="mt-2 text-secondary">
                  自主研发的金融行业大模型在多个权威评测中名列前茅，技术实力获得行业广泛认可。
                </p>
              </div>

              <div className="absolute left-0 top-[360px] w-4 h-4 rounded-full bg-accent -translate-x-1/2 shadow-md shadow-accent/20"></div>
              <div>
                <span className="text-sm font-medium text-accent">2020年</span>
                <h3 className="text-xl font-medium mt-1">DEEPFIN成立</h3>
                <p className="mt-2 text-secondary">
                  由一群来自顶尖科技公司和金融机构的专业人才创立，获得天使轮融资1亿元。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 号召性动作部分 */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/90 to-primary-dark/90"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              加入我们，共同创造未来
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-2xl mx-auto">
              我们正在寻找志同道合的伙伴，一起推动金融科技的创新与发展。无论您是技术专家、产品设计师还是行业专家，都可以在这里发挥所长
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg">
                查看招聘职位
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white/20 text-white hover:bg-white/10"
                onClick={() => (window.location.href = "/Contact")}
              >
                联系我们
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
