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
        </div>
      </div>
    </div>
  );
};

export default Index;