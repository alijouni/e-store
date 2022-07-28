import React,{useEffect} from 'react';
import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import CollectionPageContainer from "../../components/collection/collection.container";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
// import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  },[dispatch])
    
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

    return (
      <div className="shop-page">
        <Routes>
          <Route exact path="/" element={<CollectionsOverviewContainer />} />
          <Route path=":collectionId" element={<CollectionPageContainer />} />
        </Routes>
      </div>
    );
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
// });

export default ShopPage;