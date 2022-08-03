import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text fontSize="3xl" fontWeight="bold" w="64">
      Chakraboard
      <Text as="span" color="pink.500" ml="1">
        .
      </Text>
    </Text>
  );
}
