import React, { useState } from 'react';
import { Text, Box } from '@chakra-ui/react';

const styles = {
  text: {
    display: 'inline'
  },
  toggle: {
    display: 'inline',
    color: 'cyan.600',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export const ReadMore = ({ text }: {text: string}) => {
  const [isReadMore, setIsReadMore,] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore((isReadMore) => !isReadMore);
  };

  const shouldShowMore = text.length > 400;

  return (
    <Box>
      {shouldShowMore &&
        <>
          <Text sx={styles.text}>
            {isReadMore ? text.slice(0, 400) + '...' : text}
          </Text>
          <Text onClick={toggleReadMore} sx={styles.toggle}>
            {isReadMore ? 'Read more' : ' Show less'}
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
