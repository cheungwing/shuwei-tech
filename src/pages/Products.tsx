import { Link } from 'react-router-dom';
import { ArrowRight, Check, LayoutGrid, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const getProductData = (t: any) => {
  const features = (key: string) => {
    const val = t(key, { returnObjects: true });
    return Array.isArray(val) ? val : [];
  };
  const tags = (key: string) => {
    const val = t(key, { returnObjects: true });
    return Array.isArray(val) ? val : [];
  };
  return [
  {
    id: 1,
    name: t('products:product1.name'),
    category: t('products:product1.category'),
    price: t('products:product1.price'),
    tags: tags('products:product1.tags'),
    features: features('products:product1.features'),
    suitable: t('products:product1.suitable'),
    image: '/images/slide10_img21.png',
  },
  {
    id: 2,
    name: t('products:product2.name'),
    category: t('products:product2.category'),
    price: t('products:product2.price'),
    tags: tags('products:product2.tags'),
    features: features('products:product2.features'),
    suitable: t('products:product2.suitable'),
    image: '/images/slide07_img16.png',
  },
  {
    id: 3,
    name: t('products:product3.name'),
    category: t('products:product3.category'),
    price: t('products:product3.price'),
    tags: tags('products:product3.tags'),
    features: features('products:product3.features'),
    suitable: t('products:product3.suitable'),
    image: '/images/slide18_img40.png',
  },
  {
    id: 4,
    name: t('products:product4.name'),
    category: t('products:product4.category'),
    price: t('products:product4.price'),
    tags: tags('products:product4.tags'),
    features: features('products:product4.features'),
    suitable: t('products:product4.suitable'),
    image: '/images/slide24_img53.png',
  },
  {
    id: 5,
    name: t('products:product5.name'),
    category: t('products:product5.category'),
    price: t('products:product5.price'),
    tags: tags('products:product5.tags'),
    features: features('products:product5.features'),
    suitable: t('products:product5.suitable'),
    image: '/images/123.png',
  },
  {
    id: 6,
    name: t('products:product6.name'),
    category: t('products:product6.category'),
    price: t('products:product6.price'),
    tags: tags('products:product6.tags'),
    features: features('products:product6.features'),
    suitable: t('products:product6.suitable'),
    image: '/images/456.png',
  },
];
};

export default function Products() {
  const { t } = useTranslation(['products', 'common']);

  const products = getProductData(t);

  return (
    <>
      <SEO />
      <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('products:heroTitle')}</h1>
            <p className="text-lg text-slate-300">
              {t('products:heroDesc')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                {/* 产品图片区域 */}
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain bg-white"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  {/* 分类标签 */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-white/90 backdrop-blur text-slate-600 text-xs font-medium rounded shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                {/* 产品信息 */}
                <div className="flex-1 p-5 flex flex-col">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                    {product.name}
                  </h3>
                  
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-slate-500">
                        <Check className="w-3.5 h-3.5 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* 底部操作区 */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-lg font-bold text-slate-700">{product.price}</span>
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/products/${product.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-50 text-cyan-600 text-sm font-medium rounded-lg hover:bg-cyan-100 hover:text-cyan-700 transition-colors border border-cyan-200"
                      >
                        <Eye className="w-4 h-4" />
                        {t('common:viewDetails')}
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-slate-700 transition-colors"
                      >
                        {t('common:inquiry')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">{t('products:demoTitle')}</h2>
              <p className="text-slate-500">{t('products:demoDesc')}</p>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-900">
              <video 
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                aria-label="九宫格智能炒菜机演示视频"
              >
                <source src="/videos/nine.mp4" type="video/mp4" />
                {t('products:browserNotSupport')}
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <LayoutGrid className="w-16 h-16 mx-auto text-white mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">{t('products:notFoundTitle')}</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('products:notFoundDesc')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            {t('products:customConsult')}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
