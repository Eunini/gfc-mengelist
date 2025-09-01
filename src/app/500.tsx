export default function Custom500() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-bold text-red-600 mb-4">500</h1>
      <p className="text-lg text-gray-700 mb-8">
        Oops! Something went wrong on our end.
        <br />
        Please try again later or contact support if the issue persists.
      </p>
      <a
        href="/"
        className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/80 transition"
      >
        Go Home
      </a>
    </div>
  );
}