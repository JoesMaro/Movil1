import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Config/FirebaseConfig';
import { Icon, IconButton, Modal, Portal } from 'react-native-paper';

export const HomeScreen = () => {
    const [name, setName] = useState<string>(''); 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setName(user.displayName ?? 'User'); 
            }
        });

        return () => unsubscribe(); 
    }, []);

    return (
      <>
        <View style={styles.root}>
            <Text style={styles.welcomeText}>Bienvenid@</Text>
            <Text style={styles.nameText}>{name}</Text>
            <View>

            <IconButton
            icon="account-edit"
            size={20}
            mode='contained'
            onPress={() => console.log('Pressed')}
            
            />

            </View>
        </View>

      </>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end', 
        padding: 20,
        backgroundColor: '#E2EAF4', 
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6200ee', 
        marginBottom: 10, 
    },
    nameText: {
        fontSize: 20,
        color: '#333', 
    },
});
