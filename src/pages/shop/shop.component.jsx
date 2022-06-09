import React from 'react';
import { Route, Routes } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../../components/collection/collection.component";

const ShopPage = () => {
  return (
    <div className="shop-page">
      <Routes>
        <Route exact path="/" element={<CollectionOverview />} />
        <Route path=":collectionId" element={<CollectionPage />} />
      </Routes>
    </div>
  );
};


export default ShopPage;