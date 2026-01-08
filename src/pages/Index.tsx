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
            <h2 className="text-2xl font-semibold mb-4 text-primary">Как апнуть про ранг против дисков?</h2>
            <p className="text-card-foreground leading-relaxed">
              Вы должны снять всех персов до 0 кубков, и после этого вам будет попадаться только дисквы в ранговом бою. Данным способом вы можете апнуть 15k ММР играя как на бронзе
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border border-border animate-fade-in hover:shadow-md transition-shadow" style={{animationDelay: '0.1s'}}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Как сделать дисклов в 2000+?</h2>
            <p className="text-card-foreground leading-relaxed">
              Меняйте регион на Австралию. Играйте с 1-2-3-4 часа. До 1.5к!
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border border-border animate-fade-in hover:shadow-md transition-shadow" style={{animationDelay: '0.2s'}}>
            <h2 className="text-2xl font-semibold mb-4 text-primary">Играйте на обломбоше и в захват кристалов!</h2>
            <p className="text-card-foreground leading-relaxed">
              Примерно после 3 часов начнут попадаться слабые игроки! Все готово
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;