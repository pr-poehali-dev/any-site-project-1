const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Добро пожаловать!</h1>
          <p className="text-xl text-muted-foreground">Это советы для БС</p>
        </div>
        
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border animate-fade-in hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Как апнуть про ранг против ботов?</h2>
            <p className="text-card-foreground leading-relaxed">
              Вы должны слить всех персов на 0 кубков и после этого будет изичненые типы попадаться
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border border-border animate-fade-in hover:shadow-md transition-shadow" style={{animationDelay: '0.1s'}}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Сделать свои пины</h2>
            <p className="text-card-foreground leading-relaxed mb-4">
              Создавайте собственные пины для игры
            </p>
            <a 
              href="https://pinmaker.supercell.com/en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Перейти к созданию пинов
            </a>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border border-border animate-fade-in hover:shadow-md transition-shadow" style={{animationDelay: '0.2s'}}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Как фармить победы 3 на 3</h2>
            <p className="text-card-foreground leading-relaxed">
              Это просто просто нужно скачать автокликер запустить его зайти в игру и настроить расположение автоклера на играть и кнопку стрельбы и все
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border border-border animate-fade-in hover:shadow-md transition-shadow" style={{animationDelay: '0.3s'}}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Как сделать анскилов до 2к?</h2>
            <p className="text-card-foreground leading-relaxed">
              Меняете регион на Австралию. Играйте с 12 ночи до 4 ночи 3-4ч по МСК! На 1 персе захват кристаллов примерно после 3 ч и все готово
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border border-border animate-fade-in hover:shadow-md transition-shadow" style={{animationDelay: '0.4s'}}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Халява</h2>
            <div className="space-y-3">
              <a 
                href="https://clck.ru/3ADWxE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                🤡 Клоун
              </a>
              <a 
                href="https://clck.ru/3ADWxV" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                📌 Пин со спреем
              </a>
              <a 
                href="https://clck.ru/3ADWxj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                💰 100 монет
              </a>
              <a 
                href="https://clck.ru/3ADWyh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                ⬛ Чёрно белый
              </a>
              <a 
                href="https://clck.ru/3ADWyy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                🥚 Зеленое яйцо
              </a>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border border-border animate-fade-in hover:shadow-md transition-shadow" style={{animationDelay: '0.5s'}}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Иконки</h2>
            <div className="space-y-3">
              <a 
                href="https://link.brawlstars.com/ru/?action=voucher&code=3484c6d2-9ab5-4eae-878a-4a186fc4e24a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                🎨 Иконка 1
              </a>
              <a 
                href="https://link.brawlstars.com/ru/?action=voucher&code=ab9cf7c2-45f8-4012-ad38-dfe8b1747c3b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                🎨 Иконка 2
              </a>
              <a 
                href="https://link.brawlstars.com/ru/?action=voucher&code=91eead0b-0917-4077-8efe-6b852c7e49a3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                🎨 Иконка 3
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;