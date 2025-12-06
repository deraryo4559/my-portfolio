const SectionTitle = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center mb-16">
    <h2 className="text-5xl md:text-6xl font-serif text-white mb-4">{title}</h2>
    <p className="text-zinc-500 text-sm tracking-[0.2em] uppercase">{subtitle}</p>
  </div>
);

export default SectionTitle;

