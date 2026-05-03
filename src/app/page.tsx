'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import {
  Zap,
  Shield,
  Layers,
  Code2,
  Sparkles,
  Rocket,
  Menu,
  X,
  Github,
  Twitter,
  Linkedin,
  Mail,
  ChevronRight,
  Star,
  Users,
  Download,
  ArrowRight,
  Moon,
  Sun,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

// Code examples for the demo section
const codeExamples = {
  install: `# Создайте новый проект за секунды
npx create-next-app@latest my-app

# Начните разработку
cd my-app
npm run dev`,
  app: `// app/page.tsx
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">
        Добро пожаловать в Next.js
      </h1>
      <Button variant="default">
        Начать
      </Button>
    </main>
  )
}`,
  api: `// app/api/hello/route.ts
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Привет от Next.js API!',
    timestamp: new Date().toISOString()
  })
}`,
}

// Feature data
const features = [
  {
    icon: Zap,
    title: 'Молниеносная скорость',
    description: 'Оптимизирован для производительности с мгновенной загрузкой страниц и плавными переходами.',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Типобезопасность',
    description: 'Полная поддержка TypeScript со строгой проверкой типов для надёжного кода.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Layers,
    title: 'Модульный дизайн',
    description: 'Создавайте из повторно используемых компонентов с примитивами Radix UI.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code2,
    title: 'UX для разработчиков',
    description: 'Горячая перезагрузка, overlay ошибок и интуитивные API для быстрой разработки.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Красивый интерфейс',
    description: 'Потрясающие компоненты со стилизацией Tailwind CSS из коробки.',
    gradient: 'from-rose-500 to-red-500',
  },
  {
    icon: Rocket,
    title: 'Готов к продакшену',
    description: 'Развёртывание где угодно со встроенной оптимизацией и функциями безопасности.',
    gradient: 'from-indigo-500 to-purple-500',
  },
]

// Stats data
const stats = [
  { label: 'Звёзд на GitHub', value: 125000, icon: Star },
  { label: 'Активных пользователей', value: 2500000, icon: Users },
  { label: 'Загрузок в неделю', value: 8500000, icon: Download },
]

