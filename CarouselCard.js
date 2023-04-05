import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const carouselImages = [{
        image: require('./assets/carreraGt.jpg'),
        modelName: 'Porsche Carrera GT',

    },
    {
        image: require('./assets/cayenne.png'),
        modelName: 'Porsche Cayenne',
    },
    {
        image: require('./assets/r8-2021.jpg'),

        modelName: 'Audi r8',
    },
    {
        image: require('./assets/supra.jpg'),
        modelName: 'Toyota GR Supra',
    },
];

const CarouselCard = () => {
    const [activeSlide, setActiveSlide] = React.useState(0);

  const renderItem = ({ item }) => (
    <View style={carouselStyles.carouselCard}>
      <Image source={item.image} style={carouselStyles.carouselImage} />
      <Text style={carouselStyles.carouselModelName}>{item.modelName}</Text>
    </View>
  );

    return (
    <View>
        <Carousel
            data={carouselImages}
            renderItem={renderItem}
            sliderWidth={360}
            itemWidth={300}
            onSnapToItem={(index) => setActiveSlide(index)}
            containerCustomStyle={{flexGrow: 0}}
            contentContainerCustomStyle={carouselStyles.carouselContentContainer}
            loop={true}
            autoplay={true}
            autoplayDelay={1500}
            autoplayInterval={3000}

            shouldOptimizeUpdates={true}
        />


        <View style={carouselStyles.paginationWrapper}>
            <Pagination
            dotsLength={carouselImages.length}
            activeDotIndex={activeSlide}
            dotStyle={carouselStyles.paginationDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            />
        </View>
    </View>
    );
};

export default CarouselCard;

const carouselStyles = StyleSheet.create({
    carouselCard: {
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
        shadowColor: '#A0A0A0',
        shadowOffset: {
            width: -1,
            height: -1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
    },
    carouselModelName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    carouselContentContainer: {
        marginTop: 30,
        marginBottom: 20,
    },
    carouselImage: {
        flexGrow: 0,
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    paginationWrapper: {
        marginTop: -25, // Adjust this value to reduce or increase the gap
    },

    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#A0A0A0',
    },
});
