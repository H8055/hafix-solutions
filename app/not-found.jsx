import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="phead" style={{ minHeight: '70vh', display: 'grid', alignItems: 'center' }}>
      <div className="shell">
        <span className="kicker" style={{ marginBottom: 22 }}>404</span>
        <h1 style={{ marginBottom: 26 }}>This page moved on.</h1>
        <p className="muted" style={{ marginBottom: 30 }}>
          The page you are looking for does not exist — but the work does.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link href="/" className="btn btn--solid">Back home</Link>
          <Link href="/contact" className="btn btn--ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
