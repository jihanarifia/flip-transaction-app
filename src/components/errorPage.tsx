import React from 'react';
import {Image, View, Text, StyleSheet, Button} from 'react-native';
import {COLORS} from '../utils';
import {strings} from '../utils/localization';
import {styles as globalStyles} from '../styles';

type Props = {
  type?: string;
  onPress: () => void;
};

const ErrorPage: React.FC<Props> = ({type, onPress}) => {
  const content = () => {
    if (type === 'empty') {
      return (
        <View style={styles.errorContainer}>
          <Image
            style={[styles.image]}
            source={require('../assets/empty.png')}
          />
          <Text style={styles.errorPageTitle}>{strings.emptyMsgTitle}</Text>
          <Text style={styles.errorPageDesc}>{strings.emptyMsgDesc}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.errorContainer}>
          <Image
            style={[styles.image]}
            source={require('../assets/error_msg.png')}
          />

          <Text style={styles.errorPageTitle}>{strings.errorMsgTitle}</Text>
          <Text style={styles.errorPageDesc}>{strings.errorMsgDesc}</Text>

          <View style={styles.buttonContainer}>
            <Button
              title={strings.refresh.toUpperCase()}
              // height={50}
              // fontSize={12}
              onPress={() => onPress()}
              // onPress={onPress}
              color={COLORS.ORANGE}
            />
          </View>
        </View>
      );
    }
  };

  return (
    <View>
      <View>{content()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    paddingVertical: 150,
  },
  image: {
    alignSelf: 'center',
    width: 200,
    height: 150,
    margin: 10,
    resizeMode: 'contain',
  },
  errorPageTitle: {
    fontWeight: 'bold',
    color: COLORS.BLACK,
    textAlign: 'center',
    fontSize: 16,
    margin: 10,
  },
  errorPageDesc: {
    textAlign: 'center',
    color: COLORS.GREY,
    fontSize: 11,
    margin: 10,
  },
  buttonContainer: {
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 50,
  },
  ...globalStyles,
});
export {ErrorPage};
