import React from 'react';
import { Progress, Form, InputNumber, Button, Input } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../../layout/header';

const AccommodationAddBathAddAnotherBathDone = () => (
  <div className="main-layout">
    <MainHeader isNewListing newListingText="Accommodation" />
    <div className="main-layout__content main-layout__content--full-width">
      <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
      <section className="new-listing pt-32">
        <div className="new-listing__container mb-8">
          <h1 className="new-listing__title mb-8">How many guests can your place accommodate?</h1>
          <p className="new-listing__description mb-32">
            Check that you have enough beds to accommodate all your guests comfortably.
          </p>
          <Form layout="vertical" size="large">
            <div className="new-listing__item mb-24 pb-24">
              <Form.Item
                label="Number of guests you will accommodate?"
                htmlFor="guests"
                className="ant-form-item--light"
              >
                <InputNumber
                  addonBefore="Guests"
                  min={0}
                  defaultValue={0}
                  value={3}
                  id="guests"
                  controls={{
                    upIcon: <SvgIcon icon="plus-circle" />,
                    downIcon: <SvgIcon icon="minus-circle" />,
                  }}
                />
              </Form.Item>
              <Form.Item
                label="How many bedrooms can your guests use?"
                htmlFor="bedrooms"
                className="ant-form-item--light"
              >
                <InputNumber
                  addonBefore="Bedrooms"
                  min={0}
                  defaultValue={0}
                  value={2}
                  id="bedrooms"
                  controls={{
                    upIcon: <SvgIcon icon="plus-circle" />,
                    downIcon: <SvgIcon icon="minus-circle" />,
                  }}
                />
              </Form.Item>
              <Form.Item
                label="How many beds can your guests use?"
                htmlFor="beds"
                className="ant-form-item--light"
              >
                <InputNumber
                  addonBefore="Beds"
                  min={0}
                  defaultValue={0}
                  value={3}
                  id="beds"
                  controls={{
                    upIcon: <SvgIcon icon="plus-circle" />,
                    downIcon: <SvgIcon icon="minus-circle" />,
                  }}
                />
              </Form.Item>
              <Form.Item
                label="How many bathrooms can your guests use?"
                htmlFor="bathrooms"
                className="ant-form-item--light"
              >
                <InputNumber
                  addonBefore="Bathrooms"
                  min={0}
                  defaultValue={0}
                  value={2}
                  id="bathrooms"
                  controls={{
                    upIcon: <SvgIcon icon="plus-circle" />,
                    downIcon: <SvgIcon icon="minus-circle" />,
                  }}
                />
              </Form.Item>
            </div>
            <div className="new-listing__item mb-24">
              <h2 className="new-listing__subtitle mb-8">Sleeping arrangements</h2>
              <p className="new-listing__description mb-24">
                Sharing the types of beds in each room can help guests understand the sleeping
                arrangements.
              </p>
              <div className="new-listing__add mb-24 pb-8">
                <div className="new-listing__add-header d-flex justify-content-space-between align-item-center mb-8">
                  <h3 className="new-listing__add-title mb-0">Bedroom 1</h3>
                  <Button htmlType="button" className="main-link">
                    Edit beds
                  </Button>
                </div>
                <p className="new-listing__add-info new-listing__add-info--filled mb-16">
                  1 queen bed, 1 bunk bed
                </p>
              </div>
              <div className="new-listing__add mb-24 pb-8">
                <div className="new-listing__add-header d-flex justify-content-space-between align-item-center mb-8">
                  <h3 className="new-listing__add-title mb-0">Bedroom 2</h3>
                  <Button htmlType="button" className="main-link">
                    Edit beds
                  </Button>
                </div>
                <p className="new-listing__add-info new-listing__add-info--filled mb-16">
                  1 single bed
                </p>
              </div>
            </div>
            <div className="new-listing__item mb-24">
              <h2 className="new-listing__subtitle mb-8">Bathroom arrangements</h2>
              <p className="new-listing__description mb-24">
                Sharing the types of baths in each bathroom can help guests understand the bathroom
                arrangements.
              </p>
              <div className="new-listing__add mb-24 pb-8">
                <div className="new-listing__add-header d-flex justify-content-space-between align-item-center mb-8">
                  <h3 className="new-listing__add-title mb-0">Bathroom 1</h3>
                  <Button htmlType="button" className="main-link" hidden>
                    Add baths
                  </Button>
                </div>
                <p className="new-listing__add-info new-listing__add-info--filled mb-16">
                  1 bathtub, 1 showers
                </p>
                <div className="new-listing__add-options max-width-364 mb-8">
                  <Form.Item className="mb-8 ant-form-item--light">
                    <InputNumber
                      addonBefore="Bathtub"
                      min={0}
                      defaultValue={0}
                      value={1}
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                  <Form.Item className="mb-8 ant-form-item--light">
                    <InputNumber
                      addonBefore="Shower"
                      min={0}
                      defaultValue={0}
                      value={1}
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                  <Form.Item className="mb-8 ant-form-item--light">
                    <InputNumber
                      addonBefore="Jetted tub"
                      min={0}
                      defaultValue={0}
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                  <Form.Item className="mb-8 ant-form-item--light">
                    <InputNumber
                      addonBefore="Double vanity"
                      min={0}
                      defaultValue={0}
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="d-flex">
                  <Form.Item className="mb-16 ant-form-item--edit-number width-364">
                    <Input placeholder="Enter bath title" value="Baby bath" />
                    <InputNumber
                      min={0}
                      defaultValue={0}
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                  <Button
                    htmlType="button"
                    className="main-btn main-btn--tertiary main-btn--icon ml-8"
                  >
                    <SvgIcon icon="cross" className="icon-right" />
                  </Button>
                </div>
                <Button htmlType="button" className="main-link mb-24 mt-8">
                  Add another bath
                </Button>
                <Button
                  htmlType="button"
                  className="main-btn main-btn--secondary min-width-140 mb-16"
                >
                  Done
                </Button>
              </div>
              <div className="new-listing__add mb-24 pb-8">
                <div className="new-listing__add-header d-flex justify-content-space-between align-item-center mb-8">
                  <h3 className="new-listing__add-title mb-0">Bathroom 2</h3>
                  <Button htmlType="button" className="main-link">
                    Add baths
                  </Button>
                </div>
                <p className="new-listing__add-info mb-16">0 baths</p>
              </div>
            </div>
          </Form>
        </div>
        <div className="new-listing__footer pt-24 pb-24">
          <div className="new-listing__container d-flex justify-content-space-between">
            <Button htmlType="button" className="main-btn main-btn--tertiary min-width-140">
              Back
            </Button>
            <Button htmlType="submit" className="main-btn main-btn--primary min-width-140 ml-auto">
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default AccommodationAddBathAddAnotherBathDone;
