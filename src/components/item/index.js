import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { TouchableOpacity, Image } from 'react-native';

import styles from './styles';

export default class DropdownItem extends PureComponent {
  static defaultProps = {
    color: 'transparent',
    disabledColor: 'transparent',
    rippleContainerBorderRadius: 0,
    shadeBorderRadius: 0,
  };

  static propTypes = {
    ...TouchableOpacity.propTypes,

    index: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    let { onPress, index } = this.props;

    if ('function' === typeof onPress) {
      onPress(index);
    }
  }

  render() {
    let { children, style, index, ...props } = this.props;

    return (
      <TouchableOpacity
        {...props}

        style={[styles.container, style, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}
        onPress={this.onPress}
      >
        <Image source={this.props.image} style={{ height: '100%', width:'10%', alignSelf:'flex-start', resizeMode: 'contain' }} />
        {children}
      </TouchableOpacity>
    );
  }
}
