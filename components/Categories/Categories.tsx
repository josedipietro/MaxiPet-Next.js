import { categories } from '../../lib/constants';
import { HomeSectionLayout } from '../../lib/layouts/HomeSectionLayout';
import { SectionHeader } from '../SectionHeader';
import { CategorieCard } from './CategorieCard';

export const Categories = () => {
  return (
    <HomeSectionLayout>
      <SectionHeader
        preTitle="Lorem ipsum dolor sit amet."
        title="Una gran variedad de categorías"
      ></SectionHeader>

      <div className="flex justify-between flex-wrap">
        {categories.map((categorie) => (
          <CategorieCard
            key={categorie}
            categorieName={categorie}
          ></CategorieCard>
        ))}
      </div>
    </HomeSectionLayout>
  );
};
