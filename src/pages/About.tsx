import { Target, Eye, Award, Users, TrendingUp, Lightbulb, Handshake, ShieldCheck, Medal, Cpu, Utensils } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

export default function About() {
  const { t } = useTranslation('about');

  const milestones = [
    { year: '2017', event: t('milestones.2017') },
    { year: '2018', event: t('milestones.2018') },
    { year: '2019', event: t('milestones.2019') },
    { year: '2021', event: t('milestones.2021') },
    { year: '2023', event: t('milestones.2023') },
    { year: '2025', event: t('milestones.2025') },
    { year: '2026', event: t('milestones.2026') },
  ];

  const team = [
    { name: t('team1Name'), role: t('team1Role'), desc: t('team1Desc') },
    { name: t('team2Name'), role: t('team2Role'), desc: t('team2Desc') },
    { name: t('team3Name'), role: t('team3Role'), desc: t('team3Desc') },
    { name: t('team4Name'), role: t('team4Role'), desc: t('team4Desc') },
  ];

  const values = [
    { icon: <Lightbulb className="w-6 h-6" />, title: t('value1Title'), description: t('value1Desc') },
    { icon: <Handshake className="w-6 h-6" />, title: t('value2Title'), description: t('value2Desc') },
    { icon: <TrendingUp className="w-6 h-6" />, title: t('value3Title'), description: t('value3Desc') },
    { icon: <Users className="w-6 h-6" />, title: t('value4Title'), description: t('value4Desc') },
  ];

  const partners = [
    '叮咚买菜', '红荔村', '汉莎航空', '和府捞面', '缪氏川菜', '饭戒'
  ];

  const honors = [
    { icon: <Medal className="w-6 h-6" />, title: t('honor1Title'), subtitle: t('honor1Sub') },
    { icon: <Medal className="w-6 h-6" />, title: t('honor2Title'), subtitle: t('honor2Sub') },
    { icon: <ShieldCheck className="w-6 h-6" />, title: t('honor3Title'), subtitle: t('honor3Sub') },
  ];

  const stats = [
    { value: '220+', label: t('statPatents') },
    { value: '15+', label: t('statPCT') },
    { value: '5+', label: t('statBases') },
    { value: '10+', label: t('statCuisines') },
  ];

  return (
    <>
      <SEO />
      <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('heroTitle')}</h1>
            <p className="text-lg text-slate-300">
              {t('heroDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-black text-blue-600 mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('missionTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('missionDesc')}
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <div className="w-14 h-14 bg-slate-800 text-white rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('visionTitle')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {t('visionDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('timelineTitle')}</h2>
            <p className="text-gray-600">{t('timelineDesc')}</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-xl font-bold text-blue-600">{item.year}</span>
                </div>
                <div className="relative flex-shrink-0 w-4">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full"></div>
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-5 left-1/2 -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-gray-700">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Centers */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 mb-16">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                <Cpu className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('rdTitle')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t('rdDesc')}</p>
              <div className="text-sm text-blue-600 font-medium">{t('rdStat')}</div>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-200">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white mb-6 shadow-md">
                <Utensils className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('foodTitle')}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{t('foodDesc')}</p>
              <div className="text-sm text-green-600 font-medium">{t('foodStat')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-gray-400">{t('partnerTitle')}</h2>
            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {partners.map((partner, index) => (
                <div key={index} className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors cursor-pointer">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('valuesTitle')}</h2>
            <p className="text-gray-600">{t('valuesDesc')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honors */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('honorsTitle')}</h2>
            <p className="text-gray-600">{t('honorsDesc')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {honors.map((honor, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  {honor.icon}
                </div>
                <p className="font-medium text-gray-900 mb-1">{honor.title}</p>
                <p className="text-xs text-gray-500">{honor.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('teamTitle')}</h2>
            <p className="text-gray-600">{t('teamDesc')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-blue-600 mb-3">{member.role}</p>
                <p className="text-sm text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
    </>
  );
}
