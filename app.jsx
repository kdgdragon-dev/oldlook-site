import React, { useState, useEffect } from 'react';
import { 
  Ship, 
  Package, 
  Globe, 
  CheckCircle, 
  Mail, 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  Leaf, 
  Award, 
  Truck 
} from 'lucide-react';

// Content Translations Object
const content = {
  en: {
    nav: {
      about: "About Us",
      products: "Products",
      process: "Process",
      contact: "Contact",
      quote: "Get a Quote"
    },
    hero: {
      badge: "Premium Korea Used Clothing Exporter",
      title1: "Korea's #1 Source for",
      title2: "Bulk Used Clothing",
      subtitle: "OLDLOOK CORPORATION is a leading exporter of premium sorted second-hand clothing, shoes, and bags. We supply high-quality Korean fashion to the global market.",
      cta_catalog: "View Catalog",
      cta_quote: "Request Container Quote"
    },
    stats: {
      exp: "Years Experience",
      countries: "Countries Exported",
      containers: "Containers Shipped",
      grade: "Premium Grade"
    },
    about: {
      sub: "Why Choose OLDLOOK CORPORATION",
      title: "Trusted Partner for Used Clothing Import",
      cards: [
        {
          title: "Strict Quality Control",
          desc: "Our expert sorting team in Korea ensures only Grade A clothing enters our bales. We guarantee minimal waste and maximum value."
        },
        {
          title: "Professional Baling",
          desc: "We produce high-density compressed bales (45kg/80kg/100kg) to maximize container loadability for cost-effective shipping."
        },
        {
          title: "Trendy Korean Fashion",
          desc: "Sourced from affluent districts in South Korea, our inventory consists of modern, stylish, and branded items high in demand globally."
        }
      ]
    },
    products: {
      title: "Our Export Products",
      desc: "As a specialized Korea used clothing exporter, we offer a wide range of categories sorted by season and material.",
      link: "Download Full Catalog",
      items: [
        { title: "Summer Mix", desc: "Bright colors, modern styles, light materials perfect for tropical climates.", tags: ['T-Shirts', 'Dresses', 'Shorts'] },
        { title: "Winter Heavy", desc: "High-quality warm clothing. Clean condition with minimal wear.", tags: ['Jackets', 'Coats', 'Sweaters'] },
        { title: "Premium Bales", desc: "Professionally compressed bales wrapped in UV-protective sheeting.", tags: ['45kg', '80kg', '100kg'] },
        { title: "Shoes & Bags", desc: "Paired shoes and branded bags. Cleaned and packed carefully.", tags: ['Sneakers', 'Leather Bags'] },
        { title: "Kids Wear", desc: "Colorful and cute designs. High demand category in all markets.", tags: ['Boys', 'Girls', 'Mixed'] },
        { title: "Household Rumus", desc: "Clean household textiles sorted by material and size.", tags: ['Curtains', 'Bed Sheets'] }
      ]
    },
    process: {
      title: "Export Process",
      sub: "From our warehouse in Korea to your port.",
      steps: [
        { title: "Collection", desc: "Sourcing raw materials from premium residential areas in Korea." },
        { title: "Sorting", desc: " rigorous manual quality check and grading by experts." },
        { title: "Baling", desc: "Hydraulic compression into export-standard bales." },
        { title: "Shipping", desc: "Loading into 20ft/40ft containers & customs documentation." }
      ]
    },
    contact: {
      title: "Start Your Order",
      desc: "Ready to import high-quality Korean used clothing? Contact OLDLOOK CORPORATION today. We are your reliable gateway to the Korean market.",
      form: {
        name: "Full Name",
        company: "Company Name",
        email: "Email Address",
        country: "Country / Port",
        size: "Container Size Interest",
        msg: "Message / Requirements",
        btn: "Send Inquiry"
      }
    }
  },
  ko: {
    nav: {
      about: "회사 소개",
      products: "취급 품목",
      process: "수출 절차",
      contact: "문의하기",
      quote: "견적 요청"
    },
    hero: {
      badge: "대한민국 1등 헌옷 수출 기업",
      title1: "최고 품질의 헌옷을",
      title2: "전 세계로 수출합니다",
      subtitle: "OLDLOOK CORPORATION은 엄격하게 선별된 헌옷, 신발, 가방을 전 세계 바이어에게 공급합니다. 성공적인 무역 파트너가 되어드리겠습니다.",
      cta_catalog: "제품 목록 보기",
      cta_quote: "컨테이너 견적 문의"
    },
    stats: {
      exp: "년 이상의 업력",
      countries: "개국 수출 달성",
      containers: "개 이상의 컨테이너",
      grade: "최고 등급 품질"
    },
    about: {
      sub: "OLDLOOK CORPORATION을 선택해야 하는 이유",
      title: "신뢰할 수 있는 헌옷 수출 파트너",
      cards: [
        {
          title: "엄격한 품질 관리",
          desc: "숙련된 전문가들이 직접 검수하여 A급 의류만을 선별합니다. 오염이나 손상이 심한 옷은 철저히 배제하여 바이어의 만족도를 높입니다."
        },
        {
          title: "전문적인 압축 베일",
          desc: "45kg, 80kg, 100kg 등 바이어의 요청에 맞춰 고압축 베일 작업을 진행하여 컨테이너 적재 효율을 극대화합니다."
        },
        {
          title: "트렌디한 K-패션",
          desc: "한국의 주요 도시에서 수거된 세련되고 유행을 타지 않는 디자인의 의류를 공급하여 현지 판매율을 보장합니다."
        }
      ]
    },
    products: {
      title: "수출 품목 소개",
      desc: "계절별, 소재별로 완벽하게 분류된 다양한 헌옷 품목을 확인해보세요.",
      link: "전체 카탈로그 다운로드",
      items: [
        { title: "여름 의류 (Summer Mix)", desc: "더운 기후에 적합한 얇고 화려한 색감의 의류 모음입니다.", tags: ['티셔츠', '원피스', '반바지'] },
        { title: "겨울 의류 (Winter Heavy)", desc: "보온성이 뛰어나고 상태가 좋은 겨울 자켓 및 코트류입니다.", tags: ['자켓', '코트', '니트'] },
        { title: "수출용 베일 (Bales)", desc: "수출 전용 포장재로 안전하게 압축된 베일 상품입니다.", tags: ['45kg', '80kg', '100kg'] },
        { title: "신발 및 가방", desc: "짝이 맞고 브랜드 가치가 있는 신발과 가방을 선별합니다.", tags: ['운동화', '가죽 가방', '샌들'] },
        { title: "아동복 (Kids)", desc: "전 세계적으로 수요가 높은 귀엽고 깨끗한 아동복입니다.", tags: ['남아', '여아', '유아'] },
        { title: "홈 텍스타일 (Rumus)", desc: "커튼, 침대 시트 등 가정용 섬유 제품입니다.", tags: ['커튼', '이불', '타월'] }
      ]
    },
    process: {
      title: "수출 진행 절차",
      sub: "한국 창고에서 현지 항구까지, 체계적인 시스템으로 운영됩니다.",
      steps: [
        { title: "수거 (Collection)", desc: "한국 내 프리미엄 주거 단지에서 원물 수거" },
        { title: "선별 (Sorting)", desc: "전문 인력에 의한 3단계 정밀 검수 및 등급 분류" },
        { title: "압축 (Baling)", desc: "수출 규격에 맞춘 유압식 압축 포장 작업" },
        { title: "선적 (Shipping)", desc: "컨테이너 적재 및 수출 서류(패킹 리스트 등) 준비" }
      ]
    },
    contact: {
      title: "수출 상담 문의",
      desc: "한국 헌옷 수입을 원하시나요? OLDLOOK CORPORATION에 문의하세요. 24시간 이내에 담당자가 답변해 드립니다.",
      form: {
        name: "성함 (Name)",
        company: "회사명 (Company)",
        email: "이메일 (Email)",
        country: "국가 / 항구 (Country)",
        size: "관심 컨테이너 규격",
        msg: "문의 내용 (Message)",
        btn: "문의 보내기"
      }
    }
  }
};

