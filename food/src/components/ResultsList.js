import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length) {
        return null;
    }
    return ( 
    <View style={style.container}>
        <Text style={style.titleStyle}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({item}) => {
                return (
                <TouchableOpacity
                 onPress={() => 
                 navigation.navigate('ResultsShow', { id: item.id })}
                 >
                <ResultsDetail result={item}/>
                </TouchableOpacity>
                )
            }}
        />
    </View>
    );
};

const style = StyleSheet.create({
    titleStyle: {
        marginLeft: 15,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;