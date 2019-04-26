import React from 'react';
import styled from 'styled-components';
import './App.css';
import TabContent0 from './components/TabContent0.js';
import TabContent1 from './components/TabContent1.js';
import TabContent2 from './components/TabContent2.js';


const TableListCont = styled.div`
  background: #03A9F4;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
`;


const TabLink0 = styled.div`
  display: inline-block;
  width: 110px;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  color: ${props => props.tabId === 0 ? 'rgb(255, 255, 255)' : ' #E0E0E0'};
  border-bottom: ${props => props.tabId === 0 ? '3px solid #E91E63' : '3px solid transparent'};
`;

const TabLink1 = styled(TabLink0)`
  color: ${props => props.tabId === 1 ? 'rgb(255, 255, 255)' : ' #E0E0E0'};
  border-bottom: ${props => props.tabId === 1 ? '3px solid #E91E63' : '3px solid transparent'};
`;


const TabLink2 = styled(TabLink0)`
  color: ${props => props.tabId === 2 ? 'rgb(255, 255, 255)' : ' #E0E0E0'};
  border-bottom: ${props => props.tabId === 2 ? '3px solid #E91E63' : '3px solid transparent'};
  `



class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SelectedTabLink: 0 };
    this.selectTab_0 = this.selectTab_0.bind(this);
    this.selectTab_1 = this.selectTab_1.bind(this);
    this.selectTab_2 = this.selectTab_2.bind(this);
  }

  selectTab_0() {
    this.setState(state => ({
    SelectedTabLink: 0
    }));
  }

  selectTab_1() {
    this.setState(state => ({
    SelectedTabLink: 1
    }));
  }

  selectTab_2() {
    this.setState(state => ({
    SelectedTabLink: 2
    }));
  }


  render() {
    return (
      <div className='tabs'>

        <TableListCont>
            <TabLink0 tabId={this.state.SelectedTabLink}  onClick={this.selectTab_0}>ITEM ONE</TabLink0>
            <TabLink1 tabId={this.state.SelectedTabLink}  onClick={this.selectTab_1}>ITEM TWO</TabLink1>
            <TabLink2 tabId={this.state.SelectedTabLink}  onClick={this.selectTab_2}>ITEM THREE</TabLink2>
        </TableListCont>

        {this.state.SelectedTabLink === 0 && <TabContent0>Item One</TabContent0>}
        {this.state.SelectedTabLink === 1 && <TabContent1>Item Two</TabContent1>}
        {this.state.SelectedTabLink === 2 && <TabContent2>Item Three</TabContent2>}
      </div>
    );
  }
}



function App() {
  return (
    <Tabs />
  );
}


export default App;
