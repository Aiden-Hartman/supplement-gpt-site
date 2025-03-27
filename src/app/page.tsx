export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Welcome to Bright Side
      </h1>
      <p className="text-lg text-center mb-4 max-w-xl">
        Our supplement expert is here to help you find the right products for your health goals.
      </p>
      <a
        href="/chat"
        className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
      >
        Talk to the Assistant
      </a>
    </main>
  );
}
