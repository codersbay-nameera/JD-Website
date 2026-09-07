export function SiteMain({ children }) {
  return (
    <main id="main-content" className="!p-0">
      <div className="page-layout-padding w-full">{children}</div>
    </main>
  );
}
