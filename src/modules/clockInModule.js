import { Str } from 'src/utils/str'

export const ClockInType = {
    name: 'NAME',
    clockIn: 'CLOCK-IN',
    rowNumber: 'ROW-NUMBER',
}

/**
 * 模型：打卡数据
 */
export class ClockIn {
    _type = 'CLOCK-IN'
    _dateTitle = null
    _contentType = ''
    _value = ''
    _status = false
    _desc = ''
    _print = false

    constructor(content = null, contentType = null, dateTitle = null, print = false) {
        this._type = 'CLOCK-IN'
        this._dateTitle = dateTitle
        this._value = content || ''
        this._contentType = contentType || ''
        this._desc = ''
        this._print = print
        this._setValue(content || '')
    }

    static new = (content = null, contentType = null, dateTitle = null, print = false) => new ClockIn(content, contentType, dateTitle, print)

    static make = () => new ClockIn()

    get type() { return this._type }
    get dateTitle() { return this._dateTitle }
    get contentType() { return this._contentType }
    get value() { return this._value }
    get status() { return this._status }
    get desc() { return this._desc }
    get print() { return this._print }

    set type(value) { this._type = value }
    set dateTitle(value) { this._dateTitle = value }
    set contentType(value) { this._contentType = value }
    set value(value) { this._setValue(value) }
    set status(value) { this._status = value }
    set desc(value) { this._desc = value }
    set print(value) { this._print = value }

    _setValue(value = '') {
        this._value = value
        if (this._contentType === ClockInType.clockIn) {
            if (value === '') {
                this._status = false
                this._desc = '未打卡'
                return
            }

            if (Str.new(value).findChar(':') > 1) {
                const values = String(value).split('\r\n')
                if (values.length > 1) {
                    const times = String(values[0]).split(':')
                    const firstClockIn = parseInt(times[0])
                    const lastClockIn = parseInt(times[times.length - 1])
                    if (firstClockIn > 12 && lastClockIn < 12) {
                        this._status = true
                        this._desc = '正常打卡'
                    } else {
                        if (firstClockIn > 12) this._desc = '缺少上班卡'
                        if (lastClockIn < 12) this._desc = '缺少下班卡'
                    }
                }
            } else {
                const hour = parseInt(String(value).trim().split(':')[0])
                if (hour < 12) this._desc = '缺少下班卡'
                if (hour > 12) this._desc = '缺少上班卡'
            }
        }

        if (this._print) console.log(`#打卡数据：-${this._value} - 状态: ${this._status} - 描述: ${this._desc}`)
    }
}