// Navigation links
const navLinks = [
  { label: 'Возможности', href: '#features' },
  { label: 'Обучение', href: '#learn' },
  { label: 'Примеры', href: '#showcase' },
  { label: 'Документация', href: '#docs' },
]

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animated counter component
  function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }, [value])

    return (
      <span>
        {count.toLocaleString()}
        {suffix}
      </span>
    )
  }

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-300",
      isDark ? "dark bg-[#0a0a0b]" : "bg-white"
    )}>
      {/* Background gradient effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={cn(
          "absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-30",
          isDark ? "bg-purple-600" : "bg-purple-300"
        )} />
        <div className={cn(
          "absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20",
          isDark ? "bg-blue-600" : "bg-blue-300"
        )} />
        <div className={cn(
          "absolute -bottom-40 right-1/3 w-[400px] h-[400px] rounded-full blur-[100px] opacity-25",
          isDark ? "bg-cyan-600" : "bg-cyan-300"
        )} />
      </div>

      {/* Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? isDark 
            ? "bg-[#0a0a0b]/80 backdrop-blur-xl border-b border-white/10" 
            : "bg-white/80 backdrop-blur-xl border-b border-gray-200"
          : "bg-transparent"
      )}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg rotate-45 transform" />
                <div className="absolute inset-1 bg-[#0a0a0b] dark:bg-[#0a0a0b] rounded-md rotate-45 transform" />
              </div>
              <span className={cn(
                "text-xl font-bold",
                isDark ? "text-white" : "text-gray-900"
              )}>
                РадиусUI
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hidden md:flex items-center gap-1"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                    isDark 
                      ? "text-gray-300 hover:text-white hover:bg-white/10" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </motion.div>

            {/* Right side buttons */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className={cn(
                  "rounded-full",
                  isDark ? "text-gray-300 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-gray-900"
                )}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "rounded-full hidden sm:flex",
                  isDark ? "text-gray-300 hover:text-white hover:bg-white/10" : "text-gray-600 hover:text-gray-900"
                )}
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 hidden sm:flex">
                Начать
              </Button>
              <button
                className={cn(
                  "md:hidden p-2 rounded-lg",
                  isDark ? "text-gray-300" : "text-gray-600"
                )}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </motion.div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={cn(
                "md:hidden py-4 border-t",
                isDark ? "border-white/10" : "border-gray-200"
              )}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-lg",
                      isDark ? "text-gray-300 hover:bg-white/10" : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 mt-2">
                  Начать
                </Button>
              </div>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <Badge 
                variant="outline" 
                className={cn(
                  "px-4 py-1.5 text-sm font-medium rounded-full border",
                  isDark 
                    ? "bg-white/5 border-white/10 text-gray-300" 
                    : "bg-gray-100 border-gray-200 text-gray-600"
                )}
              >
                <Sparkles className="w-3.5 h-3.5 mr-2 text-purple-500" />
                Новинка: Radix UI v3 уже здесь
                <ChevronRight className="w-3.5 h-3.5 ml-1" />
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
            >
              <span className={isDark ? "text-white" : "text-gray-900"}>Создавайте современные приложения</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                с уверенностью
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cn(
                "text-lg sm:text-xl max-w-3xl mx-auto mb-10",
                isDark ? "text-gray-400" : "text-gray-600"
              )}
            >
              Создавайте потрясающие, доступные веб-приложения с примитивами Radix UI 
              и Tailwind CSS. Полный набор инструментов для создания готовых к продакшену интерфейсов.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 h-12 text-base font-medium rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all">
                Начать создание
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className={cn(
                  "px-8 h-12 text-base font-medium rounded-xl border",
                  isDark 
                    ? "border-white/20 text-white hover:bg-white/10" 
                    : "border-gray-300 text-gray-700 hover:bg-gray-100"
                )}
              >
                Смотреть документацию
              </Button>
            </motion.div>
          </div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <div className={cn(
              "rounded-2xl border overflow-hidden shadow-2xl",
              isDark 
                ? "bg-[#111113] border-white/10" 
                : "bg-white border-gray-200"
            )}>
              {/* Window controls */}
              <div className={cn(
                "flex items-center gap-2 px-4 py-3 border-b",
                isDark ? "border-white/10" : "border-gray-200"
              )}>
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className={cn(
                  "ml-4 text-sm font-medium",
                  isDark ? "text-gray-500" : "text-gray-400"
                )}>
                  app/page.tsx
                </span>
              </div>
              {/* Code content */}
              <div className="p-4">
                <SyntaxHighlighter
                  language="tsx"
                  style={oneDark}
                  customStyle={{
                    background: 'transparent',
                    padding: 0,
                    margin: 0,
                    fontSize: '14px',
                  }}
                >
                  {codeExamples.app}
                </SyntaxHighlighter>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "text-center p-6 rounded-2xl border",
                  isDark 
                    ? "bg-white/5 border-white/10" 
                    : "bg-gray-50 border-gray-200"
                )}
              >
                <div className="flex justify-center mb-4">
                  <div className={cn(
                    "p-3 rounded-xl",
                    isDark ? "bg-purple-500/20" : "bg-purple-100"
                  )}>
                    <stat.icon className="w-6 h-6 text-purple-500" />
                  </div>
                </div>
                <div className={cn(
                  "text-4xl font-bold mb-2",
                  isDark ? "text-white" : "text-gray-900"
                )}>
                  <AnimatedCounter value={stat.value} suffix="+" />
                </div>
                <div className={cn(
                  "text-sm font-medium",
                  isDark ? "text-gray-400" : "text-gray-500"
                )}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-400 border-purple-500/30 mb-4">
              Возможности
            </Badge>
            <h2 className={cn(
              "text-3xl sm:text-4xl font-bold mb-4",
              isDark ? "text-white" : "text-gray-900"
            )}>
              Всё необходимое для разработки
            </h2>
            <p className={cn(
              "text-lg max-w-2xl mx-auto",
              isDark ? "text-gray-400" : "text-gray-600"
            )}>
              Комплексный набор инструментов для разработчиков, которым важен результат.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={cn(
                  "h-full border transition-all duration-300 hover:scale-[1.02] cursor-pointer group",
                  isDark 
                    ? "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20" 
                    : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                )}>
                  <CardHeader>
                    <div className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br",
                      feature.gradient
                    )}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className={cn(
                      "text-lg font-semibold",
                      isDark ? "text-white" : "text-gray-900"
                    )}>
                      {feature.title}
                    </CardTitle>
                    <CardDescription className={cn(
                      isDark ? "text-gray-400" : "text-gray-500"
                    )}>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Demo Section */}
      <section id="learn" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 text-cyan-400 border-cyan-500/30 mb-4">
              Примеры кода
            </Badge>
            <h2 className={cn(
              "text-3xl sm:text-4xl font-bold mb-4",
              isDark ? "text-white" : "text-gray-900"
            )}>
              Начните за минуты
            </h2>
            <p className={cn(
              "text-lg max-w-2xl mx-auto",
              isDark ? "text-gray-400" : "text-gray-600"
            )}>
              Быстро начните работу с нашим интуитивным API.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Tabs defaultValue="install" className="w-full">
              <TabsList className={cn(
                "grid w-full grid-cols-3 mb-4 p-1 rounded-xl",
                isDark ? "bg-white/5" : "bg-gray-100"
              )}>
                <TabsTrigger 
                  value="install"
                  className={cn(
                    "rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white",
                    isDark ? "text-gray-400" : "text-gray-600"
                  )}
                >
                  Установка
                </TabsTrigger>
                <TabsTrigger 
                  value="app"
                  className={cn(
                    "rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white",
                    isDark ? "text-gray-400" : "text-gray-600"
                  )}
                >
                  Приложение
                </TabsTrigger>
                <TabsTrigger 
                  value="api"
                  className={cn(
                    "rounded-lg data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white",
                    isDark ? "text-gray-400" : "text-gray-600"
                  )}
                >
                  API
                </TabsTrigger>
              </TabsList>
              {Object.entries(codeExamples).map(([key, code]) => (
                <TabsContent key={key} value={key}>
                  <div className={cn(
                    "rounded-2xl border overflow-hidden",
                    isDark 
                      ? "bg-[#111113] border-white/10" 
                      : "bg-white border-gray-200"
                  )}>
                    <div className={cn(
                      "flex items-center gap-2 px-4 py-3 border-b",
                      isDark ? "border-white/10" : "border-gray-200"
                    )}>
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      <span className={cn(
                        "ml-4 text-sm font-medium",
                        isDark ? "text-gray-500" : "text-gray-400"
                      )}>
                        {key === 'install' ? 'terminal' : `app/${key === 'app' ? 'page' : 'api/hello'}.tsx`}
                      </span>
                    </div>
                    <div className="p-4">
                      <SyntaxHighlighter
                        language={key === 'install' ? 'bash' : 'tsx'}
                        style={oneDark}
                        customStyle={{
                          background: 'transparent',
                          padding: 0,
                          margin: 0,
                          fontSize: '14px',
                        }}
                      >
                        {code}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Testimonials / Community Section */}
      <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="bg-gradient-to-r from-pink-600/20 to-rose-600/20 text-pink-400 border-pink-500/30 mb-4">
              Сообщество
            </Badge>
            <h2 className={cn(
              "text-3xl sm:text-4xl font-bold mb-4",
              isDark ? "text-white" : "text-gray-900"
            )}>
              Любимо разработчиками
            </h2>
            <p className={cn(
              "text-lg max-w-2xl mx-auto",
              isDark ? "text-gray-400" : "text-gray-600"
            )}>
              Присоединяйтесь к тысячам разработчиков, создающих потрясающие продукты.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Анна Петрова',
                role: 'Старший инженер в Яндексе',
                avatar: 'АП',
                content: 'Radix UI полностью изменил мой подход к созданию компонентов. Примитивы невероятно хорошо спроектированы.',
              },
              {
                name: 'Дмитрий Иванов',
                role: 'Техлид в VK',
                avatar: 'ДИ',
                content: 'Функции доступности встроены, поэтому всё работает правильно по умолчанию. Это меняет правила игры для продакшен-приложений.',
              },
              {
                name: 'Елена Смирнова',
                role: 'Основатель TechStart',
                avatar: 'ЕС',
                content: 'Мы выпустили продукт вдвое быстрее. Комбинация Radix и Tailwind непобедима для быстрой разработки.',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={cn(
                  "h-full border",
                  isDark 
                    ? "bg-white/5 border-white/10" 
                    : "bg-white border-gray-200"
                )}>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className={cn(
                          "text-base",
                          isDark ? "text-white" : "text-gray-900"
                        )}>
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className={cn(
                          "text-sm",
                          isDark ? "text-gray-500" : "text-gray-500"
                        )}>
                          {testimonial.role}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={cn(
                      "text-sm leading-relaxed",
                      isDark ? "text-gray-400" : "text-gray-600"
                    )}>
                      &quot;{testimonial.content}&quot;
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={cn(
              "relative rounded-3xl p-8 sm:p-12 overflow-hidden",
              isDark 
                ? "bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-white/10" 
                : "bg-gradient-to-br from-purple-100 to-blue-100 border border-purple-200"
            )}
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
            
            <div className="relative text-center">
              <h2 className={cn(
                "text-3xl sm:text-4xl font-bold mb-4",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Готовы создать что-то потрясающее?
              </h2>
              <p className={cn(
                "text-lg mb-8 max-w-2xl mx-auto",
                isDark ? "text-gray-300" : "text-gray-600"
              )}>
                Присоединяйтесь к тысячам разработчиков, использующих Radix UI и Tailwind CSS 
                для создания красивых, доступных веб-приложений.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 h-12 text-base font-medium rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all">
                  Начать создание
                  <Rocket className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className={cn(
                    "px-8 h-12 text-base font-medium rounded-xl border",
                    isDark 
                      ? "border-white/20 text-white hover:bg-white/10" 
                      : "border-gray-300 text-gray-700 hover:bg-white"
                  )}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className={cn(
        "border-t py-12 px-4 sm:px-6 lg:px-8",
        isDark ? "border-white/10" : "border-gray-200"
      )}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className={cn(
                "font-semibold mb-4",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Ресурсы
              </h4>
              <ul className="space-y-2">
                {['Документация', 'Компоненты', 'Шаблоны', 'Примеры'].map((item) => (
                  <li key={item}>
                    <a href="#" className={cn(
                      "text-sm hover:underline",
                      isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    )}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={cn(
                "font-semibold mb-4",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Компания
              </h4>
              <ul className="space-y-2">
                {['О нас', 'Блог', 'Карьера', 'Контакты'].map((item) => (
                  <li key={item}>
                    <a href="#" className={cn(
                      "text-sm hover:underline",
                      isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    )}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={cn(
                "font-semibold mb-4",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Правовая информация
              </h4>
              <ul className="space-y-2">
                {['Конфиденциальность', 'Условия', 'Лицензия', 'Безопасность'].map((item) => (
                  <li key={item}>
                    <a href="#" className={cn(
                      "text-sm hover:underline",
                      isDark ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                    )}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className={cn(
                "font-semibold mb-4",
                isDark ? "text-white" : "text-gray-900"
              )}>
                Связаться
              </h4>
              <div className="flex gap-3">
                {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className={cn(
                      "p-2 rounded-lg transition-colors",
                      isDark 
                        ? "text-gray-400 hover:text-white hover:bg-white/10" 
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <Separator className={cn(
            "mb-8",
            isDark ? "bg-white/10" : "bg-gray-200"
          )} />
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md rotate-45 transform" />
              </div>
              <span className={cn(
                "text-sm font-medium",
                isDark ? "text-gray-400" : "text-gray-600"
              )}>
                © 2024 РадиусUI. Все права защищены.
              </span>
            </div>
            <div className={cn(
              "text-sm",
              isDark ? "text-gray-500" : "text-gray-400"
            )}>
              Создано с Next.js, Radix UI и Tailwind CSS
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
