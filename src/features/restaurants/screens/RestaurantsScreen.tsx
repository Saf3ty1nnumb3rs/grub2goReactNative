import { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/RestaurantInfoCard';
import { Spacer } from 'components/Spacer/Spacer';

// Styled Elements
const ListView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantList = styled(FlatList<RestaurantInfoProps>).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const SafeAreaScreen = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
const SearchView = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <SafeAreaScreen>
      <SearchView>
        <Searchbar
          elevation={2}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </SearchView>
      <ListView>
        <RestaurantInfoCard
          restaurant={{
            name: 'Some Restaurant',
            icon: 'https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png',
            photos: [
              'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=3570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            ],
            address: '100 some random street',
            isOpenNow: true,
            rating: 4,
          }}
        />
      </ListView>
      <RestaurantList
        data={[]}
        renderItem={({ item }) => (
          <Spacer position="bottom" size="large">
            <RestaurantInfoCard restaurant={item} />
          </Spacer>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaScreen>
  );
};
