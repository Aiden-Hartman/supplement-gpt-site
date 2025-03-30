'use client';

export default function ChatPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Chat with the Brightside Assistant
      </h1>

      <p className="text-gray-600 mb-6 text-center max-w-xl">
        Our assistant will guide you toward supplements that support your unique health goals.
        Click below to start the conversation.
      </p>

      <a
        href="https://chatgpt.com/g/g-67e7fc050f9c8191ae750dae457714ac-brightside-live-assistant"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Open Brightside Assistant
      </a>
    </main>
  );
}
