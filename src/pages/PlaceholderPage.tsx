export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[50vh]">
      <h1 className="text-4xl font-serif mb-6">{title}</h1>
      <p className="text-slate-600">Diese Seite befindet sich im Aufbau.</p>
    </div>
  );
}
