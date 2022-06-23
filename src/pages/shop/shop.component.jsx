import React from 'react';
import { Route, Routes } from "react-router-dom";
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../../components/collection/collection.component";

import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
class ShopPage extends React.Component{
  unsubscribeFromSnapshot = null;
  
  
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap);
    })
  }


  render() {
    return (
      <div className="shop-page">
        <Routes>
          <Route exact path="/" element={<CollectionOverview />} />
          <Route path=":collectionId" element={<CollectionPage />} />
        </Routes>
      </div>
    );
}
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: collectionsMap=>dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);