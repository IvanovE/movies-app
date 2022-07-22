import React, { useState } from 'react';
import { Text, Box } from '@chakra-ui/react';

const styles = {
  text: {
    display: 'inline'
  },
  toggle: {
    display: 'inline',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export const ReadMore = ({ text }: {text: string}) => {
  const [isShowMore, setIsShowMore] = useState(true);

  const toggleReadMore = () => {
    setIsShowMore((isReadMore) => !isReadMore);
  };

  const shouldShowMore = text.length > 400;

  return (
    <Box>
      {shouldShowMore &&
        <>
          <Text sx={styles.text}>
            {isShowMore ? text.slice(0, 400) + '...' : text}
          </Text>
          <Text
            variant='withColorMode'
            onClick={toggleReadMore}
            sx={styles.toggle}
          >
            {isShowMore ? 'Read more' : ' Show less'}
          </Text>
        </>
      }
      {!shouldShowMore &&
          <Text>
            {text}
          </Text>
      }
    </Box>
  );
};
