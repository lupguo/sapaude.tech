function App() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-100 text-gray-800">
      {/* Main content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-amber-800">
            "Sapere aude"
          </h1>
          <p className="text-xl md:text-2xl mb-2 font-light italic">
            （拉丁语，意为Dare to know，敢于求知）
          </p>
          <p className="text-lg md:text-xl">
            - 德意志哲学家康德
          </p>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="p-4 text-center">
        <p className="text-gray-400 italic text-sm">
          <a href="https://beian.miit.gov.cn" className="hover:text-gray-500 transition-colors">
            粤ICP备14088510号-7
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
