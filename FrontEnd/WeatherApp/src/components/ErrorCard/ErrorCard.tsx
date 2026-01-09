export function ErrorCard({ message }: { message: string }) {
  return (
    <div className="error-card">
      <p>❌ {message}</p>
    </div>
  );
}