// Main Application Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en'); // Language State: 'en' or 'ko'

  const t = content[lang]; // Shortcut for current language content

  // Handle scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setLang(prev => prev === 'en' ? 'ko' : 'en');

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              O
            </div>
            <span className={`text-xl md:text-2xl font-bold ${scrolled ? 'text-blue-900' : 'text-white'}`}>
              OLDLOOK CORP.
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about-us" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-100'}`}>
              {t.nav.about}
            </a>
            <a href="#products" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-100'}`}>
              {t.nav.products}
            </a>
            <a href="#process" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-100'}`}>
              {t.nav.process}
            </a>
            <a href="#contact" className={`font-medium hover:text-blue-500 transition-colors ${scrolled ? 'text-gray-600' : 'text-gray-100'}`}>
              {t.nav.contact}
            </a>
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLang}
              className={`flex items-center gap-1 font-bold border rounded px-3 py-1 text-sm transition-colors ${scrolled ? 'border-gray-300 text-gray-600 hover:bg-gray-100' : 'border-white/30 text-white hover:bg-white/10'}`}
            >
              <Globe size={14} />
              {lang === 'en' ? 'KR' : 'EN'}
            </button>

            <a 
              href="#contact" 
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              {t.nav.quote}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
             <button 
              onClick={toggleLang}
              className={`font-bold border rounded px-2 py-1 text-xs ${scrolled ? 'border-gray-300 text-gray-800' : 'border-white/30 text-white'}`}
            >
              {lang === 'en' ? 'KR' : 'EN'}
            </button>
            <button className="text-2xl" onClick={toggleMenu}>
              {isMenuOpen ? <X className="text-gray-800" /> : <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-4">
            <a href="#about-us" className="text-lg font-medium text-gray-700 border-b border-gray-100 pb-2" onClick={() => setIsMenuOpen(false)}>{t.nav.about}</a>
            <a href="#products" className="text-lg font-medium text-gray-700 border-b border-gray-100 pb-2" onClick={() => setIsMenuOpen(false)}>{t.nav.products}</a>
            <a href="#process" className="text-lg font-medium text-gray-700 border-b border-gray-100 pb-2" onClick={() => setIsMenuOpen(false)}>{t.nav.process}</a>
            <a href="#contact" className="text-lg font-medium text-gray-700 border-b border-gray-100 pb-2" onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-blue-900/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>

        <div className="container mx-auto px-6 relative z-20 text-center text-white">
          <div className="inline-block px-4 py-1 border border-white/30 rounded-full bg-white/10 backdrop-blur-md mb-6">
            <span className="text-sm font-semibold tracking-wider uppercase">{t.hero.badge}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t.hero.title1} <br /> 
            <span className="text-blue-400">{t.hero.title2}</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#products" className="px-8 py-4 bg-white text-blue-900 rounded-lg font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              {t.hero.cta_catalog}
            </a>
            <a href="#contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/50">
              {t.hero.cta_quote} <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-900 text-white relative z-20 -mt-2">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <StatItem number="15+" label={t.stats.exp} />
          <StatItem number="50+" label={t.stats.countries} />
          <StatItem number="1000+" label={t.stats.containers} />
          <StatItem number="100%" label={t.stats.grade} />
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about-us" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">{t.about.sub}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t.about.title}</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={<Award size={48} className="text-blue-600" />}
              title={t.about.cards[0].title}
              desc={t.about.cards[0].desc}
            />
            <FeatureCard 
              icon={<Package size={48} className="text-blue-600" />}
              title={t.about.cards[1].title}
              desc={t.about.cards[1].desc}
            />
            <FeatureCard 
              icon={<Leaf size={48} className="text-blue-600" />}
              title={t.about.cards[2].title}
              desc={t.about.cards[2].desc}
            />
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section id="products" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.products.title}</h2>
              <p className="text-gray-600 max-w-xl">
                {t.products.desc}
              </p>
            </div>
            <a href="#contact" className="hidden md:flex items-center gap-2 text-blue-600 font-bold hover:underline mt-4 md:mt-0">
              {t.products.link} <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard 
              image="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              itemData={t.products.items[0]}
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              itemData={t.products.items[1]}
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              itemData={t.products.items[2]}
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              itemData={t.products.items[3]}
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              itemData={t.products.items[4]}
            />
            <ProductCard 
              image="https://images.unsplash.com/photo-1528821128474-27f963b062bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              itemData={t.products.items[5]}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t.process.title}</h2>
            <p className="text-gray-600 mt-4">{t.process.sub}</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {t.process.steps.map((step, idx) => (
                <ProcessStep key={idx} number={`0${idx+1}`} title={step.title} desc={step.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.contact.title}</h2>
                <p className="text-gray-600 text-lg">
                  {t.contact.desc}
                </p>
              </div>

              <div className="space-y-6">
                <ContactItem icon={<Phone />} title="Call / WhatsApp" content="+82-10-1234-5678" />
                <ContactItem icon={<Mail />} title="Email" content="export@oldlookcorp.com" />
                <ContactItem icon={<Truck />} title="Warehouse" content="Gyeonggi-do, South Korea" />
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:w-2/3 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Inquiry Sent! We will contact you shortly.'); }}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.name}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.company}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="Your Business Ltd." />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.email}</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="john@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.country}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="e.g. Lagos, Nigeria" required />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.size}</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
                    <option>20ft Container</option>
                    <option>40ft High Cube Container</option>
                    <option>Less than Container Load (Sample)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t.contact.form.msg}</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" placeholder="..."></textarea>
                </div>

                <button type="submit" className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
                  {t.contact.form.btn}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-white">OLDLOOK CORPORATION</span>
            <p className="mt-2 text-sm">Korea Used Clothing Exporter | Business Registration No: 123-45-67890</p>
            <p className="mt-1 text-sm">© 2024 OLDLOOK Corp. All rights reserved.</p>
          </div>
          <div className="flex gap-6">
            <div className="flex gap-4 ml-4">
               {/* Social placeholders */}
               <Globe size={20} className="hover:text-blue-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Sub-components for cleaner code
function StatItem({ number, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-4xl md:text-5xl font-bold mb-2">{number}</span>
      <span className="text-blue-200 uppercase text-sm tracking-wider">{label}</span>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
      <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

function ProductCard({ image, itemData }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
        <img src={image} alt={itemData.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute bottom-4 left-4 z-20">
          <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Grade A</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">{itemData.title}</h3>
        <p className="text-gray-600 mb-4 text-sm min-h-[40px]">{itemData.desc}</p>
        <div className="flex flex-wrap gap-2">
          {itemData.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-md">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, desc }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center relative z-20 border-t-4 border-blue-600">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto -mt-12 mb-4 border-4 border-blue-50">
        {number}
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function ContactItem({ icon, title, content }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}
