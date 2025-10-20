const SideScale = () => {
  return (
    <>
      {/* Hide on mobile (md:block means show only on medium screens and up) */}
      <div className="absolute top-0 right-0 row-start-1 hidden h-full w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:block"></div>
      <div className="absolute top-0 left-0 row-start-1 hidden h-full w-8 border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed md:block"></div>
    </>
  );
};

export default SideScale;
