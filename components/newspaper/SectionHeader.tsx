interface SectionHeaderProps {
  title: string;
  id: string;
}

const SectionHeader = ({ title, id }: SectionHeaderProps) => {
  return (
    <div id={id} className="scroll-mt-8 mb-6">
      <div className="border-t border-border pt-6">
        <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide">
          {title}
        </h2>
        <div className="border-t border-border mt-3" />
      </div>
    </div>
  );
};

export default SectionHeader;
