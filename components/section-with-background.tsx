interface SectionWithBackgroundProps {
  children: React.ReactNode;
  backgroundImage: string;
  opacity?: number;
  className?: string;
}

export default function SectionWithBackground({
  children,
  backgroundImage,
  opacity = 10,
  className = ""
}: SectionWithBackgroundProps) {
  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div 
        className={`absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-${opacity}`}
        style={{
          backgroundImage: `url("/images/${backgroundImage}")`,
          filter: 'saturate(0.7) brightness(1.1)'
        }}
      />
      <div className="relative z-[2]">
        {children}
      </div>
    </section>
  );
} 