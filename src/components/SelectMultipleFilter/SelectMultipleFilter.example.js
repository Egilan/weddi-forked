import React from 'react';
import { withRouter } from 'react-router-dom';
import SelectMultipleFilter from './SelectMultipleFilter';
import { stringify, parse } from '../../util/urlHelpers';

const URL_PARAM = 'pub_services';

const options = [
  { key: 'ashtanga', label: 'Ashtanga' },
  { key: 'hatha', label: 'Hatha' },
  { key: 'kundalini', label: 'Kundalini' },
  { key: 'restorative', label: 'Restorative' },
  { key: 'vinyasa', label: 'Vinyasa' },
  { key: 'yin', label: 'yin' },
];

const handleSubmit = (values, history) => {
  console.log('Submitting values', values);
  const queryParams = values ? `?${stringify(values)}` : '';
  history.push(`${window.location.pathname}${queryParams}`);
};

const ServicesFilterPopup = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const services = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!services ? services : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPopupExample"
      name="services"
      queryParamNames={[URL_PARAM]}
      label="services"
      onSubmit={values => handleSubmit(values, history)}
      showAsPopup={true}
      liveEdit={false}
      options={options}
      initialValues={initialValues}
      contentPlacementOffset={-14}
    />
  );
});

export const ServicesFilterPopupExample = {
  component: ServicesFilterPopup,
  props: {},
  group: 'filters',
};

const ServicesFilterPlain = withRouter(props => {
  const { history, location } = props;

  const params = parse(location.search);
  const services = params[URL_PARAM];
  const initialValues = { [URL_PARAM]: !!services ? services : null };

  return (
    <SelectMultipleFilter
      id="SelectMultipleFilterPlainExample"
      name="services"
      queryParamNames={[URL_PARAM]}
      label="services"
      onSubmit={values => {
        handleSubmit(values, history);
      }}
      showAsPopup={false}
      liveEdit={true}
      options={options}
      initialValues={initialValues}
    />
  );
});

export const ServicesFilterPlainExample = {
  component: ServicesFilterPlain,
  props: {},
  group: 'filters',
};
