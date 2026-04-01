import { Link } from 'react-router-dom';
import { ArrowRight, Building2, UtensilsCrossed, ChefHat, CheckCircle, TrendingUp, DollarSign, Clock, BarChart3, LayoutGrid, Store } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO, { pageSEO } from '../components/SEO';

export default function Solutions() {
  const { t } = useTranslation(['solutions', 'common']);

  const solutions = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: t('solutions:officeTitle'),
      description: t('solutions:officeDesc'),
      highlights: t('solutions:officeHighlights', { returnObjects: true }) as string[],
      case: t('solutions:officeCase'),
    },
    {
      icon: <LayoutGrid className="w-8 h-8" />,
      title: t('solutions:chainTitle'),
      description: t('solutions:chainDesc'),
      highlights: t('solutions:chainHighlights', { returnObjects: true }) as string[],
      case: t('solutions:chainCase'),
    },
    {
      icon: <Store className="w-8 h-8" />,
      title: t('solutions:retailTitle'),
      description: t('solutions:retailDesc'),
      highlights: t('solutions:retailHighlights', { returnObjects: true }) as string[],
      case: t('solutions:retailCase'),
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: t('solutions:kitchenTitle'),
      description: t('solutions:kitchenDesc'),
      highlights: t('solutions:kitchenHighlights', { returnObjects: true }) as string[],
      case: t('solutions:kitchenCase'),
    },
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: t('solutions:benefitTitle1'),
      value: '40%',
      desc: t('solutions:benefitDesc1'),
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t('solutions:benefitTitle2'),
      value: '60%',
      desc: t('solutions:benefitDesc2'),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t('solutions:benefitTitle3'),
      value: '50%',
      desc: t('solutions:benefitDesc3'),
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: t('solutions:benefitTitle4'),
      value: '99%',
      desc: t('solutions:benefitDesc4'),
    },
  ];

  const customization = [
    { title: t('solutions:value1Title'), desc: t('solutions:value1Desc') },
    { title: t('solutions:value2Title'), desc: t('solutions:value2Desc') },
    { title: t('solutions:value3Title'), desc: t('solutions:value3Desc') },
    { title: t('solutions:value4Title'), desc: t('solutions:value4Desc') },
  ];

  const process = [
    { step: '01', title: t('solutions:step1Title'), desc: t('solutions:step1Desc') },
    { step: '02', title: t('solutions:step2Title'), desc: t('solutions:step2Desc') },
    { step: '03', title: t('solutions:step3Title'), desc: t('solutions:step3Desc') },
    { step: '04', title: t('solutions:step4Title'), desc: t('solutions:step4Desc') },
  ];

  return (
    <>
      <SEO {...pageSEO.solutions} />
      <main className="pt-20">

      {/* Hero */}
      <section className="section-padding tech-gradient grid-bg">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium mb-5 backdrop-blur-sm">
              <UtensilsCrossed className="w-4 h-4" />
              {t('solutions:badge')}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t('solutions:heroTitle')}</h1>
            <p className="text-slate-400 text-lg">
              {t('solutions:heroDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-10 bg-white border-y border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-center gap-4 px-4">
                <div className="w-10 h-10 bg-cyan-50 text-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-800 leading-none">{item.value}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-3">{t('solutions:sceneTitle')}</h2>
            <p className="text-slate-500">{t('solutions:sceneDesc')}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-7 hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-cyan-50 text-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-100 transition-colors">
                    {solution.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{solution.title}</h3>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">{solution.description}</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {Array.isArray(solution.highlights) && solution.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-100 pt-4">
                  <p className="text-xs text-slate-400 italic leading-relaxed">
                    <span className="text-cyan-600 not-italic font-medium">{t('common:caseLabel')} · </span>
                    {solution.case}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Value + Service Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                <span className="border-l-2 border-cyan-500 pl-3">{t('solutions:valueTitle')}</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {customization.map((item, index) => (
                  <div key={index} className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-cyan-300 hover:bg-cyan-50/30 transition-colors">
                    <h5 className="font-semibold text-slate-800 mb-2 text-sm">{item.title}</h5>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                <span className="border-l-2 border-cyan-500 pl-3">{t('solutions:processTitle')}</span>
              </h2>
              <div className="space-y-4">
                {process.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-100 border border-slate-200 text-slate-600 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {item.step}
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-3">
                        <span className="text-slate-800 font-medium text-sm">{item.title}</span>
                        {index < process.length - 1 && (
                          <div className="flex-1 h-px bg-slate-200"></div>
                        )}
                      </div>
                      <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('solutions:ctaTitle')}</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            {t('solutions:ctaDesc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-cyan-500 text-slate-950 font-semibold rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/30 cursor-pointer"
          >
            {t('solutions:bookConsult')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

    </main>
    </>
  );
}
