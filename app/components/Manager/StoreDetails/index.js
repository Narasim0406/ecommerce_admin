/**
 *
 * StoreDetails
 *
 */

import React from 'react';

import { Row, Col } from 'reactstrap';

import { EMAIL_PROVIDER } from '../../../constants';
import UserRole from '../UserRole';
import Input from '../../Common/Input';
import Button from '../../Common/Button';

const StoreDetails = props => {
  const { store, storeChange, updateStore, user } = props;

  const handleSubmit = event => {
    event.preventDefault();
    updateStore();
  };

  return (
    <div className='account-details'>
      <div className='info'>
        <div className='desc'>
          <p className='one-line-ellipsis mr-3'>
            {store.provider === EMAIL_PROVIDER.Email ? (
              store.email
            ) : (
              <span className='provider-email'>
                Logged in With {store.provider}
              </span>
            )}
          </p>
          <UserRole user={user} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs='12' md='6'>
            <Input
              type={'text'}
              label={'Store Name'}
              name={'name'}
              placeholder={'Please Enter Your First Name'}
              value={store.name ? store.name : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          
          {/* TODO: update email feature to be added instead form change */}
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'Email'}
              name={'email'}
              placeholder={'Please Enter Your Email'}
              value={store.email ? store.email : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'Phone Number'}
              name={'phoneNumber'}
              placeholder={'Please Enter Your Phone Number'}
              value={store.phoneNumber ? store.phoneNumber : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'Category'}
              name={'category'}
              placeholder={'Please Enter Your Category'}
              value={store.category ? store.category : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'Website'}
              name={'website'}
              placeholder={'Please Enter Website'}
              value={store.website ? store.website : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              label={'Description'}
              name={'description'}
              placeholder={'Please Enter Your Description'}
              value={store.description ? store.description : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'text'}
              label={'Address'}
              name={'address'}
              placeholder={'Please Enter Your Address'}
              value={store.address ? store.address : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'Delivery Charge'}
              name={'deliveryCharge'}
              placeholder={'Please Enter Delivery Charge'}
              value={store.deliveryCharge ? store.deliveryCharge : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'Delivery Charge Min Amount'}
              name={'supportContact'}
              placeholder={'Delivery Charge Min Amount'}
              value={store.supportContact ? store.supportContact : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <p>Bank Account Details:</p>
          </Col>
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'Account No'}
              name={'bankAccountNo'}
              placeholder={'Please Enter Account No'}
              value={store.bankAccountNo ? store.bankAccountNo : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <br></br>
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'IFSC No'}
              name={'bankIfscNo'}
              placeholder={'Please Enter IFSC No'}
              value={store.bankIfscNo ? store.bankIfscNo : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'Bank Name'}
              name={'bankName'}
              placeholder={'Please Enter Bank Name'}
              value={store.bankName ? store.bankName : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'Bank Branch'}
              name={'bankBranch'}
              placeholder={'Please Enter Bank Branch'}
              value={store.bankBranch ? store.bankBranch : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <p>PAN Card</p>
          </Col>
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'PAN No'}
              name={'panNo'}
              placeholder={'Please Enter PAN No'}
              value={store.panNo ? store.panNo : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'file'}
              // error={formErrors['file']}
              name={'panImage'}
              label={'Pan Image'}
              placeholder={'Please Upload Image'}
              value={store.panImage ? store.panImage : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <p>GST </p>
          </Col>
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'GST No'}
              name={'gstNo'}
              placeholder={'Please Enter GST No'}
              value={store.gstNo ? store.gstNo : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'file'}
              name={'gstImage'}
              label={'file'}
              placeholder={'Please Upload Image'}
              value={store.gstImage ? store.gstImage : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <p>License </p>
          </Col>
          <Col xs='6' md='6'>
            <Input
              type={'text'}
              label={'License No'}
              name={'licenseNo'}
              placeholder={'Please Enter License No'}
              value={store.licenseNo ? store.licenseNo : ''}
              onInputChange={(name, value) => {
                storeChange(name, value);
              }}
            />
          </Col>
          <Col xs='12' md='12'>
            <Input
              type={'file'}
              name={'image'}
              label={'file'}
              placeholder={'Please Upload Image'}
              value={store.licenseImage ? store.licenseImage : ''}
              onInputChange={(name, value) => {
                
              }}
            />
          </Col>
        </Row>
        <hr />
        <div className='profile-actions'>
          <Button type='submit' variant='secondary' text='Save changes' />
        </div>
      </form>
    </div>
  );
};

export default StoreDetails;
