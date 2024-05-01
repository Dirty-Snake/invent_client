import React from 'react';
import BrendsContent from "../../features/brends/BrendsContent/index";
import HomeContent from "../../features/home/HomeContent/index";
import PageLayout from "../../layouts/PageLayout/index";

const BrendsPage = () => {
  return (
    <PageLayout title={'Факторы'}>
      <BrendsContent />
    </PageLayout>
  );
};

export default BrendsPage;
