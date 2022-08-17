import React,{useContext} from "react";
import { useParams } from "react-router-dom";
//import { useSelector } from "react-redux";

import "./collection.styles.scss";

import CollectionItem from "../collection-item/collection-item.component";

//import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionsContext from "../../contexts/collections/collections.context";

const CollectionPage = () => {
  const { collectionId } = useParams();
  const collections = useContext(CollectionsContext);
  const collection = collections[collectionId];
  const { title, items } = collection;

  //const collection = useSelector(selectCollection(collectionId));
  
  return (

          <div className="collection-page">
            <h2 className='title'>{title}</h2>
            <div className='items'>
              {items.map(item => (
                <CollectionItem key={item.id} item={item} />
              ))
              }
            </div>
          </div>
    
    // <CollectionsContext.Consumer>
    //   {
    //     collections => {
    //       const collection = collections[collectionId];
    //       const { title, items } = collection;
    //       return (
    //         <div className="collection-page">
    //           <h2 className='title'>{title}</h2>
    //           <div className='items'>
    //             {items.map(item => (
    //               <CollectionItem key={item.id} item={item} />
    //             ))
    //             }
    //           </div>
    //         </div>
    //       );
    //     }}
    // </CollectionsContext.Consumer>

  );
};

// const mapStateToProps = (state, ownProps) => {
//   return {
//     collection: selectCollection(ownProps.collectionId)(state),
//   };
// };

export default CollectionPage;
