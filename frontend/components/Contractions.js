import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_CONTRACTIONS_QUERY = gql`
  query ALL_CONTRACTIONS_QUERY {
    contractions @rest(type: "Contraction", path: "contractions/") {
      id
      start
      end
      duration
      frequency
      pain
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ContractionsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export default class Contractions extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_CONTRACTIONS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>loading...</p>;
            if (loading) return <p>Error: {error.message}</p>;
            return (
              <ContractionsList>
                {data.items.map(item => (
                  <div key={item.id}>{item}</div>
                ))}
              </ContractionsList>
            );
          }}
        </Query>
      </Center>
    );
  }
}
