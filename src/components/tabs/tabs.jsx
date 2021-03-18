import React, {useState} from "react";
import {Tab} from "../../const";
import Contacts from "../contacts/contacts";
import Reviews from "../reviews/reviews";
import Stats from "../stats/stats";
import TabItem from "../tab-item/tab-item";

const TABS = {
  [Tab.STATS]: {
    title: `Характеристики`,
    type: Tab.STATS,
    component: Stats,
  },
  [Tab.REVIEWS]: {
    title: `Отзывы`,
    type: Tab.REVIEWS,
    component: Reviews,
  },
  [Tab.CONTACTS]: {
    title: `Контакты`,
    type: Tab.CONTACTS,
    component: Contacts,
  },
};

const getTabContentByTabType = (tabType) => {
  const TabContent = TABS[tabType].component;

  return <TabContent />;
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
