import {useState} from "react";
import {Tab} from "../../const";
import Contacts from "../contacts/contacts";
import Reviews from "../reviews/reviews";
import Stats from "../stats/stats";
import TabItem from "../tab-item/tab-item";

const TABS = {
  [Tab.STATS]: {
    title: `Характеристики`,
    type: Tab.STATS,
  },
  [Tab.REVIEWS]: {
    title: `Отзывы`,
    type: Tab.REVIEWS,
  },
  [Tab.CONTACTS]: {
    title: `Контакты`,
    type: Tab.CONTACTS,
  },
};

const getTabContentByTabType = (tabType) => {
  switch (tabType) {
    case Tab.STATS:
      return <Stats />;
    case Tab.REVIEWS:
      return <Reviews />;
    case Tab.CONTACTS:
      return <Contacts />;
  }

  return null;
};

const Tabs = () => {
  const [currentTab, setCurrentTab] = useState(Tab.STATS);

  const tabs = Object.values(TABS);

  const onTabClick = (evt) => {
    const tabType = evt.currentTarget.dataset.tabType;

    setCurrentTab(tabType);
  };

  return (
    <div className="card-description__tabs tabs">
      <ul className="tabs__list">
        {tabs.map((tab, i) => (
          <TabItem
            key={`tab-${i}`}
            type={tab.type}
            isActive={currentTab === tab.type}
            title={tab.title}
            onTabClick={onTabClick}
          />
        ))}
      </ul>

      {getTabContentByTabType(currentTab)}
    </div>
  );
};

export default Tabs;
