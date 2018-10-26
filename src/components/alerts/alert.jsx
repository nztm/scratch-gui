import React from 'react';
import PropTypes from 'prop-types';
import {FormattedMessage} from 'react-intl';

import Box from '../box/box.jsx';
import CloseButton from '../close-button/close-button.jsx';

import styles from './alert.css';

const AlertComponent = ({
    iconURL,
    message,
    onCloseAlert,
    onReconnect
}) => (
    <Box
        className={styles.alert}
    >
        <div className={styles.alertMessage}>
            {iconURL ? (
                <img
                    className={styles.alertIcon}
                    src={iconURL}
                />
            ) : null}
            {message}
        </div>
        <button
            className={styles.connectionButton}
            onClick={onReconnect}
        >
            <FormattedMessage
                defaultMessage="Reconnect"
                description="Button to disconnect the device"
                id="gui.connection.disconnect"
            />
        </button>
        <Box
            className={styles.alertCloseButtonContainer}
        >
            <CloseButton
                className={styles.alertCloseButton}
                color={CloseButton.COLOR_ORANGE}
                size={CloseButton.SIZE_LARGE}
                onClick={onCloseAlert}
            />
        </Box>
    </Box>
);

AlertComponent.propTypes = {
    iconURL: PropTypes.string,
    message: PropTypes.string,
    onCloseAlert: PropTypes.func.isRequired,
    onReconnect: PropTypes.func.isRequired
};

export default AlertComponent;
