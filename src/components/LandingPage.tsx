import React from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  LayoutDashboard,
  Smartphone,
  PieChart,
  Moon,
  Sun,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Logo } from '../components/logo';
import Link from 'next/link';

interface LandingPageProps {
  loginLink: string;
  onNavigateToTechCompany: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const FeatureCard = ({ icon: Icon, title, description, isDarkMode }: { icon: React.ElementType, title: string, description: string, isDarkMode: boolean }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={cn(
      "p-6 rounded-3xl border transition-all duration-300",
      isDarkMode
        ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-emerald-500/30"
        : "bg-white border-slate-100 hover:border-emerald-200 shadow-sm hover:shadow-md"
    )}
  >
    <div className={cn(
      "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors",
      isDarkMode ? "bg-emerald-500/10 text-emerald-400" : "bg-emerald-50 text-emerald-600"
    )}>
      <Icon size={24} />
    </div>
    <h3 className={cn("text-xl font-bold mb-2", isDarkMode ? "text-white" : "text-slate-900")}>{title}</h3>
    <p className={cn("text-sm leading-relaxed", isDarkMode ? "text-slate-400" : "text-slate-500")}>{description}</p>
  </motion.div>
);

export const LandingPage = ({ loginLink, onNavigateToTechCompany, isDarkMode, toggleTheme }: LandingPageProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-500 overflow-x-hidden selection:bg-emerald-500/30",
      isDarkMode ? "bg-[#0a0a0a] text-white" : "bg-slate-50 text-slate-900"
    )}>

      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors duration-500",
        isDarkMode ? "bg-[#0a0a0a]/80 border-white/5" : "bg-white/80 border-slate-200/50"
      )}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className={cn("text-sm font-medium hover:text-emerald-500 transition-colors", isDarkMode ? "text-slate-300" : "text-slate-600")}>Recursos</a>
            <a href="#testimonials" className={cn("text-sm font-medium hover:text-emerald-500 transition-colors", isDarkMode ? "text-slate-300" : "text-slate-600")}>Depoimentos</a>
            <a href="#pricing" className={cn("text-sm font-medium hover:text-emerald-500 transition-colors", isDarkMode ? "text-slate-300" : "text-slate-600")}>Planos</a>
            <button
              onClick={onNavigateToTechCompany}
              className={cn("text-sm font-medium hover:text-violet-500 transition-colors flex items-center gap-1", isDarkMode ? "text-slate-300" : "text-slate-600")}
            >
              <span className="w-2 h-2 rounded-full bg-violet-500"></span>
              Zenit Tech
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2.5 rounded-full transition-colors",
                isDarkMode ? "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10" : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200"
              )}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link href={loginLink}>
              <button
                type='button'
                className="px-5 py-2.5 text-sm font-bold text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
              >
                Entrar
              </button>
            </Link>
            <Link href={loginLink}>
              <button
                type='button'
                className="px-5 py-2.5 text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-lg shadow-emerald-600/20 transition-all active:scale-95"
              >
                Começar Agora
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={cn(
            "md:hidden absolute top-20 left-0 right-0 border-b p-6 flex flex-col gap-4 shadow-2xl",
            isDarkMode ? "bg-[#0a0a0a] border-white/10" : "bg-white border-slate-200"
          )}>
            <a href="#features" className="py-2 text-lg font-medium">Recursos</a>
            <a href="#pricing" className="py-2 text-lg font-medium">Planos</a>
            <div className="h-px bg-current opacity-10 my-2" />
            <Link href={loginLink}>
              <button type='button' className="w-full py-3 font-bold text-center border rounded-xl">Entrar</button>
            </Link>
            <Link href={loginLink}>
              <button type='button' className="w-full py-3 font-bold text-center bg-emerald-600 text-white rounded-xl">Começar Agora</button>
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={cn("absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-40 animate-pulse", isDarkMode ? "bg-emerald-900" : "bg-emerald-200")} />
          <div className={cn("absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[120px] opacity-40 animate-pulse delay-1000", isDarkMode ? "bg-emerald-800" : "bg-emerald-300")} />
          <div className={cn("absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]", !isDarkMode && "invert")} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-bold uppercase tracking-wider mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                O futuro das finanças
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6"
              >
                Domine seu dinheiro com <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">inteligência</span>.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className={cn("text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0", isDarkMode ? "text-slate-400" : "text-slate-600")}
              >
                O Zenit Finance combina design intuitivo com poder analítico para você alcançar a liberdade financeira mais rápido.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <Link href={loginLink}>
                  <button
                    type='button'
                    className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-600/25 transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    Começar Gratuitamente
                    <ArrowRight size={20} />
                  </button>
                </Link>
                <button className={cn(
                  "w-full sm:w-auto px-8 py-4 font-bold rounded-2xl border transition-all active:scale-95 flex items-center justify-center gap-2",
                  isDarkMode ? "border-white/10 hover:bg-white/5 text-white" : "border-slate-200 hover:bg-slate-50 text-slate-700"
                )}>
                  Ver Demonstração
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm opacity-60"
              >
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-1">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span>Plano gratuito vitalício</span>
                </div>
              </motion.div>
            </div>

            {/* Hero Image / Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 relative perspective-1000"
            >
              <div className={cn(
                "relative z-10 rounded-3xl overflow-hidden shadow-2xl border",
                isDarkMode ? "bg-[#111] border-white/10 shadow-emerald-900/20" : "bg-white border-slate-200 shadow-xl"
              )}>
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-transparent pointer-events-none" />

                {/* Mock UI Header */}
                <div className={cn("h-12 border-b flex items-center px-4 gap-2", isDarkMode ? "border-white/5 bg-white/5" : "border-slate-100 bg-slate-50")}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/50" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                  </div>
                </div>

                {/* Mock UI Content */}
                <div className="p-6 space-y-6">
                  <div className="flex gap-4">
                    <div className={cn("flex-1 p-4 rounded-2xl", isDarkMode ? "bg-white/5" : "bg-slate-50")}>
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/20 mb-2" />
                      <div className="w-20 h-4 rounded bg-current opacity-10 mb-2" />
                      <div className="w-32 h-8 rounded bg-current opacity-20" />
                    </div>
                    <div className={cn("flex-1 p-4 rounded-2xl", isDarkMode ? "bg-white/5" : "bg-slate-50")}>
                      <div className="w-8 h-8 rounded-lg bg-blue-500/20 mb-2" />
                      <div className="w-20 h-4 rounded bg-current opacity-10 mb-2" />
                      <div className="w-32 h-8 rounded bg-current opacity-20" />
                    </div>
                  </div>
                  <div className={cn("h-48 rounded-2xl w-full", isDarkMode ? "bg-white/5" : "bg-slate-50")} />
                  <div className="space-y-3">
                    <div className={cn("h-12 rounded-xl w-full", isDarkMode ? "bg-white/5" : "bg-slate-50")} />
                    <div className={cn("h-12 rounded-xl w-full", isDarkMode ? "bg-white/5" : "bg-slate-50")} />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className={cn(
                  "absolute -top-10 -right-10 p-4 rounded-2xl shadow-xl border backdrop-blur-md z-20",
                  isDarkMode ? "bg-[#1a1a1a]/90 border-white/10" : "bg-white/90 border-slate-100"
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-500">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="text-xs opacity-60 font-medium">Rendimento</p>
                    <p className="text-lg font-bold text-emerald-500">+12.5%</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={cn("py-24 px-6", isDarkMode ? "bg-white/5" : "bg-slate-100/50")}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", isDarkMode ? "text-white" : "text-slate-900")}>
              Tudo que você precisa para crescer
            </h2>
            <p className={cn("text-lg", isDarkMode ? "text-slate-400" : "text-slate-600")}>
              Ferramentas poderosas simplificadas para o seu dia a dia. Controle total na palma da sua mão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              isDarkMode={isDarkMode}
              icon={LayoutDashboard}
              title="Dashboard Intuitivo"
              description="Visualize todas as suas contas, cartões e investimentos em um único lugar com gráficos claros."
            />
            <FeatureCard
              isDarkMode={isDarkMode}
              icon={PieChart}
              title="Relatórios Inteligentes"
              description="Entenda para onde vai seu dinheiro com categorização automática e insights de IA."
            />
            <FeatureCard
              isDarkMode={isDarkMode}
              icon={Smartphone}
              title="Mobile First"
              description="Acesse suas finanças de qualquer lugar. App otimizado para todos os dispositivos."
            />
            <FeatureCard
              isDarkMode={isDarkMode}
              icon={Shield}
              title="Segurança de Ponta"
              description="Seus dados são criptografados com os mesmos padrões dos grandes bancos globais."
            />
            <FeatureCard
              isDarkMode={isDarkMode}
              icon={Zap}
              title="Sincronização Real"
              description="Conecte suas contas bancárias e veja as transações aparecerem automaticamente."
            />
            <FeatureCard
              isDarkMode={isDarkMode}
              icon={Globe}
              title="Multi-moeda"
              description="Gerencie ativos em Reais, Dólares e Criptomoedas em uma única carteira."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-600" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10 text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Pronto para transformar sua vida financeira?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de usuários que já estão no controle. Crie sua conta gratuita hoje mesmo.
          </p>
          <Link href={loginLink}>
            <button
              type='button'
              className="px-10 py-5 bg-white text-emerald-900 font-bold text-lg rounded-2xl shadow-2xl hover:bg-emerald-50 transition-all active:scale-95"
            >
              Criar Conta Gratuita
            </button>
          </Link>
          <p className="mt-6 text-sm text-emerald-200 opacity-80">
            Não é necessário cartão de crédito • Cancelamento a qualquer momento
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className={cn("py-12 px-6 border-t", isDarkMode ? "bg-[#050505] border-white/10" : "bg-white border-slate-200")}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <Logo />
            <button
              onClick={onNavigateToTechCompany}
              className={cn("text-xs font-medium hover:underline text-left", isDarkMode ? "text-emerald-500/60 hover:text-emerald-400" : "text-emerald-600/60 hover:text-emerald-700")}
            >
              Desenvolvido por Zenit Tech
            </button>
          </div>
          <div className={cn("text-sm", isDarkMode ? "text-slate-500" : "text-slate-400")}>
            © Zenit Finance 2026. Todos os direitos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className={cn("text-sm hover:text-emerald-500 transition-colors", isDarkMode ? "text-slate-400" : "text-slate-500")}>Termos</a>
            <a href="#" className={cn("text-sm hover:text-emerald-500 transition-colors", isDarkMode ? "text-slate-400" : "text-slate-500")}>Privacidade</a>
            <a href="#" className={cn("text-sm hover:text-emerald-500 transition-colors", isDarkMode ? "text-slate-400" : "text-slate-500")}>Suporte</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
