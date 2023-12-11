import React from 'react';
import { connect } from 'react-redux';
import { hideLoginRequired } from '../../providers/SubscriptionProvider/SubscriptionProvider.actions';
import { Dialog } from '@material-ui/core';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import WarningIcon from '@material-ui/icons/Warning';
import DialogContent from '@material-ui/core/DialogContent';
import { Typography } from '@material-ui/core';

function LoginRequiredModal({ hideLoginRequired, loginRequiredModalState }) {
  const { open } = loginRequiredModalState;

  return (
    <Dialog
      open={open}
      onClose={hideLoginRequired}
      maxWidth="md"
      aria-labelledby="dialog"
    >
      <DialogContent className={'style.content'}>
        <WarningIcon fontSize="large" color="action" />
        <Typography variant="h3">{'dialogText.tittle'}</Typography>
        <Typography className={'style.dialogText'} variant="h6">
          Login required
        </Typography>
        <Button
          onClick={hideLoginRequired}
          color="primary"
          variant="contained"
          size="large"
          component={Link}
          to="/login-signup"
        >
          buttttton
          {/* <FormattedMessage {...messages.upgradeNow} /> */}
        </Button>
      </DialogContent>
    </Dialog>
  );
}

const mapStateToProps = ({ subscription: { loginRequiredModalState } }) => ({
  loginRequiredModalState
});

const mapDispatchToProps = {
  hideLoginRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRequiredModal);
