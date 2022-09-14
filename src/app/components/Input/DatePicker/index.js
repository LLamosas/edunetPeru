import {getStyles} from './DatePicker.styles';
import {theme, INPUT_TYPES} from 'appConstants';
import Input from '../index';
import React, {useEffect, useState} from 'react';

const DatePicker = ({
  label,
  value,
  caption,
  type = INPUT_TYPES.DEFAULT,
  testID = 'datepicker',
  accessibilityLabel = 'datepicker',
  style = {},
  onFocus = () => {},
  onBlur = () => {},
  editable = true,
  format = 'DD/MM/YYYY',
  onChangeText = () => {},
  placeholderTextColor = theme.text50,
}) => {
  const styles = getStyles();
  const customStyle = {...styles.input__container, ...style};
  const [inputValue, setInputValue] = useState('');
  const maxLength = format.length;
  const captionProp =
    typeof caption === 'boolean' && caption ? format : caption;
  const dateDictionary = {
    D: 'day',
    M: 'month',
    Y: 'year',
  };
  //TODO: Research about jest for hooks
  /* istanbul ignore next */
  useEffect(() => {
    if (value && value !== '') {
      const response = setInputDateMask(value);
      setInputValue(response.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const prepareRegex = () => {
    let regexString = '';
    format
      .split('/')
      /**
       * Loop format sections to get groups length and
       * create regex to split in groups
       */
      .map(section => (regexString += `(\\d{0,${section.length}})`));
    regexString += '$';
    return new RegExp(regexString, 'g');
  };

  const regex = prepareRegex();

  const setInputDateMask = text => {
    const plainText =
      typeof text === 'string' ? text.split('/').join('') : text;
    /* istanbul ignore next */
    const result = regex.exec(plainText) || [];
    let response = {value: ''};

    const dateArr = [];

    // Loop the groups made by the regex
    for (let i in result) {
      if (result[Number(i) + 1]) {
        // push the correct pivots to new array
        dateArr.push(result[Number(i) + 1]);
      }
    }

    const date = dateArr.join('/');

    /**
     * Split format to get order and date sections
     * as it is generic
     */
    format.split('/').map((section, index) => {
      // loop dateDictionary keys
      Object.keys(dateDictionary).map(key => {
        /**
         * look for key in the format section to prepare
         * date response obj
         */
        if (section.includes(key)) {
          response = {
            ...response,
            [dateDictionary[key]]: result[index + 1],
          };
        }
      });
    });

    response = {...response, value: date};
    return response;
  };

  return (
    <Input
      value={inputValue}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      style={customStyle}
      theme={theme}
      label={label}
      caption={captionProp || ''}
      type={type}
      onFocus={e => onFocus(e)}
      onBlur={e => onBlur(e)}
      editable={editable}
      keyboardType="numeric"
      placeholderTextColor={placeholderTextColor}
      placeholder={format}
      maxLength={maxLength}
      onChangeText={text => {
        const response = setInputDateMask(text);
        setInputValue(response.value);
        onChangeText(response);
      }}
    />
  );
};

export default DatePicker;
