import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;
export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  margin: 0;
  display: flex;
`;

WrapperTabList.tabsRole = "TabList";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 9999;
  color: "#ccc";
  margin-right: 5px;
  margin-left: 10px;

  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;

  &: focus {
    outline: none;
  }

  &: hover {
    background-color: lightgray;
  }

  &.is-selected {
    background-color: lightgray;
    box-shadow: 3px 2px 10px rgbs(0, 0, 0, 0.2);
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border-radius: 16px;
  border: 1px solid #ccc;
  display: none;
  margin-top: -5px;

  div {
    display: flex;
    //flex-direction: row;
    flex-wrap: wrap;
  }

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
