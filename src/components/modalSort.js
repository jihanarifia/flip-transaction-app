import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {COLORS} from '../utils';
import {styles as globalStyles} from '../styles';
import {strings} from '../utils/localization';
import Icon from 'react-native-vector-icons/Ionicons';

const ModalSort = ({visible, onRequestClose, value}) => {
  const dataFilter = [
    {
      label: strings.sort,
    },
    {
      label: strings.sortNameAZ,
    },
    {
      label: strings.sortNameZA,
    },
    {
      label: strings.sortNewDate,
    },
    {
      label: strings.sortOldDate,
    },
  ];
  const [sort, setSort] = React.useState(value || strings.sort);
  function _handleClose(item) {
    if (item) {
      setSort(item);
      onRequestClose(item);
    } else {
      onRequestClose(sort);
    }
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => _handleClose()}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {dataFilter.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                key={index.toString()}
                onPress={() => _handleClose(item.label)}>
                <View style={styles.row}>
                  {sort === item.label ? (
                    <Icon
                      name={'radio-button-on'}
                      color={COLORS.ORANGE}
                      size={18}
                      style={styles.radioButton}
                    />
                  ) : (
                    <Icon
                      name={'radio-button-off'}
                      color={COLORS.ORANGE}
                      size={18}
                      style={styles.radioButton}
                    />
                  )}
                  <Text style={styles.textStyle}>{item.label}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    // margin: 20,
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 30,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: COLORS.BLACK,
    fontSize: 16,
  },
  radioButton: {
    marginTop: 2,
    marginRight: 10,
  },
  ...globalStyles,
});

export default ModalSort;
