import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Поддержка предпринимательства в 2024 году",
      description: "Новые меры поддержки малого и среднего бизнеса в Ленинградской области",
      image: "/img/bce792e1-ee05-4be6-8d2f-a61e876a41ee.jpg",
      link: "/news/1"
    },
    {
      id: 2,
      title: "Региональная программа развития бизнеса",
      description: "Льготное кредитование и субсидии для развития предпринимательства",
      image: "/img/8273dc53-a5e0-470b-9eff-a591c34a9257.jpg",
      link: "/news/2"
    },
    {
      id: 3,
      title: "Цифровизация госуслуг для бизнеса",
      description: "Упрощение процедур взаимодействия предпринимателей с органами власти",
      image: "/img/bce792e1-ee05-4be6-8d2f-a61e876a41ee.jpg",
      link: "/news/3"
    }
  ];

  const news = [
    {
      date: "15 марта 2024",
      title: "Встреча с представителями малого бизнеса",
      description: "Обсуждение актуальных вопросов развития предпринимательства",
      image: "/img/8273dc53-a5e0-470b-9eff-a591c34a9257.jpg"
    },
    {
      date: "12 марта 2024",
      title: "Новые льготы для IT-предпринимателей",
      description: "Расширение мер поддержки информационных технологий",
      image: "/img/8273dc53-a5e0-470b-9eff-a591c34a9257.jpg"
    },
    {
      date: "8 марта 2024",
      title: "Семинар по налоговому планированию",
      description: "Практические рекомендации по оптимизации налоговых обязательств",
      image: "/img/8273dc53-a5e0-470b-9eff-a591c34a9257.jpg"
    }
  ];

  const usefulLinks = [
    {
      title: "Портал госуслуг",
      description: "Получение государственных услуг в электронном виде",
      icon: "Globe",
      image: "/img/bce792e1-ee05-4be6-8d2f-a61e876a41ee.jpg"
    },
    {
      title: "Налоговая служба",
      description: "Подача отчетности и получение справок",
      icon: "FileText",
      image: "/img/bce792e1-ee05-4be6-8d2f-a61e876a41ee.jpg"
    },
    {
      title: "Росреестр",
      description: "Регистрация недвижимости и земельных участков",
      icon: "Building",
      image: "/img/bce792e1-ee05-4be6-8d2f-a61e876a41ee.jpg"
    },
    {
      title: "Роспотребнадзор",
      description: "Получение разрешений и лицензий",
      icon: "Shield",
      image: "/img/bce792e1-ee05-4be6-8d2f-a61e876a41ee.jpg"
    }
  ];

  const handleSlideClick = (link: string) => {
    // Здесь будет переход к новости
    console.log('Переход к новости:', link);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/img/bce792e1-ee05-4be6-8d2f-a61e876a41ee.jpg" 
                alt="Герб Ленинградской области" 
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
              <div>
                <h1 className="text-sm sm:text-lg font-bold text-gray-800 leading-tight">
                  Уполномоченный по защите прав предпринимателей
                </h1>
                <p className="text-xs text-gray-600 hidden sm:block">в Ленинградской области</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-red-600 font-medium">Главная</a>
              <a href="/about" className="text-gray-700 hover:text-red-600">О нас</a>
              <a href="/news" className="text-gray-700 hover:text-red-600">Новости</a>
              <a href="/appeal" className="text-gray-700 hover:text-red-600">Как обратиться</a>
              <a href="/contacts" className="text-gray-700 hover:text-red-600">Контакты</a>
              <div className="flex items-center">
                <Icon name="Search" size={16} className="text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Поиск" 
                  className="border border-gray-300 rounded px-3 py-1 text-sm w-32"
                />
              </div>
              <Button className="bg-red-600 text-white px-4 py-2 hover:bg-red-700 font-medium text-sm">
                Подать обращение
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon name="Menu" size={24} className="text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-3">
                <a href="/" className="text-gray-700 hover:text-red-600 py-2">Главная</a>
                <a href="/about" className="text-gray-700 hover:text-red-600 py-2">О нас</a>
                <a href="/news" className="text-gray-700 hover:text-red-600 py-2">Новости</a>
                <a href="/appeal" className="text-gray-700 hover:text-red-600 py-2">Как обратиться</a>
                <a href="/contacts" className="text-gray-700 hover:text-red-600 py-2">Контакты</a>
                <div className="flex items-center py-2">
                  <Icon name="Search" size={16} className="text-gray-500 mr-2" />
                  <input 
                    type="text" 
                    placeholder="Поиск" 
                    className="border border-gray-300 rounded px-3 py-1 text-sm flex-1"
                  />
                </div>
                <Button className="bg-red-600 text-white hover:bg-red-700 w-full">
                  Подать обращение
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Slider */}
      <section className="relative bg-gray-50">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden rounded-lg">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-500 cursor-pointer ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
                onClick={() => handleSlideClick(slide.link)}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end">
                  <div className="text-white p-4 sm:p-6 lg:p-8 w-full">
                    <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">{slide.title}</h2>
                    <p className="text-sm sm:text-base lg:text-lg mb-4 opacity-90">{slide.description}</p>
                    <Button 
                      className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 text-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSlideClick(slide.link);
                      }}
                    >
                      Читать новость
                    </Button>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Slider Navigation */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Ombudsman */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="w-full max-w-md lg:max-w-none">
              <img 
                src="/img/9e80704e-7675-45f7-b8b9-4c105dadddb4.jpg" 
                alt="Уполномоченный по защите прав предпринимателей" 
                className="rounded-lg shadow-lg w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                В каких случаях обратиться к Уполномоченному?
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm sm:text-base">
                    Нарушение прав предпринимателей государственными органами
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm sm:text-base">
                    Незаконные проверки и административное давление
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm sm:text-base">
                    Коррупционные проявления в отношении бизнеса
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-sm sm:text-base">
                    Нарушение процедур государственных закупок
                  </p>
                </div>
              </div>
              <Button className="bg-red-600 text-white px-6 py-3 hover:bg-red-700 font-medium w-full sm:w-auto">
                Подать обращение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">Новости</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {news.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[5/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 sm:p-6">
                  <p className="text-xs sm:text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="font-bold text-gray-800 mb-3 text-sm sm:text-base">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                    Читать далее →
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button className="bg-blue-600 text-white px-6 py-3 hover:bg-blue-700">
              Все новости
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">Наши успехи</h2>
          <div className="bg-gray-50 rounded-lg p-6 sm:p-8 lg:p-12">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Мы помогли 230 предпринимателей в 2024 году
              </h3>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8">
                Решили 95% обращений в пользу бизнеса
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">156</div>
                  <p className="text-gray-700 text-sm sm:text-base">Решенных споров</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">₽28М</div>
                  <p className="text-gray-700 text-sm sm:text-base">Сохранено средств бизнеса</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">74</div>
                  <p className="text-gray-700 text-sm sm:text-base">Отмененных проверок</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-8 sm:py-12 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">Полезные ссылки</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usefulLinks.map((link, index) => (
              <Card key={index} className="p-4 sm:p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center mb-4">
                  <img 
                    src={link.image} 
                    alt={link.title} 
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mr-3 sm:mr-4"
                  />
                  <Icon name={link.icon as any} size={20} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">{link.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{link.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts with Map */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 sm:mb-12 text-center">Контактная информация</h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={20} className="text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Адрес</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    191311, г. Санкт-Петербург, ул. Смольного, д. 3, лит. А
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Телефон</h3>
                  <p className="text-gray-600 text-sm sm:text-base">+7 (812) 539-73-81</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                  <p className="text-gray-600 text-sm sm:text-base">ombudsman@lenobl.ru</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={20} className="text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Часы работы</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Пн-Пт: 9:00-18:00<br />
                    Сб-Вс: выходной
                  </p>
                </div>
              </div>
            </div>
            <div className="h-64 sm:h-80 lg:h-96">
              <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=30.1%2C59.8%2C30.5%2C60.0&amp;layer=mapnik&amp;marker=59.9%2C30.3"
                width="100%" 
                height="100%" 
                style={{border: 0}}
                loading="lazy"
                title="Карта Санкт-Петербурга"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="font-bold mb-4">Уполномоченный</h3>
              <p className="text-gray-300 text-sm">
                по защите прав предпринимателей в Ленинградской области
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-gray-300 hover:text-white">Главная</a></li>
                <li><a href="/about" className="text-gray-300 hover:text-white">О нас</a></li>
                <li><a href="/news" className="text-gray-300 hover:text-white">Новости</a></li>
                <li><a href="/appeal" className="text-gray-300 hover:text-white">Как обратиться</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+7 (812) 539-73-81</li>
                <li>ombudsman@lenobl.ru</li>
                <li>г. Санкт-Петербург, ул. Смольного, 3</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Важные ссылки</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="/anticorruption" className="text-red-400 hover:text-red-300 font-medium">
                    Противодействие коррупции
                  </a>
                </li>
                <li><a href="/accessibility" className="text-gray-300 hover:text-white">Доступная среда</a></li>
                <li><a href="/sitemap" className="text-gray-300 hover:text-white">Карта сайта</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Уполномоченный по защите прав предпринимателей в Ленинградской области. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;