import { products } from '../../lib/constants';
import { HomeSectionLayout } from '../../lib/layouts/HomeSectionLayout';
import { CatImageAside } from '../CatImageAside';
import { ProductList } from '../ProductList/ProductList';
import { SectionHeader } from '../SectionHeader';

export const LatestProducts = () => {
  return (
    <HomeSectionLayout>
      <SectionHeader
        preTitle="Lorem ipsum dolor sit amet."
        title="Últimos productos"
      ></SectionHeader>

      <div className="flex">
        <ProductList products={products}></ProductList>
        <CatImageAside></CatImageAside>
      </div>
    </HomeSectionLayout>
  );
};
