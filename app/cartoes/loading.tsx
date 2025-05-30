export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg
        className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth={4} />
        <path
          className="opacity-75"
          d="M4 12a8 8 0 018-8v16a8 8 0 01-8-8z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}