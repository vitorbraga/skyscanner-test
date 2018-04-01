import './Loading.scss';
import 'react-placeholder/lib/reactPlaceholder.css';

import { RectShape, RoundShape, TextRow } from 'react-placeholder/lib/placeholders';

import React from 'react';
import ReactPlaceholder from 'react-placeholder';

const Loading = () => (
  <div className="loading">
    <LoadingCard />
    <LoadingCard />
    <LoadingCard />
  </div>
);

const CustomPlaceholder = (props) => {
  return (
    <div className='custom-placeholder show-loading-animation'>
      <div className="custom-placeholder__leg">
        <TextRow color='#E0E0E0' />
        <TextRow color='#E0E0E0' />
      </div>
      <div className="custom-placeholder__leg">
        <TextRow color='#E0E0E0' />
        <TextRow color='#E0E0E0' />
      </div>
      <div className="custom-placeholder__bottom">
        <RectShape color='#E0E0E0' style={{width: 150, height: 40}}/>
        <RoundShape color='#E0E0E0' style={{width: 100, height: 40}}/>
      </div>
    </div>
  );
};

const LoadingCard = (props) => {
  return (
    <ReactPlaceholder
      showLoadingAnimation
      customPlaceholder={<CustomPlaceholder />}
      ready={false}
    >
      <div />
    </ReactPlaceholder>
  );
};

export default Loading;
