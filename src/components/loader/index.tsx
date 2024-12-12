export function SpinnerLoader() {
  return (
    <div
      className="w-8 h-8 border-4  border-[rgba(0, 0, 0, 0.08)] rounded-full"
      style={{
        borderRightColor: "transparent",
        animation: "spin 0.8s cubic-bezier(0.42, 0, 0.58, 1) infinite",
      }}
      role="status"
    >
      <span className="sr-only">Loading...</span>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
