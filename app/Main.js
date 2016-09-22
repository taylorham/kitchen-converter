import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import ConverterApp from './components/ConverterApp'

const Main = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <ConverterApp />
      </Col>
    </Row>
  </Grid>
)

ReactDOM.render(<Main />, document.getElementById('app'))
