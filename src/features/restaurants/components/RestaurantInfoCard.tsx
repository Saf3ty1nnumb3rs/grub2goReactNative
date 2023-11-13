import { useMemo } from 'react';
import { SvgXml } from 'react-native-svg';

import open from '../../../../assets/open';
import star from '../../../../assets/star';
import { Spacer } from 'components/Spacer/Spacer';
import { Typography } from 'components/Typography/Typography';
import {
  Address,
  CardCover,
  CardInfo,
  Icon,
  Rating,
  RestaurantCard,
  Section,
  SectionEnd,
} from './RestaurantInfoCard.styled';

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

  const ratingArray = useMemo(
    () => Array.from(new Array(Math.floor(rating))),
    [rating],
  );

  return (
    <RestaurantCard elevation={5}>
      <CardCover key={name} source={{ uri: photos[0] }} />
      <CardInfo>
        <Typography variant="label">{name}</Typography>
        <Section>
          <Rating>
            {ratingArray.map((_, index) => (
              <SvgXml key={index} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Typography variant="error">CLOSED TEMPORARILY</Typography>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </CardInfo>
    </RestaurantCard>
  );
};
