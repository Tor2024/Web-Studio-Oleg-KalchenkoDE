import Header from './components/Header.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Web Studio Oleg Kalchenko
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Создание современных веб-приложений и сайтов
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Связаться со мной
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Услуги</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Веб-разработка</h3>
              <p className="text-gray-600">Создание современных веб-приложений с использованием React, Node.js и других технологий</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">UI/UX Дизайн</h3>
              <p className="text-gray-600">Проектирование пользовательского интерфейса и опыта взаимодействия</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">SEO Оптимизация</h3>
              <p className="text-gray-600">Оптимизация сайтов для поисковых систем для лучшего ранжирования</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 Web Studio Oleg Kalchenko. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
