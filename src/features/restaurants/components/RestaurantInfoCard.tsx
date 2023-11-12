/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

// Types
type RestaurantInfoProps = {
  name: string;
  icon?: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily?: boolean;
};

// Styled Elements
const CardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: 'white';
`;
const RestaurantCard = styled(Card)`
  background-color: white;
`;
const Title = styled(Text)`
  padding: 16px;
`;

export const RestaurantInfoCard = ({
  restaurant,
}: {
  restaurant: RestaurantInfoProps;
}) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <CardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
