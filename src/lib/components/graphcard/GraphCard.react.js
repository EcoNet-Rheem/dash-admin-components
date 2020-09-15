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
      className,
      innerRef,
      color,
      textColor,
      borderColor,
      align,
      accentColor,
      cardTextContent,
      cardNumberContent,
      arrowContent,
      icon,
      arrowIcon,
      chartData,
      chartLabel,
      width,
      arrowIconColor,
      ...attributes
    } = this.props;

    var chartArea, cardBody, cardNumberArea, cardFooterArea;

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
          enabled: true,
          placement: 'auto'
        },
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

    cardFooterArea = <div className={classNames(className, 'card-footer')} >
      <a className={classNames(
        'btn-block',
        'justify-content-between',
        'align-items-center',
      )}
        href="#"
      >
        <span className={classNames('small', 'font-weight-bold')}>View More</span>
      </a>
      <FontAwesomeIcon icon={'caret-right'} id="view-more-icon" />
    </div>

    return (
      <div className={classNames(`col-sm-${width}`)}>
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
            <div className={classNames('row mt-2 mb-2 mr-4 ml-4')}>
              <div id="iconArea"><FontAwesomeIcon icon={icon} size="2x" /></div>
              <div id="contentArea">
                {cardNumberArea}
                <div> {cardTextContent} </div>
              </div>
              <div id="changeLogArea">
                <div className={classNames('mr-1')}>
                  <FontAwesomeIcon icon={arrowIcon} color={arrowIconColor} />
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
  width: PropTypes.number,
  ...sharedPropTypes
}

GraphCard.defaultProps = {
  tag: 'div',
  width: null
}
