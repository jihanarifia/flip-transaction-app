const COLORS = {
  WHITE: 'white',
  GREY: '#464141',
  LIGHT_GREY: '#C0C0C0',
  BLACK: '#000000',
  ORANGE: '#EC6F3B',
  GREEN: '#51B884',
  BACKGROUN_SCREEN: '#F4FAF8',
};

const ROUTE_NAMES = {
  TRANSACTION: 'TRANSACTION',
  TRANSACTION_DETAIL: 'TRANSACTION_DETAIL',
};

const FONT = {
  LIGHT: 'Roboto-Light',
  BOLD: 'Roboto-Bold',
  MEDIUM: 'Roboto-Medium',
  REGULAR: 'Roboto-Regular',
};

const CONSTANTS = {
  API: 'https://nextar.flip.id/frontend-test',
};

const HELPER = {
  SeperatorNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  },
  dateTimeFormat(strDate) {
    let strSplitDate = String(strDate).split(' ');
    let date = new Date(strSplitDate[0]);
    let dd = date.getDate();
    let mm = date.getMonth(); //January is 0!
    let yyyy = date.getFullYear();
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes

    if (dd < 10) {
      dd = '0' + dd;
    }

    let month = new Array();
    month[0] = 'Januari';
    month[1] = 'Febuari';
    month[2] = 'Maret';
    month[3] = 'April';
    month[4] = 'Mei';
    month[5] = 'Juni';
    month[6] = 'Juli';
    month[7] = 'Agustus';
    month[8] = 'September';
    month[9] = 'Oktober';
    month[10] = 'November';
    month[11] = 'Desember';
    date = `${dd} ${month[mm]} ${yyyy} ${hours}:${min}`;
    return date.toString();
  },

  sortNameAZ(a, b) {
    if (a.beneficiary_name < b.beneficiary_name) {
      return -1;
    }
    if (a.beneficiary_name > b.beneficiary_name) {
      return 1;
    }
    return 0;
  },

  sortNameZA(a, b) {
    if (b.beneficiary_name < a.beneficiary_name) {
      return -1;
    }
    if (b.beneficiary_name > a.beneficiary_name) {
      return 1;
    }
    return 0;
  },

  sortNewDate(a, b) {
    var c = new Date(a.created_at);
    var d = new Date(b.created_at);
    return d - c;
  },
  sortOldDate(a, b) {
    var c = new Date(a.created_at);
    var d = new Date(b.created_at);
    return c - d;
  },
};

export {COLORS, ROUTE_NAMES, FONT, HELPER, CONSTANTS};
