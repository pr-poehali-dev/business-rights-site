import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-xl font-bold text-gray-800">
                Уполномоченный по защите прав предпринимателей
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-primary">Главная</a>
              <a href="#" className="text-gray-700 hover:text-primary">О нас</a>
              <a href="#" className="text-gray-700 hover:text-primary">Новости</a>
              <a href="#" className="text-gray-700 hover:text-primary">Как обратиться</a>
              <a href="#" className="text-gray-700 hover:text-primary">Контакты</a>
              <Icon name="Search" size={20} className="text-gray-700 cursor-pointer" />
              <Button className="bg-primary text-white hover:bg-red-700">
                Подать обращение
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Slider */}
      <section className="relative bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-6">
                Последние события и кейсы
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                При помощи пути в развитие правовых основ с г.администрации
                в защите в прав венчестности при
              </p>
              <Button className="bg-primary text-white hover:bg-red-700">
                Подробнее
              </Button>
            </div>
            <div className="bg-gray-300 h-80 rounded-lg overflow-hidden">
              <img 
                src="/img/3a552bcc-58a8-46e3-9a91-ca1d66ed9d36.jpg" 
                alt="Последние события" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ombudsman Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
              <img 
                src="/img/27530d98-6ce4-4631-bfc0-9c1bcb503300.jpg" 
                alt="Уполномоченный по защите прав предпринимателей" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                В каких случаях обращаться к Уполномоченному?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>• Нарушение прав при ведении предпринимательской деятельности</p>
                <p>• Неправомерные действия органов власти</p>
                <p>• Вопросы административного регулирования</p>
                <p>• Защита от недобросовестной конкуренции</p>
              </div>
              <Button className="bg-primary text-white hover:bg-red-700 mt-8">
                Подать обращение
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Новости</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: "22 апреля 2024",
                title: "Новая мера поддержки бизнеса в регионе получила...",
                description: "Правового промена в положение пункта в благосочетание наёмных деятелей",
                image: "/placeholder.svg"
              },
              {
                date: "16 апреля 2024",
                title: "Встреча с предпринимателями в Торгово-промышленной...",
                description: "Отчетной деятелей верного вопросах примечал в 2-вестимую",
                image: "/placeholder.svg"
              },
              {
                date: "3 апреля 2024",
                title: "Уполномоченный принял участие в форуме",
                description: "О защите предпринимателя объединитель вопросах совещание",
                image: "/placeholder.svg"
              }
            ].map((news, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img 
                    src="/img/39b7fdf0-4975-46ca-bc46-47b5f1176ae9.jpg" 
                    alt={news.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="font-bold text-government-gray mb-3">{news.title}</h3>
                  <p className="text-gray-600">{news.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Наши успехи</h2>
          <div className="bg-gray-50 rounded-lg p-12">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-gray-800 mb-4">
                Мы помогли 230 предпринимателя в 2024 году
              </h3>
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Примеры успешных дел →
                </Button>
              </div>
            </div>
            <div className="mt-8 h-32 bg-white rounded-lg flex items-center justify-center">
              <div className="text-gray-500">Карта успехов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Полезные ссылки</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "Shield", title: "Защита прав", description: "Механизмы защиты" },
              { icon: "Briefcase", title: "Бизнес-ресурсы", description: "Полезная информация" },
              { icon: "Building2", title: "Государственные услуги", description: "Единый портал" },
              { icon: "Scale", title: "Правовая база", description: "Законодательство" }
            ].map((link, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-8">
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={link.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">{link.title}</h3>
                  <p className="text-gray-600 text-sm">{link.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Контактная информация</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">Адрес</h3>
                  <p className="text-gray-600">191124 г. Санкт-Петербург, ул. Правдинд, д. 4, корп. 316</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">Телефон</h3>
                  <p className="text-gray-600">+7 (812) 123-46-67</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">info@bizenoboi.ru</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-gray-800">Режим работы</h3>
                  <p className="text-gray-600">Пн—Пт 09:00-18:00</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.openstreetmap.org/export/embed.html?bbox=30.1%2C59.8%2C30.5%2C60.0&amp;layer=mapnik&amp;marker=59.9%2C30.3"
                width="100%" 
                height="100%" 
                style={{border: 0}}
                loading="lazy"
                title="Карта Санкт-Петербурга"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Главная</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">О службе</a></li>
                <li><a href="#" className="hover:text-white">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">О нас</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Структура</a></li>
                <li><a href="#" className="hover:text-white">Документы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Новости</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Архив новостей</a></li>
                <li><a href="#" className="hover:text-white">События</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Противодействие коррупции</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white text-red-300">Сообщить о коррупции</a></li>
                <li><a href="#" className="hover:text-white">Документы</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Уполномоченный по защите прав предпринимателей в Ленинградской области</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;