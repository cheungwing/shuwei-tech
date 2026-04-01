import { Link } from 'react-router-dom';
import { LayoutGrid, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation(['footer', 'common', 'nav']);

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <LayoutGrid className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">{t('common:brand')}</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              {t('footer:description')}
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-3">{t('footer:products')}</h4>
            <ul className="space-y-2">
              <li><Link to="/products/1" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors">{t('products:product1.name')}</Link></li>
              <li><Link to="/products/2" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors">{t('products:product2.name')}</Link></li>
              <li><Link to="/products/4" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors">{t('products:product4.name')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-3">{t('footer:support')}</h4>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors">{t('nav:solutions')}</Link></li>
              <li><Link to="/about" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors">{t('nav:about')}</Link></li>
              <li><Link to="/contact" className="text-sm text-slate-500 hover:text-cyan-400 transition-colors">{t('nav:contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium text-sm mb-3">{t('footer:contactTitle')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:400-888-6666" className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4 text-cyan-500" />
                  400-888-6666
                </a>
              </li>
              <li>
                <a href="mailto:contact@shuwei.tech" className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 text-cyan-500" />
                  contact@shuwei.tech
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-cyan-500 flex-shrink-0 mt-0.5" />
                <span>{t('contact:addressContent')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/60 text-center">
          <p className="text-xs text-slate-600">
            {t('footer:copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
