import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Portfolio from './Portfolio';
import Toolbar from './Toolbar';

function ToolbarList(props) {
  const [items, setItems] = useState([
    new Portfolio('new', true, )
  ]);

  return (
    <ul>{items.map(o => <Toolbar key={o.id} item={o} />)}</ul>
  );
}

ToolbarList.propTypes = {

}

export default ToolbarList;