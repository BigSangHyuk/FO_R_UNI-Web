import React, { useState, useRef, FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import moment from 'moment';

LocaleConfig.locales['en'] = {
    monthNames: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ],
    monthNamesShort: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
};
LocaleConfig.defaultLocale = 'en';

const CalendarComponent: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [selectedMonth, setSelectedMonth] = useState<string>(moment().format('M월'));

    const handleMonthChange = (month: DateData) => {
        setSelectedMonth(moment(month.dateString).format('M월'));
    };
    const handleOpenMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };
    const dayHeaderStyles = {
        dayTextAtIndex0: {
            color: 'red',
        },
        dayTextAtIndex1: {
            color: 'blue',
        },
    };

    const calendarTheme = {
        stylesheet: {
            calendar: {
                header: dayHeaderStyles,
            },
        },
    };

    return (
        <View>
            <Header
                containerStyle={{
                    borderBottomWidth: 0,
                    backgroundColor: 'white',
                    marginTop: 20,
                    alignItems: 'center',
                }}
                backgroundColor="white"
                barStyle="default"
                centerComponent={{
                    text: selectedMonth,
                    style: { color: '#1B1B1B', fontSize: 34, fontWeight: 'bold' },
                }}
                leftComponent={
                    <TouchableOpacity onPress={handleOpenMenu}>
                        <Icons name="menu" size={25} style={{ color: '#000000' }} />
                    </TouchableOpacity>
                }
                leftContainerStyle={{ flex: 1, justifyContent: 'center' }}
            />
            <Calendar
                style={styles.calendar}
                theme={calendarTheme}
                hideExtraDays={true}
                onMonthChange={(month) => {
                    handleMonthChange(month);
                }}
                monthFormat=""
                renderArrow={(direction) =>
                    direction === 'left' ? <Icons name="left" size={20} /> : <Icons name="right" size={20} />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    calendar: {
        paddingBottom: 30,
        borderWidth: 1,
        borderColor: '#E9E9E9',
        borderRadius: 20,
        marginTop: 32,
    },
});

export default CalendarComponent;
