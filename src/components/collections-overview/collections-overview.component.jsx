import React from "react";
import { useSelector } from "react-redux";
// import { createStructuredSelector } from "reselect";

import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import CollectionPreview from "../collection-preview/collection-preview";

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);
    return(
        <div className='collections-overview'>
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id}{...otherCollectionProps} />
                ))
            }
        </div>
    )
}

// const mapStateToProps = createStructuredSelector({
//     collections:selectCollectionsForPreview
// })

export default CollectionsOverview;