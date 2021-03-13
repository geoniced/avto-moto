
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

export default TabItem;
