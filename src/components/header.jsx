import React from 'react';
import PropTypes from  'prop-types';
import Button from './button';

const Header = (props) => {
    const { title, onAdd, showAdd } = props;

    return ( 
        <header className="header">
            <h2>{title}</h2>
            <Button onClick = { onAdd } color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'close' : 'Add'}/>
        </header>
     );
}
 
Header.defaultProps = {
  title: 'This is my default props',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// const headingStyle= {
//     color:'red',
//     backgroundColor:'blue'
// }

export default Header;