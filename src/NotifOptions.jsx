/* eslint-disable react/no-unstable-nested-components */
import notifee from '@notifee/react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function NotifOptions() {
  const navigation = useNavigation();
  const [showModal, setModal] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: 'Notifications',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ShowModal = () => {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'rgba(71, 71, 71,0.7)',
          zIndex: 100,
          position: 'absolute',
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 300,
              backgroundColor: 'white',
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '700',
                textAlign: 'center',
                marginBottom: 10,
              }}>
              Header
            </Text>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
            <View style={{marginVertical: 10}}>
              <Button
                title="Close"
                onPress={() => {
                  setModal(false);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  const showNotif = async () => {
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Hello',
      body: 'This will contain notification body',
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  const Type = ({text, onPress}) => {
    return (
      <TouchableOpacity style={styles.typeContainer} onPress={onPress}>
        <Text style={styles.typeText}>{text}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('./assets/logo.png')}
          style={{resizeMode: 'center'}}
        />
        {['Local Notification', 'In App Notifications'].map((value, index) => (
          <Type
            text={value}
            key={value}
            onPress={() => {
              if (index === 0) {
                showNotif();
              } else {
                setModal(true);
              }
            }}
          />
        ))}
      </View>
      {showModal ? <ShowModal /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#062F6E',
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  typeContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    marginBottom: 10,
  },
  typeText: {
    fontSize: 16,
    color: 'white',
  },
});
