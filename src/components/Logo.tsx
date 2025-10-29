export const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center gap-0.5">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-primary-foreground transform rotate-45"></div>
          <div className="w-3 h-3 bg-primary-foreground/80 transform rotate-45"></div>
        </div>
        <div className="flex gap-1 -mt-1.5">
          <div className="w-3 h-3 bg-primary-foreground/60 transform rotate-45"></div>
          <div className="w-3 h-3 bg-primary-foreground/40 transform rotate-45"></div>
        </div>
      </div>
      <span className="text-2xl font-bold text-primary-foreground tracking-tight">
        DASARI MANOJ
      </span>
    </div>
  );
};
