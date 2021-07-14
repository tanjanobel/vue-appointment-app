import { calendarWeekData } from "./data";

export const store = {
    state: {
        calendarWeekData
    },
    getActiveDay() {
        return this.state.calendarWeekData.find(day => day.active);
    },
    setActiveDay(dayId) {
        this.state.calendarWeekData.map(dayObj => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false;
        });
    }
}