import React from 'react';
import { Route, Routes } from "react-router-dom";
import {createStructuredSelector} from 'reselect';

import { connect } from 'react-redux';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../../components/collection/collection.component";

// import { firestore,convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner=WithSpinner(CollectionPage)
class ShopPage extends React.Component{
  
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
    const { isCollectionsFetching } = this.props;
    return (
      <div className="shop-page">
        <Routes>
          <Route exact path="/" element={<CollectionOverviewWithSpinner isLoading={isCollectionsFetching} />} />
          <Route path=":collectionId" element={<CollectionPageWithSpinner isLoading={isCollectionsFetching} />} />
        </Routes>
      </div>
    );
}
};

const mapStateToProps = createStructuredSelector({
  isCollectionsFetching:selectIsCollectionFetching
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);