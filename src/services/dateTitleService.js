import moment from 'moment'
import { DateTitle, DateType } from 'src/modules/dateTitleModule'

/**
 * 服务：日期类表头
 */
export class DateTitleService {
    _original = []
    _dateTitles = []

    constructor(original = null) {
        if (original !== null) this._original = original
    }

    static new = (original) => new DateTitleService(original)

    static make = () => new DateTitleService()

    get original() {
        return this._original
    }
    get data() {
        return this._dateTitles
    }

    set original(value) {
        this._original = value
    }

    /**
     * 处理表头中的日期
     */
    _parseDateTitle(
        holiday3Dates = [],
        exWorkdayDates = [],
        holidayDates = [],
        exHolidayDates = [],
        startDay = null,
    ) {
        this._original.forEach((value, number) => {
            if (number > 1) {
                startDay = moment(startDay, 'YYYY-MM-DD') || moment(new Date()).format('YYYY-MM-DD')
                let nowDay = startDay
                let dateType = ''

                if (holiday3Dates.includes(nowDay.format('YYYY-MM-DD'))) {
                    dateType = DateType.holiday3
                } else if (holidayDates.includes(nowDay.format('YYYY-MM-DD'))) {
                    dateType = DateType.holiday
                } else if (exWorkdayDates.includes(nowDay.format('YYYY-MM-DD'))) {
                    dateType = DateType.exWorkday
                } else if (exHolidayDates.includes(nowDay.format('YYYY-MM-DD'))) {
                    dateType = DateType.exHoliday
                } else {
                    dateType = DateType.weekend
                }

                this._dateTitles.push(
                    DateTitle.new(number, dateType, value, nowDay.format('YYYY-MM-DD')),
                )

                nowDay.add(1, 'day')
            }
        })
    }

    /**
     * 解析数据
     * @returns {DateTitleService}
     */
    parse(
        holiday3Dates = [],
        exWorkdayDates = [],
        holidayDates = [],
        exHolidayDates = [],
        startDay = null,
    ) {
        this._parseDateTitle(holiday3Dates, exWorkdayDates, holidayDates, exHolidayDates, startDay)
        return this
    }
}
