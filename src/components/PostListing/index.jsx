import React from 'react';
import { Link } from 'gatsby';
import { SummaryCard, Box, Flex } from '../../views/components';

const PostListing = ({ limit = 0, postEdges = [] }) => {
  const getPostList = () => {
    let postList = [];
    postEdges.forEach((postEdge) => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.fields.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead,
        language: postEdge.node.frontmatter.language,
      });
    });
    if (limit) {
      postList = postList.splice(0, limit);
    }
    return postList;
  };

  const postList = getPostList();

  return (
    <Flex mx={[0, -2]} flexWrap="wrap">
      {
        /* Your post list here. */
        postList.map((post) => (
          <Box key={post.title} width={[1, 1 / 3]} px={3} py={3}>
            <Link to={post.path}>
              <SummaryCard language={post.language}>{post.title}</SummaryCard>
            </Link>
          </Box>
        ))
      }
    </Flex>
  );
};

export default PostListing;
