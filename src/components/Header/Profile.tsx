import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Claudio Orlandi</Text>
        <Text color="gray.300" fontSize="small">
          claudiosorlandi@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Claudio Orlandi"
        src="https://github.com/csorlandi.png"
      />
    </Flex>
  );
}
