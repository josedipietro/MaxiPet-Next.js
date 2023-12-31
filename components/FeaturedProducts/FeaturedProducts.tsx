import { products } from '../../lib/constants';
import { HomeSectionLayout } from '../../lib/layouts/HomeSectionLayout';
import { CatImageAside } from '../CatImageAside';
import { ProductList } from '../ProductList/ProductList';
import { SectionHeader } from '../SectionHeader';

export const FeaturedProducts = () => {
  return (
    <HomeSectionLayout>
      <SectionHeader
        preTitle="Lorem ipsum dolor sit amet."
        title="Productos destacados"
      ></SectionHeader>
      <div className="flex">
        <CatImageAside />
        <ProductList products={products} />
      </div>
    </HomeSectionLayout>
  );
};
