import { useEffect, useState } from 'react'
import { Image, Platform, Pressable, ScrollView, StyleSheet, Switch, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import InputItem from '../../components/InputItem'
import TextRegular from '../../components/TextRegular'
import * as GlobalStyles from '../../styles/GlobalStyles'
import defaultProductImage from '../../../assets/product.jpeg'
import { getProductCategories, create } from '../../api/ProductEndpoints'
import { showMessage } from 'react-native-flash-message'
import DropDownPicker from 'react-native-dropdown-picker'
import * as yup from 'yup'
import { ErrorMessage, Formik } from 'formik'
import TextError from '../../components/TextError'
import ImagePicker from '../../components/ImagePicker'



export default function CreateProductScreen({ navigation }) {
    const initialProductValues = {
        name: null,
        description: null,
        price: null,
        image: null,
        productCategory: null,
        availability: null,
    }
    return (
        <Formik
        initialValues={initialProductValues}
        >
        {({ setFieldValue, values }) => (
            <ScrollView>
            <View style={{ alignItems: 'center' }}>
                <View style={{ width: '60%' }}>
                <ImagePicker
                    name='image'

                    label='Image:'
                    image={values.image}
                    onImagePicked={result => setFieldValue('image', result)}
                />
                <InputItem
                    name='name'
                    label='Name:'
                />
                <InputItem
                    name='description'
                    label='Description:'
                />
                <InputItem
                    name='price'
                    label='Price:'
                />
                <InputItem
                    name='productCategory'
                    label='Product Category:'
                />
                <InputItem
                    name='availability'
                    label='Availability:'
                />
                <TextRegular>Is it available?</TextRegular>
                <Switch
                trackColor={{
                    false: GlobalStyles.brandSecondary,
                    true: GlobalStyles.brandPrimary
                }}
                thumbColor={
                    values.availability ? GlobalStyles.brandSecondary : '#f4f3f4'
                }
                value={values.availability}
                style={styles.switch}
                onValueChange={value => setFieldValue('availability', value)}   // si la función es más compleja, podemos invocar otra función así onValueChange={toggleSwitch}

                />
                <Pressable
                    onPress={() => console.log('Button pressed')}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed
                            ? GlobalStyles.brandPrimaryTap
                            : GlobalStyles.brandPrimary
                        },
                        styles.button
                        ]}>
                        <TextRegular textStyle={styles.text}>
                            Create product
                        </TextRegular>
                </Pressable>
                </View>
            </View>
            </ScrollView>
        )}
        </Formik>
  )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        height: 40,
        padding: 10,
        width: '100%',
        marginTop: 20,
        marginBottom: 20
    },
    text: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginLeft: 5
    },
    switch: {
        marginTop: 20,
    }
})
