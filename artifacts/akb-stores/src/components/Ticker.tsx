export function Ticker() {
  const materials = [
    "BRONZE", "STONE", "CAST IRON", "PATINATED COPPER", 
    "MARBLE", "BLACKENED STEEL", "ANTIQUE BRASS", "OXIDIZED SILVER"
  ];
  
  // Create a long array to ensure the ticker fills screen and loops seamlessly
  const duplicatedMaterials = [...materials, ...materials, ...materials, ...materials];

  return (
    <div className="w-full bg-secondary py-4 overflow-hidden border-y border-primary/10">
      <div className="ticker-track">
        <div className="flex items-center gap-8 px-4">
          {duplicatedMaterials.map((material, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="text-sm tracking-[0.2em] text-foreground font-light whitespace-nowrap">
                {material}
              </span>
              <span className="text-primary/50 text-[10px]">♦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}