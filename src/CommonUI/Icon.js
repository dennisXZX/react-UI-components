import React, { Component } from 'react'

class Icon extends Component {
  static defaultProps = {
    color: 'black',
    strokeWidth: 2
  }

  render () {
    const { color, strokeWidth } = this.props;

    switch (this.props.name) {
      case 'close':
        return (
          <svg
            x="0px"
            y="0px"
            width="13px"
            height="13px"
          >
            <line x1="1" y1="11"
                  x2="11" y2="1"
                  stroke={color}
                  stroke-width={strokeWidth} />
            <line x1="1" y1="1"
                  x2="11" y2="11"
                  stroke={color}
                  stroke-width={strokeWidth} />
          </svg>
        )
      default:
        return null;
    }
  }
}

export default Icon
