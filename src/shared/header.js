import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    const { title, className, children, icon } = props;
    return (
        <div className={`header ${className}`}>
            <span className="header-title">
                {icon && <i className={`fa ${icon} right-margin`}/>}
                {title}
            </span>
            <span className="header-button">
                {children}
            </span>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]).isRequired,
    icon: PropTypes.string,
}

export default Header;