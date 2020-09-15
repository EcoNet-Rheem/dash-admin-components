import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { tagPropType } from '../utils/helper.js'
import { CChartBar } from '@coreui/react-chartjs'
import { getColor } from '@coreui/utils'
import './GraphCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class GraphCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {
      tag: Tag,
      className,
      innerRef,
      color,
      textColor,
      borderColor,
      align,
      accentColor,
      cardTextContent,
      cardNumberContent,
      graphContent,
      arrowContent,
      icon,
      arrowIcon,
      chartData,
      chartLabel,
      ...attributes
    } = this.props;

    var chartArea, cardBody, cardNumberArea;

    const defaultDatasets = (() => {
      return [
        {
          data: chartData,
          barPercentage: 0.5,
          categoryPercentage: 1,
          backgroundColor: getColor('rgba(238, 238, 238, .2)'),
          pointHoverBackgroundColor: getColor('#d1d1d1'),
          hoverBackgroundColor: getColor('#d1d1d1'),
        }
      ]
    })()

    const defaultOptions = (() => {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        tooltips: {
          enabled: true
        }
      }
    })()

    if (chartData) {
      cardBody = 'cardBodyPadding'
      chartArea =
        <div className="chart-wrapper">
          <CChartBar id='barChart'
            {...attributes}
            datasets={defaultDatasets}
            options={defaultOptions}
            labels={chartLabel}
          />
        </div>
    } else {
      cardBody = 'cardBody'
      chartArea = <div></div>
    }

    if (cardNumberContent) {
      cardNumberArea = <div id='card-number'> {cardNumberContent} </div>
    } else {
      cardNumberArea = <div> <pre id="blank-number"> </pre> </div>
    }

    return (
      <div className={classNames('col-sm-6 col-lg-3')}>
        <div className={classNames(
          className,
          'card',
          align ? `text-${align}` : false,
          textColor ? `text-${textColor}` : false,
          borderColor ? `border-${borderColor}` : false,
          accentColor ? `card-accent-${accentColor}` : false,
        )}
          id={`${color}`}
        >
          <div className={classNames(className,
            'card-body'
          )}
            id={cardBody}
            ref={innerRef}
          >
            <div className={classNames('row')}>
              <div id="iconArea"><FontAwesomeIcon icon={icon} size="2x" /></div>
              <div id="contentArea">
                {cardNumberArea}
                <div> {cardTextContent} </div>
              </div>
              <div id="changeLogArea">
                <div className={classNames('mr-1')}>
                  <FontAwesomeIcon icon={arrowIcon} />
                </div>
                {arrowContent}
              </div>
            </div>
            {chartArea}
          </div>

        </div>
      </div>
    )
  }
}

export const sharedPropTypes = {
  align: PropTypes.oneOf(['', 'left', 'center', 'right']),
  color: PropTypes.string,
  borderColor: PropTypes.string,
  textColor: PropTypes.string
}

GraphCard.propTypes = {
  tag: tagPropType,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  accentColor: PropTypes.string,
  ...sharedPropTypes
}

GraphCard.defaultProps = {
  tag: 'div'
}
