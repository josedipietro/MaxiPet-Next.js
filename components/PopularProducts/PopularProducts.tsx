import { products } from '../../lib/constants';
import { HomeSectionLayout } from '../../lib/layouts/HomeSectionLayout';
import { ProductList } from '../ProductList/ProductList';
import { SectionHeader } from '../SectionHeader';

export const PopularProducts = () => {
  return (
    <HomeSectionLayout>
      <SectionHeader
        preTitle="Lorem ipsum dolor sit amet."
        title="Productos populares"
      ></SectionHeader>

      <ProductList products={products}></ProductList>
    </HomeSectionLayout>
  );
};
