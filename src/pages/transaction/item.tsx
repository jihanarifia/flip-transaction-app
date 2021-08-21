import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS, HELPER} from '../../utils';
import {styles as globalStyles} from '../../styles';

const SUCCESS = 'SUCCESS';
const Item = ({data}: any) => {
  return (
    <View
      style={[
        styles.sectionContainer,
        {
          borderLeftColor:
            data?.status.toUpperCase() === SUCCESS
              ? COLORS.GREEN
              : COLORS.ORANGE,
        },
      ]}>
      <View style={{width: '80%'}}>
        <Text style={styles.sectionLabel}>
          {data?.sender_bank.toUpperCase()}{' '}
          <Icon name="arrow-right" size={14} />{' '}
          {data?.beneficiary_bank.toUpperCase()}
        </Text>
        <Text style={styles.sectionTitle}>
          {data?.beneficiary_name.toUpperCase()}
        </Text>
        <Text style={styles.sectionDescription}>
          Rp{HELPER.SeperatorNumber(data?.amount)}{' '}
          <Icon
            name="circle"
            size={8}
            style={{paddingBottom: 15, paddingHorizontal: 10}}
          />{' '}
          {HELPER.dateTimeFormat(data?.created_at)}
        </Text>
      </View>
      <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
        {data?.status.toUpperCase() === SUCCESS ? (
          <View style={styles.statusSuccess}>
            <Text style={styles.textStatusSuccess}>{data?.status}</Text>
          </View>
        ) : (
          <View style={styles.statusOther}>
            <Text style={styles.textStatusOther}>{data?.status}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 10,
    borderLeftColor: COLORS.GREEN,
    borderLeftWidth: 5,
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
    flexDirection: 'row',
    flex: 1,
  },
  ...globalStyles,
});

export default Item;
