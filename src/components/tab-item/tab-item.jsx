import React from "react";
import PropTypes from "prop-types";
import {Tab} from "../../const";

const TabItem = (props) => {
  const {
    type,
    isActive,
    title,
    onTabClick,
  } = props;

  return (
    <li
      className={`tabs__item ${isActive ? `tabs__item--active` : ``}`}
      data-tab-type={type}
      onClick={onTabClick}
    >
      <button
        type="button"
        className="tabs__button"
      >
        {title}
      </button>
    </li>
  );
};

TabItem.propTypes = {
  type: PropTypes.oneOf([...Object.values(Tab)]).isRequired,
  isActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabItem;
