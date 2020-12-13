import * as React from 'react';
import '../css/index.css';
import Logo from '../images/Y.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Main from './Main';
import About from './About';

interface Props {
}

interface State {
  tabIndex: number;
}

export default class Header extends React.Component<Props, State> {
  state: State = {
    tabIndex: 0
  };

  doubleSum = (a: number, b: number) => {
    var abc = a + b;
    return abc;
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <div className="logo">
              <img src={Logo} alt="logo" width="50" height="50" />
            </div>
            <div className="name">
              YIPL
          </div>
            <Tabs selectedIndex={this.state.tabIndex}
              onSelect={(tabIndex: any) => this.setState({ tabIndex })}>
              <TabList>
                <Tab>
                  <div className="tab-name">About</div>
                </Tab>
                <Tab>
                  <div className="tab-name">Contact Us{this.doubleSum(2, 4)}</div>
                </Tab>
              </TabList>
              <TabPanel>
                <Main />
              </TabPanel>
              <TabPanel>
                <About />
              </TabPanel>
            </Tabs>
          </header>
        </div>
      </React.Fragment>
    );
  }
}