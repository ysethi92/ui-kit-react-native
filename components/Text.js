import React, { Component } from 'react';
import { StyleSheet,View, Text } from 'react-native';
import PropTypes from 'prop-types'

const Texte = props => {
    const {
      style,
      children,
      h1,
      h2,
      h3,
      h4,
      h1Style,
      h2Style,
      h3Style,
      h4Style,
    } = props;
  
    return (
      <Text
        style={StyleSheet.flatten([
          style && style,
          h1 && styles.bold,
          h2 && styles.bold,
          h3 && styles.bold,
          h4 && styles.bold,
          h1 && StyleSheet.flatten([{ fontSize: 40 }, h1Style]),
          h2 && StyleSheet.flatten([{ fontSize: 34 }, h2Style]),
          h3 && StyleSheet.flatten([{ fontSize: 28 }, h3Style]),
          h4 && StyleSheet.flatten([{ fontSize: 22 }, h4Style]),
        ])}
      >
        {children}
      </Text>
    );
  };
  
  Texte.propTypes = {
    style: Text.propTypes.style,
    h1: PropTypes.bool,
    h2: PropTypes.bool,
    h3: PropTypes.bool,
    h4: PropTypes.bool,
    h1Style: Text.propTypes.style,
    h2Style: Text.propTypes.style,
    h3Style: Text.propTypes.style,
    h4Style: Text.propTypes.style,
    children: PropTypes.node,
  };
  
  Texte.defaultProps = {
    h1: false,
    h2: false,
    h3: false,
    h4: false,
    style: {},
    h1Style: {},
    h2Style: {},
    h3Style: {},
    h4Style: {},
    children: '',
  };
  

  const styles = {
      bold: {
          fontWeight: 'bold',
      }
  }

  export default Texte;