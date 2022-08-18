import React,{useContext} from "react";
// import { connect } from "react-redux";
// import { createStructuredSelector } from "reselect";

// import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview";
import CollectionsContext from "../../contexts/collections/collections.context";
 import { previewCollections } from "../../contexts/collections/collections.utils";
import './collections-overview.styles.scss';

const CollectionsOverview = () => {
    const collections = previewCollections(useContext(CollectionsContext));
    return (
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id}{...otherCollectionProps} />
                ))
            }
        </div>
    )
}

export default CollectionsOverview;