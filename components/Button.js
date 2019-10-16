import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const PRIMARY_C = "#007BFF";
const SUCCESS_C = "#00C851";
const WARNING_C = "#FF8800";
const DANGER_C = "#CC0000";
const INFO_C = "#33B5E5";

const styles = StyleSheet.create({
    //
    containerDefault: {
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderRadius: 6,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    containerRound: {
        borderRadius: 25,
    },
    containerLarge: {
        paddingVertical: 15,
    },
    containerSmall: {
        paddingVertical: 5,
    },
    containerDisabled: {
        opacity: 0.65,
    },
    containerPrimary: {
        backgroundColor: PRIMARY_C,
        borderColor: PRIMARY_C,
    },
    containerSuccess: {
        backgroundColor: SUCCESS_C,
        borderColor: SUCCESS_C,
    },
    containerWarning: {
        backgroundColor: WARNING_C,
        borderColor: WARNING_C,
    },
    containerDanger: {
        backgroundColor: DANGER_C,
        borderColor: DANGER_C,
    },
    containerInfo: {
        backgroundColor: INFO_C,
        borderColor: INFO_C,
    },
    
    containerNotFull: {
        width: 150,
    },

    // OUTLINE

    containerOutline: {
        backgroundColor: 'transparent',
    },


    // TEXT
    textDefault: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff',
    },

    textOutlinePrimary: {
        color: PRIMARY_C,
    },

    textOutlineSuccess: {
        color: SUCCESS_C,
    },

    textOutlineWarning: {
        color: WARNING_C,
    },

    textOutlineDanger: {
        color: DANGER_C,
    },


    textOutlineInfo: {
        color: INFO_C,
    },

    textLarge: {
        fontSize: 20,
    },
    textSmall: {
        fontSize: 14,
    },
    textDisabled: {

    },

});

const getStyles = ({ size, theme, disabled, round, outline, full }) => {
    const containerStyles = [styles.containerDefault];
    const textStyles = [styles.textDefault];

    if (size === 'large') {
        containerStyles.push(styles.containerLarge);
        textStyles.push(styles.textLarge);
    } else if (size === 'small') {
        containerStyles.push(styles.containerSmall);
        textStyles.push(styles.textSmall);
    }

    if(!full) {
        containerStyles.push(styles.containerNotFull);
    }

    if (disabled) {
        containerStyles.push(styles.containerDisabled);
        textStyles.push(styles.textDisabled);
    }
    
    if (theme === 'primary') {
        containerStyles.push(styles.containerPrimary);
        if(outline) {
            containerStyles.push(styles.containerOutline);
            textStyles.push(styles.textOutlinePrimary);
        }
    }

    if (theme === 'success') {
        containerStyles.push(styles.containerSuccess);
        if(outline) {
            containerStyles.push(styles.containerOutline);
            textStyles.push(styles.textOutlineSuccess);
        }
    }

    if (theme === 'warning') {
        containerStyles.push(styles.containerWarning);
        if(outline) {
            containerStyles.push(styles.containerOutline);
            textStyles.push(styles.textOutlineWarning);
        }
    }

    if (theme === 'danger') {
        containerStyles.push(styles.containerDanger);
        if(outline) {
            containerStyles.push(styles.containerOutline);
            textStyles.push(styles.textOutlineDanger);
        }
    }

    if (theme === 'info') {
        containerStyles.push(styles.containerInfo);
        if(outline) {
            containerStyles.push(styles.containerOutline);
            textStyles.push(styles.textOutlineInfo);
        }
    }

    if (round){
        containerStyles.push(styles.containerRound);
    }

    return { textStyles, containerStyles };

}


class Button extends Component {
    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
        size: PropTypes.oneOf(['small', 'default', 'large']),
        theme: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'info']),
        disabled: PropTypes.bool,
        round: PropTypes.bool,
        outline: PropTypes.bool,
        full: PropTypes.bool,
    }

    static defaultProps = {
        size: 'default',
        theme: 'primary',
        round: false,
        disabled: false,
        full: false,
    };

    render() {
        const {
          onPress,
          text,
          disabled,
          ...rest
        } = this.props;
        const { textStyles, containerStyles } = getStyles({ disabled, ...rest });
    
        return (
          <TouchableOpacity onPress={onPress} style={containerStyles} disabled={disabled}>
            <Text style={textStyles}>{text}</Text>
          </TouchableOpacity>
        );
    }
}

export { Button };