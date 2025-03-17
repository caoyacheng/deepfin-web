import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 添加禁止背景滚动的效果
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "首页", path: "/" },
    { name: "解决方案", path: "/solutions" },
    { name: "客户案例", path: "/stories" },
    { name: "关于我们", path: "/about" },
    { name: "API开放平台", path: "/apiconsle" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "py-3 glass shadow-sm backdrop-blur-lg" // 增强背景模糊效果
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo - 靠左对齐 */}
          <Link
            to="/"
            className="flex items-center space-x-2 animate-fade-in pl-0"
          >
            <img
              src="/lovable-uploads/0bc90c42-9bb0-4ae5-a955-1714ac9404cb.png"
              alt="DEEPFIN Logo"
              className="h-12 w-auto"
            />
            <span className="text-xl font-display font-semibold">DEEPFIN</span>
          </Link>

          {/* Desktop Navigation - 靠右对齐 */}
          <nav className="hidden md:flex space-x-6 justify-end">
            {navItems.map((item, index) => {
              const isActive =
                location.pathname === item.path ||
                (location.pathname === "/" && item.path.startsWith("/#"));

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 relative px-2 py-1", // 增加内边距
                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px]",
                    "after:scale-x-0 after:bg-accent after:transition-transform after:duration-300",
                    "hover:text-accent hover:after:scale-x-100 hover:after:origin-left",
                    "animate-fade-in",
                    isActive ? "text-accent after:scale-x-100" : "",
                    isScrolled ? "text-foreground" : "text-foreground/90" // 基于滚动状态调整颜色
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu button - 优化按钮交互 */}
          <button
            className={cn(
              "md:hidden p-2 rounded-full transition-colors duration-300",
              isScrolled
                ? "hover:bg-accent/10 text-foreground"
                : "hover:bg-white/10 text-foreground/90"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu - 优化过渡动画 */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 pt-20 bg-background/95 backdrop-blur-lg transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[-10px] pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center space-y-8 pt-10 px-6">
          {navItems.map((item, index) => {
            const isActive =
              location.pathname === item.path ||
              (location.pathname === "/" && item.path.startsWith("/#"));

            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-lg font-medium transition-all duration-300 relative",
                  "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px]",
                  "after:scale-x-0 after:bg-accent after:transition-transform after:duration-300",
                  "hover:text-accent hover:after:scale-x-100 hover:after:origin-left",
                  isActive ? "text-accent after:scale-x-100" : ""
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
