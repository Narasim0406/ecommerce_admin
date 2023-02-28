/*
 *
 * Account
 *
 */

import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

import StoreDetails from '../../components/Manager/StoreDetails';
import SubPage from '../../components/Manager/SubPage';

class Store extends React.PureComponent {
  componentDidMount() {
    // this.props.fetchProfile();
  }

  render() {
    console.log("======> storeChange", this.props)
    const { store, storeChange, updateStore, user } = this.props;

    return (
      <div className='account'>
        <SubPage title={'Store Details'} isMenuOpen={null}>
          <StoreDetails
            store={store}
            user={user}
            storeChange={storeChange}
            updateStore={updateStore}
          />
        </SubPage>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state.store.store,
    user: state.account.user,
    resetFormData: state.resetPassword.resetFormData,
    formErrors: state.resetPassword.formErrors
  };
};

export default connect(mapStateToProps, actions)(Store);
