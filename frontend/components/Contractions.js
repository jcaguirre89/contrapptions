import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const ALL_CONTRACTIONS_QUERY = gql`
  query ALL_CONTRACTIONS_QUERY {
    contractions {
      id
      start
      end
      duration
      frequency
      pain
    }
  }
`;

export default function Contractions() {
  return <div></div>;
}
