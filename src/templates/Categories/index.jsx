import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { MainLayout } from '../../views/layouts';
import PostListing from '../../components/PostListing';
import config from '../../../data/SiteConfig';

export default class CategoryTemplate extends React.Component {
  render() {
    const { category } = this.props.pageContext;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <MainLayout>
        <div className="category-container">
          <Helmet
            title={`Posts in category "${category}" | ${config.siteTitle}`}
          />
          <PostListing postEdges={postEdges} />
        </div>
      </MainLayout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___date], order: DESC }
      filter: {
        frontmatter: {
          published: { eq: true }
          categories: { in: [$category] }
        }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            categories
            cover
            date
          }
        }
      }
    }
  }
`;
