import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Claudio Orlandi</Text>
          <Text color="gray.300" fontSize="small">
            claudiosorlandi@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Claudio Orlandi"
        src="https://github.com/csorlandi.png"
      />
    </Flex>
  );
}
