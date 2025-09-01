export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold text-primary mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-8">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <a href="/" className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition">Go Home</a>
    </div>
  );
}