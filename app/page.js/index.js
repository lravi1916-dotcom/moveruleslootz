import Head from 'next/head';

// ఇక్కడ మీరు మీ లూట్ ప్రొడక్ట్స్ డేటా యాడ్ చేసుకోవచ్చు (ఆటోమేట్ చేసుకోవడానికి దీన్ని API నుండి కూడా తెచ్చుకోవచ్చు)
const lootProducts = [
  {
    id: 1,
    title: "Wireless Bluetooth Earbuds - Super Loot",
    price: "₹299",
    oldPrice: "₹1,499",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format&fit=crop&q=60",
    link: "https://t.me/Moveruleslootz" // మీ అఫిలియేట్ లేదా టెలిగ్రామ్ లింక్ ఇక్కడ ఇవ్వండి
  },
  {
    id: 2,
    title: "Smart Watch Fitness Band (Limited Time)",
    price: "₹499",
    oldPrice: "₹2,499",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60",
    link: "https://t.me/Moveruleslootz"
  },
  {
    id: 3,
    title: "Mini Portable LED Projector",
    price: "₹1,299",
    oldPrice: "₹4,999",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500&auto=format&fit=crop&q=60",
    link: "https://t.me/Moveruleslootz"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Head>
        <title>MoveRules Loot | Best Deals & Offers</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Header / Brand Name */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-4 text-center shadow-md">
        <h1 className="text-2xl font-bold tracking-wider">MoveRules Loot</h1>
        <p className="text-xs text-blue-100 mt-1">Your Ultimate Destination for Bug & Loot Deals</p>
      </header>

      <main className="max-w-md mx-auto p-4">
        
        {/* Telegram Top Banner Box */}
        <a 
          href="https://t.me/Moveruleslootz" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block mb-6 bg-gradient-to-r from-sky-400 to-blue-500 text-white p-3.5 rounded-xl shadow-lg hover:opacity-95 transition transform active:scale-95"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📢</span>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide opacity-90">Instant Loot Alerts</p>
                <p className="text-sm font-bold">Join @Moveruleslootz Telegram</p>
              </div>
            </div>
            <span className="bg-white text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
              Join Now
            </span>
          </div>
        </a>

        {/* Section Title */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">🔥 Live Loot Deals</h2>
          <span className="text-xs text-red-500 font-semibold animate-pulse">● Updated Live</span>
        </div>

        {/* Products List (One by One / Stacked Beautifully) */}
        <div className="space-y-4">
          {lootProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition flex flex-col"
            >
              <div className="relative h-48 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow">
                  Loot Deal
                </span>
              </div>

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2">
                    {product.title}
                  </h3>
                  
                  <div className="flex items-baseline space-x-2 mb-4">
                    <span className="text-lg font-bold text-green-600">{product.price}</span>
                    <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
                  </div>
                </div>

                <a 
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2.5 rounded-xl font-medium text-sm shadow-sm transition active:scale-95 flex items-center justify-center space-x-2"
                >
                  <span>Grab Deal Now</span>
                  <span>🚀</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-xs text-gray-400">
        © {new Date().getFullYear()} MoveRulesLoot.in • All Rights Reserved
      </footer>
    </div>
  );
            }

