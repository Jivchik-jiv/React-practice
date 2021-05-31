import React from "react";
import styles from "./Tabs.module.css";
import sx from 'classnames';
import {tabsApi} from "./../../services/api"

const TabsNavigation = ({ tabs, handleChangeTab, selectedTab }) => {
  const getTabsNavigation = (tabs) => {
    let tabsNavigation = [];
    for (let i = 1; i <= tabs.length; i++) {
      tabsNavigation.push(i);
    }
    return tabsNavigation;
  };

  const makeOptionClasses = (tab) => {
    return sx({
      [styles.navigationBtn]: true,
      [styles.selected]: tab-1 ===selectedTab,
    })
  }

  return (
    <div className={styles.navigation}>
      {getTabsNavigation(tabs).map((tab) => {
        return (
          <button
            type="button"
            className={makeOptionClasses(tab) }
            onClick={() => handleChangeTab(tab - 1)}
            key = {tab}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

const TabsContent = ({tab})=> {

    return (
        <div className = {styles.content}>
            <h2>{tab.title}</h2>
            <p>{tab.content}</p>
        </div>
    )
}

class Tabs extends React.PureComponent {
  state = {
    tabs: [{title: "", content: ""}],
    selectedTab: 0,
  };

  componentDidMount() {
    tabsApi.fetchTabs().then(tabs=>{
      this.setState({tabs})
    })
  }


  handleChangeTab = (tabIndex) => {
    this.setState({selectedTab: tabIndex})
  };

 
  render() {
    return (
      <div className={styles.tabs}>
        <h1>Tabs</h1>
        <TabsNavigation
          tabs={this.state.tabs}
          handleChangeTab={this.handleChangeTab}
          selectedTab = {this.state.selectedTab}
        />
        < TabsContent tab = {this.state.tabs[this.state.selectedTab]}/>
      </div>
    );
  }
}

export default Tabs;
