import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonShadow from '../components/Button/ButtonShadow';
import { updateUser } from '../data/reducer/userReducer';
import { Constant } from '../utils/constant';
import { Colors } from '../utils/colors';
import citiesData from '../data/cities.json'
import { CapitalizeData, ValidateDataSchoolAndLocalization } from '../utils/verification';
import MultiSelectInput from '../components/selectInput/MultiSelectInput';
import SingleSelectInput from '../components/selectInput/singleSelectInput';
import { SchoolType } from '../types/Schooltype';
import * as SecureStore from 'expo-secure-store'
import City from '../data/customTypes/City';
import { jwtDecode } from 'jwt-decode';
import { useNavigation } from '@react-navigation/native';

const RegisterSchoolAndLocalization = () => {

    const navigation = useNavigation();

    const [localisations, setLocalisations] = useState<string[]>([""]);
    const [school, setSchool] = useState<{ label: string, value: string }[]>([{ label: "", value: "" }]);
    const [schoolData, setSchoolData] = useState<string>('');

    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);

    const decodeToken = () => {
        const token = SecureStore.getItem('token');
        if (token) {
            const tokenDecode = jwtDecode(token);
            return tokenDecode;
        }
        return null;
    }

    const getSchoolData = async () => {
        try {
            const response = await fetch('https://studentlink.etudiants.ynov-bordeaux.com/api/schools')
            const json = await response.json();
            setSchool(json.map((school: SchoolType) => ({ label: school.name, value: `${school.id}` })))
        } catch (error) {
            console.error(error);
        }
    }

    const setLocalisationsAndSchoolforUser = async () => {
        const token = decodeToken();
        if (!token) return;
        try {
            const response = await fetch(`https://studentlink.etudiants.ynov-bordeaux.com/api/users/${token.sub}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + (await SecureStore.getItemAsync('token'))

                },
                body: JSON.stringify({
                    locations: localisations,
                    school: schoolData,
                })
            });
            const json = await response.json();
            if (json.message) {
                alert(json.message);
                return;
            }
            navigation.navigate('HomePage');
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getSchoolData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tu viens</Text>
            <Text style={[styles.text, { color: Colors.BLUE, marginBottom: Constant.MARGIN_BOTTOM_TITLE }]}>d'où ?</Text>
            <SingleSelectInput data={school} onChange={({ value }) => setSchoolData(value)} />
            <MultiSelectInput
                onChange={setLocalisations}
                data={citiesData.map(city => (
                    {
                        label: `${city.zip_code} - ${CapitalizeData(city.label)}`
                        , value: parseInt(city.insee_code)
                    }
                ))}
            />
            <ButtonShadow
                label='Suivant'
                onClick={() => {
                    if (ValidateDataSchoolAndLocalization(localisations, schoolData)) {
                        setLocalisationsAndSchoolforUser();
                    }
                }} />
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.DARKEN_BLUE,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: Colors.WHITE,
        fontWeight: '900',
        fontSize: Constant.TITLE_SIZE,
        textAlign: 'center',
    },
    subtitle: {
        color: Colors.WHITE,
        fontWeight: '600',
        fontSize: Constant.SUBTITLE_SIZE,
        marginBottom: Constant.MARGIN_BOTTOM_SUBTITLE,
    }
});

export default RegisterSchoolAndLocalization;