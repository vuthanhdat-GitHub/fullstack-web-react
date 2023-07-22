import React from 'react';
import home from './views/home';
import classroom from './views/class';
import student from './views/student';
import {
  Switch,
  BrowserRouter,
  Route,

} from 'react-router-dom';
import normalLayout from './layouts/normLayout'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      route: [

        {
          component: home,
          layout: normalLayout,
          path: '/'
        },
        {
          component: classroom,
          layout: normalLayout,
          path: '/class/:idClass'
        },
        {
          component: student,
          layout: normalLayout,
          path: '/student/:idStudent'
        },

      ]
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          {this.state.route.map(r => (
            <Route exact path={r.path} >
              <r.layout>
                <r.component></r.component>
              </r.layout>
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
