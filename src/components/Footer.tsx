import { cn } from "@/lib/utils";
import { MapPin, Phone, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
      <div className="absolute top-10 left-10 w-60 h-60 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-accent/5 blur-3xl" />

      <div className="section-container pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src="/lovable-uploads/0bc90c42-9bb0-4ae5-a955-1714ac9404cb.png"
                alt="DEEPFIN Logo"
                className="h-8 w-auto filter brightness-0 invert"
              />
              <span className="text-xl font-display font-semibold">
                DEEPFIN
              </span>
            </div>

            <p className="text-primary-foreground/80 text-sm max-w-xs">
              DEEPFIN致力于通过人工智能技术推动垂直行业的数字化转型，为客户创造价值，引领行业创新。
            </p>

            <div className="flex space-x-4">
              {["twitter", "facebook", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center",
                    "bg-white/10 hover:bg-white/20 transition-colors duration-200"
                  )}
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">产品</h4>
            <ul className="space-y-2">
              {[
                "金融投融资大模型",
                "文档智能生成助手",
                "文档审核助手",
                "营销助手",
                "大模型工具链",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">公司</h4>
            <ul className="space-y-2">
              {[
                "关于我们",
                "客户案例",
                "行业解决方案",
                "合作伙伴",
                "新闻资讯",
                "加入我们",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-medium mb-4">联系我们</h4>

            <div className="flex items-start space-x-3">
              <Phone size={18} className="mt-0.5 text-primary-foreground/70" />
              <div>
                <p className="text-sm text-primary-foreground/90">
                  +86 159 0080 5807
                </p>
                <p className="text-xs text-primary-foreground/70">
                  周一至周五 9:00-18:00
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin size={18} className="mt-0.5 text-primary-foreground/70" />
              <div>
                <p className="text-sm text-primary-foreground/90">
                  上海市浦东新区
                </p>
                <p className="text-xs text-primary-foreground/70">
                  金港路735号1号楼
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 mt-4">
              <input
                type="email"
                placeholder="订阅我们的新闻"
                className="px-3 py-2 rounded-l-md bg-white/10 text-sm placeholder:text-primary-foreground/50 border-0 focus:outline-none focus:ring-1 focus:ring-accent flex-1"
              />
              <button
                className="bg-accent hover:bg-accent/90 transition-colors text-accent-foreground rounded-r-md p-2"
                aria-label="订阅"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} DEEPFIN. 保留所有权利
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            {["隐私政策", "服务条款", "网站地图"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
