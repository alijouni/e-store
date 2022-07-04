import React from 'react';
import { Route, Routes } from "react-router-dom";

import { connect } from "react-redux";

import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../../components/collection/collection.container";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
// import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');

    // //Observable live stream on snapshot
    // collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // })

    // //Promises
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // })
  }

  render() {
    return (
      <div className="shop-page">
        <Routes>
          <Route exact path="/" element={<CollectionsOverviewContainer />} />
          <Route path=":collectionId" element={<CollectionPageContainer />} />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);