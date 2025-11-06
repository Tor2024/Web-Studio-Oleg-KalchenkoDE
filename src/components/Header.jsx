function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            Web Studio Oleg
          </div>
          <div className="space-x-6">
            <a href="#home" className="text-gray-600 hover:text-gray-900">Главная</a>
            <a href="#services" className="text-gray-600 hover:text-gray-900">Услуги</a>
            <a href="#portfolio" className="text-gray-600 hover:text-gray-900">Портфолио</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Контакты</a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
