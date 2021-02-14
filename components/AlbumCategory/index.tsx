import React from 'react';
import { View ,Text} from 'react-native';
import styles from './styles';
import {Album} from "../../types";

export type AlbumCategoryProps={
    title:string,
    albums :[Album],
}

const AlbumCategory =(props: AlbumCategoryProps)=>(
    <View>
        {/* {{title of category} */}
        <Text style>{styles.title}> {props.title}</Text>
        {/* list of albums */}
    </View>
)

export default AlbumCategory;