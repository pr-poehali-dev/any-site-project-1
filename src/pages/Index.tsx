const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Добро пожаловать!</h1>
          <p className="text-xl text-muted-foreground">Это советы для БС</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg shadow-sm border border-border animate-fade-in hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Как апнуть про ранг против ботов?</h2>
          <p className="text-card-foreground leading-relaxed">
            Вы должны слить всех персов на 0 кубков и после этого будет ищичные типы попадаться
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;