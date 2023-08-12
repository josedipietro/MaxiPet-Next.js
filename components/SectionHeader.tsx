export interface SectionHeaderProps {
  preTitle: string;
  title: string;
}

export const SectionHeader = ({ preTitle, title }: SectionHeaderProps) => {
  return (
    <>
      <p className="font-pre-title text-secondary-500">
        <small>{preTitle}</small>
      </p>
      <h2 className="font-header text-2xl text-primary-300 uppercase font-bold mb-4">
        {title}
      </h2>
    </>
  );
};
