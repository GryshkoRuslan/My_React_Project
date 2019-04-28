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


const TabLink = styled.div`
  display: inline-block;
  width: 110px;
  cursor: pointer;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  color: ${props => props.SelectedtabId === props.id ? 'rgb(255, 255, 255)' : ' #E0E0E0'};
  border-bottom: ${props => props.SelectedtabId === props.id ? '3px solid #E91E63' : '3px solid transparent'};
`;



class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { SelectedTabLink: 0 };
    this.selectTab = this.selectTab.bind(this);
  }


  selectTab(id) {
    this.setState(state => ({
    SelectedTabLink: id
    }));
  }


  render() {
    const tabLinksInf = [
      {name: 'ITEM ONE', id: 0},
      {name: 'ITEM TWO', id: 1},
      {name: 'ITEM THREE', id: 2}
    ];

    return (
      <div className='tabs'>

        <TableListCont>
            {tabLinksInf.map(item =>
              <TabLink SelectedtabId={this.state.SelectedTabLink} id={item['id']} key={String(item['id'])} onClick={() => this.selectTab(item['id'])}>{item['name']}</TabLink>)}
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
