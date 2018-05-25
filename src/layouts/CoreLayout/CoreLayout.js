// @flow
import React from 'react'
import Switch from 'react-router-dom/Switch'
import Route from 'react-router-dom/Route'
import routes from '../../routes'
import Header from 'components/Header'
import Footer from 'components/Footer'
// normalize with antd and add icons & animations
import 'antd/lib/style/css'
import '../../styles/core.css'
import styles from './CoreLayout.css'

export const CoreLayout = () => (
  <div className={styles['core-layout']}>
    <Header />
    <div className={styles['viewport']}>
      <Switch>
        <Route path='/' component={routes.home} exact />
        <Route path='/myOrders' component={routes.myOrders} exact />
        <Route path='/goodsCar' component={routes.goodsCar} exact />
        <Route path='/editAddress' component={routes.editAddress} exact />
        <Route path='/myfav' component={routes.myfav} exact />
        <Route path='/good/:id' component={routes.good} exact />
        <Route path='/editUserInfo' component={routes.editUserInfo} exact />
        <Route path='/circle/:username' component={routes.circle} exact />
        <Route path='/personal' component={routes.personal} exact />
        <Route path='/detail' component={routes.detail} exact />
        <Route path='/Login' component={routes.login} exact />
        <Route path='/register' component={routes.register} exact />
      </Switch>
    </div>
    <Footer key='footer' />
  </div>
)

export default CoreLayout
