import React from 'react'
import PropTypes from 'prop-types'
import './Toolbar.css';
import ProjectList from '../ProjectList/ProjectList';

function Toolbar({filters, selected, onSelectFilter}) {
  const handleClick = () => {
    console.log('click');
  }

  // return (
  //   <ul className="toolbar-list">
  //     {filters.map(item => {
  //       return (
  //         <li className="toolbar-item">
  //           <button className="toolbar-button" onClick={onSelectFilter}>{item}</button>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );

  return (
    <>
      <ul className="toolbar-list">
        <li className="toolbar-item">
          <button className="toolbar-button" onClick={handleClick}>{filters[0]}</button>
        </li>
        <li>
          <button className="toolbar-button" onClick={handleClick}>{filters[1]}</button>
        </li>
        <li>
          <button className="toolbar-button" onClick={handleClick}>{filters[2]}</button>
        </li>
        <li>
          <button className="toolbar-button" onClick={handleClick}>{filters[3]}</button>
        </li>
      </ul>
      
      <ProjectList />
      
    </>
  );
}

export default Toolbar;