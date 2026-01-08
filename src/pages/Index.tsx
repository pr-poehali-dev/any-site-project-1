const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold mb-6 text-foreground">Добро пожаловать!</h1>
        <p className="text-xl text-muted-foreground mb-8">Это советы для БС</p>
        <div className="bg-card p-8 rounded-lg shadow-sm border border-border animate-fade-in">
          <p className="text-lg text-card-foreground leading-relaxed">
            Здесь будет полезная информация и рекомендации для вашего бизнеса
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;