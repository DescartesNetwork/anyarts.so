import { Route, Switch } from 'react-router-dom'

import { Row, Col } from 'antd'
import Home from './home'
import Collections from './collections'
import Collection from './collection'

import { useRoute } from 'app/hooks/useRoute'

import 'app/static/styles/light.less'
import 'app/static/styles/dark.less'

const View = () => {
  const { extend } = useRoute()

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Switch>
          <Route exact path={extend('/')} component={Home} />
          <Route exact path={extend('/:platform')} component={Collections} />
          <Route
            exact
            path={extend('/:platform/:symbol')}
            component={Collection}
          />
        </Switch>
      </Col>
      <Col span={24} />
    </Row>
  )
}

export default View
