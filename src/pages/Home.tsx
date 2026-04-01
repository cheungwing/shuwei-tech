import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChefHat, Shield, Zap, Users, Award, LayoutGrid, Boxes, Sparkles, TrendingUp, Clock, CheckCircle2, Building2, Store, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const partners = [
  '叮咚买菜', '红荔村', '汉莎航空', '和府捞面', '缪氏川菜', '饭戒'
];

function AnimatedNumber({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setDisplayValue(value);
              clearInterval(timer);
            } else {
              setDisplayValue(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
}

export default function Home() {
  const { t } = useTranslation(['home', 'products', 'common']);

  const features = [
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: t('products:product1.name'),
      description: t('products:product1.desc'),
      highlight: t('products:product1.highlight'),
      color: 'from-cyan-500 to-blue-500',
      image: '/images/slide10_img21.png',
      link: '/products/1',
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: t('products:product2.name'),
      description: t('products:product2.desc'),
      highlight: t('products:product2.highlight'),
      color: 'from-purple-500 to-pink-500',
      image: '/images/slide07_img16.png',
      link: '/products/2',
    },
    {
      icon: <Boxes className="w-8 h-8" />,
      title: t('products:product4.name'),
      description: t('products:product4.desc'),
      highlight: t('products:product4.highlight'),
      color: 'from-orange-500 to-red-500',
      image: '/images/slide24_img53.png',
      link: '/products/4',
    },
  ];

  const advantages = [
    { icon: <Zap className="w-6 h-6" />, title: t('home:advantage1Title'), description: t('home:advantage1Desc') },
    { icon: <Shield className="w-6 h-6" />, title: t('home:advantage2Title'), description: t('home:advantage2Desc') },
    { icon: <Users className="w-6 h-6" />, title: t('home:advantage3Title'), description: t('home:advantage3Desc') },
    { icon: <Award className="w-6 h-6" />, title: t('home:advantage4Title'), description: t('home:advantage4Desc') },
  ];

  return (
    <>
      <SEO />
      <main>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="container-custom relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                {t('home:heroBadge')}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                {t('home:heroTitle1')}
                <span className="gradient-text block mt-2">{t('home:heroTitle2')}</span>
              </h1>
              <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">{t('home:heroDesc')}</p>
              <div className="flex flex-wrap gap-4 mb-12">
                <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-slate-950 font-semibold rounded-xl hover:bg-cyan-400 transition-all duration-300 cursor-pointer">
                  {t('home:exploreMatrix')}<ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-300 cursor-pointer">
                  {t('home:inquiryNow')}
                </Link>
              </div>
              <div className="flex flex-wrap gap-8">
                <div><div className="text-3xl font-bold text-white mb-1">2017</div><div className="text-slate-500 text-sm">{t('home:statYear')}</div></div>
                <div><div className="text-3xl font-bold text-white mb-1">220+</div><div className="text-slate-500 text-sm">{t('home:statPatents')}</div></div>
                <div><div className="text-3xl font-bold text-white mb-1">10+</div><div className="text-slate-500 text-sm">{t('home:statCuisines')}</div></div>
                <div><div className="text-3xl font-bold text-white mb-1">500+</div><div className="text-slate-500 text-sm">{t('home:statClients')}</div></div>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/50 shadow-2xl">
                <video controls loop muted playsInline className="w-full aspect-video object-cover"><source src="/videos/nine.mp4" type="video/mp4" /></video>
              </div>
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-cyan-500/90 backdrop-blur-sm rounded-lg text-slate-950 font-bold text-sm shadow-lg animate-float">{t('home:tagMeal')}</div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-lg text-white font-bold text-sm shadow-lg animate-float" style={{ animationDelay: '1s' }}>{t('home:tagPatents')}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white mb-2">{t('home:dataTitle')}</h2>
            <p className="text-slate-400">{t('home:dataDesc')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <TrendingUp className="w-6 h-6" />, value: 40, suffix: '%', label: t('home:costReduce'), color: 'text-green-400', bg: 'bg-green-500/10' },
              { icon: <Clock className="w-6 h-6" />, value: 60, suffix: '%', label: t('home:efficiencyUp'), color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { icon: <CheckCircle2 className="w-6 h-6" />, value: 99, suffix: '%', label: t('home:qualityRate'), color: 'text-purple-400', bg: 'bg-purple-500/10' },
              { icon: <Users className="w-6 h-6" />, value: 50, suffix: '%', label: t('home:laborSave'), color: 'text-orange-400', bg: 'bg-orange-500/10' },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-slate-900/50 hover:bg-slate-800/50 border border-slate-800 hover:border-slate-700 transition-all duration-300 group">
                <div className={`w-12 h-12 mx-auto mb-4 ${item.bg} ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>{item.icon}</div>
                <div className="text-3xl font-black text-white mb-1"><AnimatedNumber value={item.value} suffix={item.suffix} /></div>
                <div className="text-slate-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-xs font-medium mb-4"><Sparkles className="w-3 h-3" />{t('home:coreProducts')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t('home:productMatrixTitle')}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t('home:productMatrixDesc')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((product, index) => (
              <Link key={index} to={product.link} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer block">
                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                  <div className="absolute inset-0 flex items-center justify-center p-4"><img src={product.image} alt={product.title} className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300" /></div>
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${product.color}`}></div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">{product.title}</h3>
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full text-xs font-medium group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors whitespace-nowrap ml-2">{product.highlight}</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">{product.description}</p>
                  <div className="flex items-center text-cyan-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{t('common:learnMore')} <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" /></div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 bg-slate-800 text-white font-semibold rounded-xl hover:bg-slate-700 transition-all duration-300 cursor-pointer hover:shadow-lg">{t('home:viewAllProducts')}<ArrowRight className="w-4 h-4 ml-2" /></Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-xs font-medium mb-4"><Building2 className="w-3 h-3" />{t('home:solutionBadge')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t('home:solutionTitle')}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t('home:solutionDesc')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300"><Building2 className="w-7 h-7" /></div>
                <div><h3 className="text-xl font-bold text-slate-800 mb-2">{t('home:officeTitle')}</h3><p className="text-slate-500 text-sm leading-relaxed">{t('home:officeDesc')}</p></div>
              </div>
              <ul className="space-y-3 mb-6">{[t('home:officeHighlight1'), t('home:officeHighlight2'), t('home:officeHighlight3'), t('home:officeHighlight4')].map((item, idx) => (<li key={idx} className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />{item}</li>))}</ul>
              <div className="pt-4 border-t border-slate-200"><p className="text-xs text-slate-400 italic leading-relaxed"><span className="text-cyan-600 not-italic font-medium">{t('common:caseLabel')}</span>{t('home:officeCase')}</p></div>
            </div>
            <div className="group bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">
              <div className="flex items-start gap-4 mb-5">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300"><Store className="w-7 h-7" /></div>
                <div><h3 className="text-xl font-bold text-slate-800 mb-2">{t('home:retailTitle')}</h3><p className="text-slate-500 text-sm leading-relaxed">{t('home:retailDesc')}</p></div>
              </div>
              <ul className="space-y-3 mb-6">{[t('home:retailHighlight1'), t('home:retailHighlight2'), t('home:retailHighlight3'), t('home:retailHighlight4')].map((item, idx) => (<li key={idx} className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />{item}</li>))}</ul>
              <div className="pt-4 border-t border-slate-200"><p className="text-xs text-slate-400 italic leading-relaxed"><span className="text-purple-600 not-italic font-medium">{t('common:caseLabel')}</span>{t('home:retailCase')}</p></div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Link to="/solutions" className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 text-white font-semibold rounded-xl hover:bg-cyan-600 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/30">{t('home:viewMoreSolutions')}<ArrowRight className="w-4 h-4 ml-2" /></Link>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">{t('home:whyTitle')}</h2><p className="text-slate-500 max-w-2xl mx-auto">{t('home:whyDesc')}</p></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((item, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-cyan-200 hover:bg-cyan-50/30 transition-all duration-300">
                <div className="w-12 h-12 mb-4 bg-white text-cyan-500 rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300">{item.icon}</div>
                <h3 className="text-base font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0"><div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-10"><h2 className="text-2xl font-bold text-white mb-2">{t('home:partnerTitle')}</h2><p className="text-slate-400 text-sm">{t('home:partnerDesc')}</p></div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
            {partners.map((partner, index) => (<div key={index} className="text-lg font-medium text-slate-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-110" style={{ animationDelay: `${index * 0.1}s` }}>{partner}</div>))}
          </div>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden bg-gradient-to-br from-cyan-600 to-blue-700">
        <div className="absolute inset-0"><div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div><div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('home:ctaTitle')}</h2>
          <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">{t('home:ctaDesc')}</p>
          <Link to="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-xl hover:bg-cyan-50 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl hover:scale-105">{t('common:consultNow')}<ArrowRight className="w-5 h-5 ml-2" /></Link>
        </div>
      </section>
    </main>
    </>
  );
}
