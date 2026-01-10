import './ErrorCard.css';

export function ErrorCard({ message }: { message: string }) {
  return (
    <div className="error-card">
      <span className="emoji">❌</span>
      <p>{message}</p>
    </div>
  );
}