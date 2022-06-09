import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import "./collection.styles.scss";

import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collection = useSelector(selectCollection(collectionId));
  console.log(collection);
  return (
    <div className="category">
      <h2>COLLECTION PAGE</h2>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => {
//   return {
//     collection: selectCollection(ownProps.collectionId)(state),
//   };
// };

export default CollectionPage;
