import moment from 'moment';
import React from 'react';
import {DeviceInfo} from 'react-native-device-info';
import idx from 'idx';
import {scale} from '../libs/scaling';

const responseSuccess = (response: any) => {
  const status = idx(response, x => x.status);
  const data = idx(response, x => x.data);
  if (status === 200 || status === 201) {
    return true;
  }
  if (data === undefined) {
    return false;
  }

  return false;
};

const getUniqueIdDevice = () => {
  try {
    return DeviceInfo.getUniqueId();
  } catch (err) {
    return 'XXXXXXXXX';
  }
};

const numberWithCommas = (stringNumber: string) =>
  stringNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

// const log = (obj: any) => {
//   if (__DEV__) {
//   }
// };

// const logImportant = obj => {
//   if (__DEV__) {
//   }
// };

const keyExtractor = (item: any, index: any) => {
  return index.toString();
};

const isObject = (value: any) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
};

const throttle = (func: any, wait: any, options: any) => {
  let context: any, args: any, result: any;
  let timeout: any = null;
  let previous = 0;
  if (!options) {
    options = {};
  }
  let later = function () {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };
  return function () {
    let now = Date.now();
    if (!previous && options.leading === false) {
      previous = now;
    }
    let remaining = wait - (now - previous);
    // eslint-disable-next-line consistent-this
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};

const debounce = (func: any, wait: any) => {
  let timeout: any;
  return (...args: any) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

const selectValueWithTheme = (theme: any, white: any, dark: any) => {
  return theme === 'dark' ? dark : white;
};

export {
  getUniqueIdDevice,
  numberWithCommas,
  // log,
  isObject,
  // logImportant,
  responseSuccess,
  keyExtractor,
  debounce,
  throttle,
  selectValueWithTheme,
};

const FunctionsHelper = {
  getUniqueIdDevice,
  numberWithCommas,
  // log,
  isObject,
  // logImportant,
  responseSuccess,
  keyExtractor,
  debounce,
  throttle,
  selectValueWithTheme,
};

export default FunctionsHelper;
