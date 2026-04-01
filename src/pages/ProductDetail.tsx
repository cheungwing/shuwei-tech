import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, Flame, Wind, Droplets, Shield, Zap, Ruler, Weight, Power } from 'lucide-react';
import SEO, { pageSEO } from '../components/SEO';

// 获取产品图片 - 每个产品对应指定图片
const getProductImages = (productId: number): string[] => {
  const imageMap: Record<number, string[]> = {
    1: ['/images/slide10_img21.png'], // ChefMate 360 九宫格智能炒菜机
    2: ['/images/slide07_img16.png'], // CookMate 360 智能膳食小炒机
    3: ['/images/slide18_img40.png'], // StirMaticX 炫炒大师
    4: ['/images/slide24_img53.png'], // Instachef 无人餐饮零售柜
    5: ['/images/123.png'], // 全自动咖啡机 C1
    6: ['/images/456.png'], // 智能自动煎蛋机 E1
  };
  
  return imageMap[productId] || ['/images/slide01_img1.png'];
};

const productsData = [
  {
    id: 1,
    name: 'ChefMate 360 九宫格智能炒菜机',
    category: '炒菜系列',
    price: '¥39,800起',
    tags: ['商用级', '爆款', '3分钟9道菜'],
    description: 'ChefMate 360 九宫格智能炒菜机是数味科技的核心产品，采用自研物联网技术，精确控制温度、时间，实现高效、标准化烹饪。3分钟可同时炒制9道菜，大幅提升出餐效率，降低人工成本。',
    features: [
      '3/6/9/12宫格多规格可选，满足不同规模需求',
      '360°翻转还原大厨颠锅技巧，口感更佳',
      '无油烟免清洗，降低运营成本',
      '全冷链半成品配套，食材有保障',
      '支持云端菜谱同步，持续更新',
      '智能温控系统，±1°C精准控温',
      '一键启动，操作简单，无需专业厨师',
      '物联网远程监控，实时掌握设备状态',
      '自动清洗功能，节省人工清洁时间',
    ],
    specifications: [
      { label: '额定功率', value: '12KW - 16KW', icon: <Power className="w-5 h-5" /> },
      { label: '工作电压', value: '380V/50Hz', icon: <Zap className="w-5 h-5" /> },
      { label: '外观尺寸', value: '1054×518×850mm (9宫格)', icon: <Ruler className="w-5 h-5" /> },
      { label: '设备重量', value: '约100kg', icon: <Weight className="w-5 h-5" /> },
      { label: '工作噪音', value: '≤50dB', icon: <Wind className="w-5 h-5" /> },
      { label: '防水等级', value: 'IPX4', icon: <Droplets className="w-5 h-5" /> },
      { label: '安全认证', value: 'CE/CQC', icon: <Shield className="w-5 h-5" /> },
      { label: '加热方式', value: '电磁感应', icon: <Flame className="w-5 h-5" /> },
    ],
    suitable: '连锁餐饮、企业食堂、快餐店、中央厨房',
    images: getProductImages(1),
    gridModels: [
      { type: '3宫格', size: '512×518×850mm', power: '4KW', voltage: '220V', weight: '约50kg', pots: '3', price: '¥39,800' },
      { type: '6宫格', size: '783×518×850mm', power: '8KW', voltage: '220V', weight: '约75kg', pots: '6', price: '¥58,800' },
      { type: '9宫格', size: '1054×518×850mm', power: '12KW', voltage: '380V', weight: '约100kg', pots: '9', price: '¥78,800' },
      { type: '12宫格', size: '1325×518×850mm', power: '16KW', voltage: '380V', weight: '约125kg', pots: '12', price: '¥98,800' },
    ],
  },
  {
    id: 2,
    name: 'CookMate 360 智能膳食小炒机',
    category: '炒菜系列',
    price: '¥18,800',
    tags: ['商用级', '速食'],
    description: 'CookMate 360 智能膳食小炒机专为写字楼、便利店等场景设计，体积小巧但功能强大。支持扫码点餐，3分钟快速出餐，是快餐场景的理想选择。',
    features: [
      '高精度控制温度与时长，确保菜品品质',
      '钣金与优质工程塑料外壳，耐用美观',
      '支持4G/WIFI云端菜谱同步',
      '扫码点餐，3分钟出餐',
      '占地面积小，适合空间有限的场所',
      '低噪音设计，不影响办公环境',
      '智能保温功能，保持菜品温度',
      '多种菜品预设，一键切换',
    ],
    specifications: [
      { label: '额定功率', value: '3KW', icon: <Power className="w-5 h-5" /> },
      { label: '工作电压', value: '220V/50Hz', icon: <Zap className="w-5 h-5" /> },
      { label: '外观尺寸', value: '450×420×650mm', icon: <Ruler className="w-5 h-5" /> },
      { label: '设备重量', value: '约35kg', icon: <Weight className="w-5 h-5" /> },
      { label: '工作噪音', value: '≤45dB', icon: <Wind className="w-5 h-5" /> },
      { label: '防水等级', value: 'IPX3', icon: <Droplets className="w-5 h-5" /> },
      { label: '安全认证', value: 'CQC', icon: <Shield className="w-5 h-5" /> },
      { label: '加热方式', value: '电磁感应', icon: <Flame className="w-5 h-5" /> },
    ],
    suitable: '写字楼、便利店、园区食堂、小型快餐店',
    images: getProductImages(2),
  },
  {
    id: 3,
    name: 'StirMaticX 炫炒大师',
    category: '炒菜系列',
    price: '¥28,800',
    tags: ['专业级', '生投技术'],
    description: 'StirMaticX 炫炒大师采用创新的生投分步投料技术，精准把握食材入锅黄金时间，还原传统炒锅的火候掌控，适合对菜品品质有更高要求的餐饮场景。',
    features: [
      '生投分步投料，把握食材入锅黄金时间',
      '高效电磁感应，升温速度快',
      '小白秒变大厨，内置海量菜谱',
      '0.3㎡占地，极简安装',
      '2锅/4锅多种配置可选',
      '智能翻炒，无需人工干预',
      '模拟传统炒锅火候，口感更佳',
      '支持自定义菜谱编程',
    ],
    specifications: [
      { label: '额定功率', value: '6KW - 12KW', icon: <Power className="w-5 h-5" /> },
      { label: '工作电压', value: '220V/380V', icon: <Zap className="w-5 h-5" /> },
      { label: '外观尺寸', value: '600×550×800mm (2锅)', icon: <Ruler className="w-5 h-5" /> },
      { label: '设备重量', value: '约60kg', icon: <Weight className="w-5 h-5" /> },
      { label: '工作噪音', value: '≤48dB', icon: <Wind className="w-5 h-5" /> },
      { label: '防水等级', value: 'IPX4', icon: <Droplets className="w-5 h-5" /> },
      { label: '安全认证', value: 'CE/CQC', icon: <Shield className="w-5 h-5" /> },
      { label: '加热方式', value: '电磁感应', icon: <Flame className="w-5 h-5" /> },
    ],
    suitable: '高端餐厅、酒店会所、精品餐饮',
    images: getProductImages(3),
  },
  {
    id: 4,
    name: 'Instachef 无人餐饮零售柜',
    category: '零售系列',
    price: '¥88,800',
    tags: ['无人零售', '24h营业'],
    description: 'Instachef 无人餐饮零售柜是面向新零售场景的创新产品，实现24小时无人值守运营。主柜可存放108份菜品，每小时产能达48份，选址灵活，投资回报快。',
    features: [
      '主柜存放108份，每小时产48份菜',
      '无上下水限制，商场医院合规入驻',
      '云端运营：24小时无人值守',
      '全自动打包，选址灵活',
      '2平米实现24小时无人化',
      '智能库存管理，自动补货提醒',
      '支持多种支付方式',
      '远程监控运营数据',
    ],
    specifications: [
      { label: '额定功率', value: '5KW', icon: <Power className="w-5 h-5" /> },
      { label: '工作电压', value: '220V/50Hz', icon: <Zap className="w-5 h-5" /> },
      { label: '外观尺寸', value: '1200×800×1950mm', icon: <Ruler className="w-5 h-5" /> },
      { label: '设备重量', value: '约280kg', icon: <Weight className="w-5 h-5" /> },
      { label: '库存容量', value: '108份', icon: <Wind className="w-5 h-5" /> },
      { label: '防水等级', value: 'IPX4', icon: <Droplets className="w-5 h-5" /> },
      { label: '安全认证', value: 'CE/CQC', icon: <Shield className="w-5 h-5" /> },
      { label: '支付方式', value: '扫码支付', icon: <Flame className="w-5 h-5" /> },
    ],
    suitable: '商场、医院、写字楼、社区、学校',
    images: getProductImages(4),
  },
  {
    id: 5,
    name: '全自动咖啡机 C1',
    category: '饮品系列',
    price: '¥18,800',
    tags: ['商用级', '爆款'],
    description: '全自动咖啡机 C1 采用意大利进口泵浦，意式现磨浓缩，30秒快速出杯。精准控温±1°C，确保每一杯咖啡的品质稳定。',
    features: [
      '意式现磨浓缩，口感醇厚',
      '30秒快速出杯，高效服务',
      '精准控温（±1°C）',
      '一键清洗提醒，维护方便',
      '支持多种咖啡豆',
      '大容量豆仓和水箱',
      '多种咖啡口味可选',
      '自动奶泡系统',
    ],
    specifications: [
      { label: '额定功率', value: '1.5KW', icon: <Power className="w-5 h-5" /> },
      { label: '工作电压', value: '220V/50Hz', icon: <Zap className="w-5 h-5" /> },
      { label: '外观尺寸', value: '400×500×650mm', icon: <Ruler className="w-5 h-5" /> },
      { label: '设备重量', value: '约25kg', icon: <Weight className="w-5 h-5" /> },
      { label: '水箱容量', value: '4L', icon: <Wind className="w-5 h-5" /> },
      { label: '豆仓容量', value: '1kg', icon: <Droplets className="w-5 h-5" /> },
      { label: '安全认证', value: 'CE/CQC', icon: <Shield className="w-5 h-5" /> },
      { label: '泵浦压力', value: '15Bar', icon: <Flame className="w-5 h-5" /> },
    ],
    suitable: '咖啡厅、办公室、酒店、便利店',
    images: getProductImages(5),
  },
  {
    id: 6,
    name: '智能自动煎蛋机 E1',
    category: '早餐系列',
    price: '¥8,800',
    tags: ['家用级', '新品'],
    description: '智能自动煎蛋机 E1 专为早餐场景设计，自动打蛋、倒蛋液，智能控温自动翻面。支持溏心、全熟、煎蛋卷多种模式，是酒店早餐区的理想选择。',
    features: [
      '自动打蛋、倒蛋液，解放双手',
      '智能控温，自动翻面',
      '支持溏心/全熟/煎蛋卷',
      '不粘涂层，易清洗',
      '小巧不占地',
      '出蛋速度快，每小时60个',
      '可编程定时功能',
      '食品安全材质',
    ],
    specifications: [
      { label: '额定功率', value: '1.2KW', icon: <Power className="w-5 h-5" /> },
      { label: '工作电压', value: '220V/50Hz', icon: <Zap className="w-5 h-5" /> },
      { label: '外观尺寸', value: '350×280×320mm', icon: <Ruler className="w-5 h-5" /> },
      { label: '设备重量', value: '约8kg', icon: <Weight className="w-5 h-5" /> },
      { label: '产能', value: '60个/小时', icon: <Wind className="w-5 h-5" /> },
      { label: '蛋仓容量', value: '30个', icon: <Droplets className="w-5 h-5" /> },
      { label: '安全认证', value: 'CQC', icon: <Shield className="w-5 h-5" /> },
      { label: '加热方式', value: '电热', icon: <Flame className="w-5 h-5" /> },
    ],
    suitable: '酒店早餐区、食堂、家庭',
    images: getProductImages(6),
  },
];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = productsData.find(p => p.id === Number(id));

  if (!product) {
    return (
      <>
        <SEO title="产品未找到" description="抱歉，您访问的产品页面不存在。" />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">产品未找到</h1>
          <Link to="/products" className="text-blue-600 hover:underline">
            返回产品列表
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO {...pageSEO.productDetail(product.name)} />
      <main className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container-custom py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">首页</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-blue-600">产品中心</Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
              {product.images.length > 0 ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-contain bg-white"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/product-placeholder.jpg';
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  暂无图片
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-b border-gray-100 py-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-blue-600">{product.price}</span>
                  <span className="text-gray-500">起</span>
                </div>
                <p className="text-sm text-gray-500">
                  适用场景：{product.suitable}
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
                >
                  立即询价
                </Link>
                <button
                  onClick={() => navigate(-1)}
                  className="inline-flex items-center justify-center px-6 py-4 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  返回
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">产品特点</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl">
                <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">技术规格</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                  {spec.icon}
                </div>
                <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                <p className="font-semibold text-gray-900">{spec.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Models Table (Only for ChefMate) */}
      {product.gridModels && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">型号规格对比</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="px-6 py-4 text-left font-bold">机型型号</th>
                    <th className="px-6 py-4 text-left font-bold">外观尺寸</th>
                    <th className="px-6 py-4 text-left font-bold">额定功率</th>
                    <th className="px-6 py-4 text-left font-bold">电压</th>
                    <th className="px-6 py-4 text-left font-bold">锅/仓数</th>
                    <th className="px-6 py-4 text-left font-bold">重量</th>
                    <th className="px-6 py-4 text-left font-bold">价格</th>
                  </tr>
                </thead>
                <tbody>
                  {product.gridModels.map((model, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-6 py-4 font-bold text-blue-600">{model.type}</td>
                      <td className="px-6 py-4 text-gray-600">{model.size}</td>
                      <td className="px-6 py-4 text-gray-600">{model.power}</td>
                      <td className="px-6 py-4 text-gray-600">{model.voltage}</td>
                      <td className="px-6 py-4 text-gray-600">{model.pots}</td>
                      <td className="px-6 py-4 text-gray-600">{model.weight}</td>
                      <td className="px-6 py-4 font-bold text-blue-600">{model.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">想了解更多产品信息？</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            我们的专业团队将为您提供详细的产品介绍和定制化解决方案
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            联系我们
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
