import React from 'react'
import { Row, Col, Panel, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { ml2oz, oz2ml, g2oz, oz2g, imperialUnits } from '../utilities/conversionData'

export default class ConverterApp extends React.Component {
  state = {
    volume: {
      ml: 0,
      oz: 0
    },
    weight: {
      g: 0,
      oz: 0
    }
  }

  handleOnChange = (property, value) => {
    this.setState({[`${property.category}`]: {...this.state[`${property.category}`], [`${property.unit}`]: value}})
  }

  render() {
    return (
      <Row>
        <Form horizontal>
          <Panel header={<h3>Volume</h3>}>
            <UnitConversionRow
              converter={{value: ml2oz(this.state.volume.ml), type: 'oz'}}
              label="ml"
              type="number"
              value={this.state.volume.ml}
              onChange={(e) => this.handleOnChange({category: 'volume', unit: 'ml'}, e.target.value)}
            />
            <UnitConversionRow
              converter={{value: oz2ml(this.state.volume.oz), type: 'ml'}}
              label="oz"
              type="number"
              value={this.state.volume.oz}
              onChange={(e) => this.handleOnChange({category: 'volume', unit: 'oz'}, e.target.value)}
            />
          </Panel>
          <Panel header={<h3>Weight</h3>}>
            <UnitConversionRow
              converter={{value: g2oz(this.state.weight.g), type: 'oz'}}
              label="grams"
              type="number"
              value={this.state.weight.g}
              onChange={(e) => this.handleOnChange({category: 'weight', unit: 'g'}, e.target.value)}
            />
            <UnitConversionRow
              converter={{value: oz2g(this.state.weight.oz), type: 'g'}}
              label="oz"
              type="number"
              value={this.state.weight.oz}
              onChange={(e) => this.handleOnChange({category: 'weight', unit: 'oz'}, e.target.value)}
            />
          </Panel>
        </Form>
      </Row>
    )
  }
}

const UnitConversionRow = ({converter, id, help, label, ...formControlProps}) => {
  const formGroupProps = id ? {controlId: id} : {}
  let isImperial = false
  let imperial

  if (converter.type === 'oz') {
    isImperial = true
    imperial = imperialUnits(converter.value)
  }

  return (
    <div className="clearfix">
      <Col xs={6} style={{paddingTop: '19px'}}>
        <FormGroup {...formGroupProps}>
          <Col componentClass={ControlLabel} sm={3}>
            {label}
          </Col>
          <Col sm={9}>
            <FormControl {...formControlProps} />
          </Col>
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      </Col>
      <Col xs={6}>
        <h2>{' = '}{converter.value} {converter.type}{isImperial && ` = ${imperial.value} ${imperial.unit}${imperial.value != 1 ? 's' : ''}`}</h2>
      </Col>
    </div>
  )
}
