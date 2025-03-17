
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const formSchema = z.object({
  name: z.string().min(2, {
    message: '请输入您的姓名',
  }),
  email: z.string().email({
    message: '请输入有效的电子邮箱',
  }),
  phone: z.string().min(8, {
    message: '请输入有效的电话号码',
  }),
  message: z.string().min(10, {
    message: '消息需要至少10个字符',
  }),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // 模拟表单提交
    console.log(values);
    
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
      toast({
        title: "消息已发送",
        description: "感谢您的联系，我们会尽快回复您。",
      });
    }, 1500);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* 标题部分 */}
        <section className="bg-gradient-to-b from-accent/10 to-background pt-32 pb-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">联系我们</h1>
            <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto">
              我们随时准备为您提供支持和解答疑问。请通过以下方式与我们取得联系。
            </p>
          </div>
        </section>
        
        {/* 联系信息和表单部分 */}
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* 左侧联系信息 */}
              <div className="space-y-10">
                <div>
                  <h2 className="text-2xl font-bold mb-6">联系方式</h2>
                  
                  <ul className="space-y-6">
                    <li className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium">电话</h3>
                        <p className="text-muted-foreground mt-1">+86 400-123-4567</p>
                        <p className="text-sm text-muted-foreground mt-1">工作日 9:00 - 18:00</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium">电子邮箱</h3>
                        <p className="text-muted-foreground mt-1">contact@deepfin.com</p>
                        <p className="text-sm text-muted-foreground mt-1">我们会在24小时内回复</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium">公司地址</h3>
                        <p className="text-muted-foreground mt-1">上海市浦东新区世纪大道1号</p>
                        <p className="text-sm text-muted-foreground mt-1">陆家嘴金融中心 88层</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-6">工作时间</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">周一至周五:</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">周六:</span>
                      <span>10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">周日:</span>
                      <span>休息</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 右侧联系表单 */}
              <div className="bg-card rounded-xl shadow-sm border p-6">
                <h2 className="text-2xl font-bold mb-6">发送消息</h2>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>姓名</FormLabel>
                          <FormControl>
                            <Input placeholder="请输入您的姓名" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>电子邮箱</FormLabel>
                            <FormControl>
                              <Input placeholder="yourname@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>电话</FormLabel>
                            <FormControl>
                              <Input placeholder="请输入您的电话号码" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>消息内容</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="请详细描述您的需求或问题..." 
                              className="min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>发送中...</>
                      ) : (
                        <>
                          发送消息 <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
        
        {/* 地图部分 */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">我们的位置</h2>
            <div className="rounded-xl overflow-hidden h-96 shadow-sm border">
              <div className="w-full h-full bg-accent/5 flex items-center justify-center">
                <p className="text-muted-foreground">地图加载中...</p>
                {/* 在实际项目中，这里可以集成高德地图或百度地图API */}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
