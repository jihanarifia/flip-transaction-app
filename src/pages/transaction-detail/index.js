import * as React from 'react';
import {Text, View, StyleSheet, Clipboard} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles as globalStyles} from '../../styles';
import {COLORS, HELPER} from '../../utils';
import {strings} from '../../utils/localization';

function TransactionDetailScreen({route}) {
  const [collapse, setCollapse] = React.useState(true);
  const {detail} = route.params;

  const info = [
    {
      title: detail?.beneficiary_name.toUpperCase(),
      detail: detail?.account_number,
    },
    {
      title: strings.nominal,
      detail: 'Rp' + HELPER.SeperatorNumber(detail?.amount),
    },
    {
      title: strings.transferNews,
      detail: detail?.remark,
    },
    {
      title: strings.uniqCode,
      detail: detail?.unique_code,
    },
    {
      title: strings.createTime,
      detail: HELPER.dateTimeFormat(detail?.created_at),
    },
    {
      title: strings.fee,
      detail: detail?.fee,
    },
    {
      title: strings.completedTime,
      detail: HELPER.dateTimeFormat(detail?.completed_at),
    },
    {
      title: strings.status,
      detail: detail?.status,
    },
  ];

  function _copyToClipboard(text) {
    Clipboard.setString(text);
  }

  return (
    <View style={styles.containers}>
      <View style={styles.card}>
        <View style={[styles.header, {borderBottomWidth: 0.2}]}>
          <Text
            style={styles.title}
            onPress={() => _copyToClipboard('#' + detail?.id)}>
            {strings.transactionId} #{detail?.id}{' '}
            <Icon name="content-copy" size={18} color={COLORS.ORANGE} />
          </Text>
        </View>

        <View style={[styles.header, styles.row, {marginVertical: 0}]}>
          <Text style={[styles.title, {width: '85%'}]}>
            {strings.transactionDetail}
          </Text>
          <Text
            style={styles.collapseText}
            onPress={() => setCollapse(!collapse)}>
            {collapse ? strings.close : strings.open}
          </Text>
        </View>
        {collapse && (
          <View style={styles.content}>
            <Text style={styles.sectionLabel}>
              {detail?.sender_bank.toUpperCase()}{' '}
              <Icon name="arrow-right-thick" size={18} />{' '}
              {detail?.beneficiary_bank.toUpperCase()}
            </Text>

            <View style={[styles.row, {flexWrap: 'wrap'}]}>
              {info.map((item, index) => {
                return (
                  <View
                    key={index.toString()}
                    style={[
                      styles.col,
                      {
                        width: index % 2 == 0 ? '60%' : '40%',
                        marginVertical: 15,
                      },
                    ]}>
                    {item?.title === strings.status ? (
                      item?.detail.toUpperCase() === 'SUCCESS' ? (
                        <View style={styles.statusSuccess}>
                          <Text style={styles.textStatusSuccess}>
                            {item?.detail}
                          </Text>
                        </View>
                      ) : (
                        <View style={styles.statusOther}>
                          <Text style={styles.textStatusOther}>
                            {item?.detail}
                          </Text>
                        </View>
                      )
                    ) : (
                      <>
                        <Text style={styles.sectionTitle}>{item?.title}</Text>
                        <Text style={styles.sectionDescription}>
                          {item?.detail}
                        </Text>
                      </>
                    )}
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.WHITE,
    marginVertical: 20,
  },
  header: {
    borderBottomColor: COLORS.LIGHT_GREY,
    borderBottomWidth: 0.5,
    padding: 20,
  },
  content: {
    backgroundColor: COLORS.WHITE,
    marginVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: COLORS.LIGHT_GREY,
  },
  title: {
    fontSize: 16,
    color: COLORS.BLACK,
    fontWeight: 'bold',
  },
  collapseText: {
    color: COLORS.ORANGE,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  ...globalStyles,
});

export default TransactionDetailScreen;
