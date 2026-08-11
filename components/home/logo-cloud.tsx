interface LogoCloudProps {
  showPlaceholders?: boolean;
}

export default function LogoCloud({ showPlaceholders = false }: LogoCloudProps) {
  if (!showPlaceholders) {
    return (
      <div className="py-6 border-y border-surface-border bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Crafting Digital Excellence for Ambitious Brands Across Nairobi & Beyond
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 border-y border-surface-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-8">
          Trusted by Innovative Brands & Partners
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all">
          <div className="font-display text-2xl tracking-wider text-foreground">CLIENT 01</div>
          <div className="font-display text-2xl tracking-wider text-foreground">CLIENT 02</div>
          <div className="font-display text-2xl tracking-wider text-foreground">CLIENT 03</div>
          <div className="font-display text-2xl tracking-wider text-foreground">CLIENT 04</div>
        </div>
      </div>
    </section>
  );
}
