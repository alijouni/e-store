import React,{useContext} from 'react';
// import { connect } from 'react-redux';

// import {createStructuredSelector} from 'reselect';

// import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import DirectoryContext from '../../contexts/directory/directory.context';

import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

const Directory = () => {
  
  const { sections }=useContext(DirectoryContext)

  return (
    <div className='directory-menu'>
      {
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>
  )
}


export default Directory