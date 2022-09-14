import {View, Text} from 'react-native';
import React from 'react';
import {getStyles} from './Stepper.styles';

const Stepper = ({
  sectionTitle = '',
  stepName = '',
  currentStep,
  totalStep,
}) => {
  const styles = getStyles();
  let witdhLineal = '0%';

  if (totalStep > 0) {
    if (currentStep > 0 && currentStep <= totalStep) {
      witdhLineal = `${(currentStep * 100) / totalStep}%`;
    } else if (currentStep > totalStep) {
      witdhLineal = '100%';
      currentStep = totalStep;
    } else {
      currentStep = 0;
    }
  } else {
    currentStep = 0;
    totalStep = 0;
  }
  return (
    <View>
      <View style={styles.stepper__container} testID="view-stepper-container">
        <View
          style={{...styles.stepper__progress, width: witdhLineal}}
          testID="view-stepper-progress"
        />
      </View>
      <View style={styles.stepper__textContainer}>
        <Text style={styles.stepper__textLeft}>{sectionTitle}</Text>
        <Text
          style={
            styles.stepper__textRight
          }>{`${stepName} ${currentStep}/${totalStep}`}</Text>
      </View>
    </View>
  );
};

export default Stepper;
