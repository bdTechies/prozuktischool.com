import React from 'react';
import { graphql } from 'gatsby';
import { convertNumbers } from 'bn-number-utils';
import { kebabCase } from 'lodash';
import { MainLayout } from '../../layouts';
import { PostList, SEO, Text } from '../../components';

const SeriesPage = ({
  data: {
    allMarkdownRemark: { edges: postNodes, group: seriesInfo },
  },
}) => (
  <MainLayout variant="fixed">
    <SEO
      pageTitle={seriesInfo[0].fieldValue}
      pagePath={`/series/${kebabCase(seriesInfo[0].fieldValue)}/`}
    />
    <Text variant="h4">
      {`সিরিজ: ${seriesInfo[0].fieldValue} (${convertNumbers(
        seriesInfo[0].totalCount
      )} পর্ব)`}
    </Text>
    <PostList postNodes={postNodes} />
  </MainLayout>
);

export const pageQuery = graphql`
  query PostsBySeries($series: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { series: { eq: $series }, published: { eq: true } }
      }
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            series
          }
          fields {
            slug
          }
        }
      }
      group(field: frontmatter___series) {
        fieldValue
        totalCount
      }
    }
  }
`;

export default SeriesPage;
