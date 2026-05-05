import  { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import type { TrainingType } from "../types";

const localizer = momentLocalizer(moment);
// osittain otettu githubin tehty calender componentin koodia 
type TrainingListProps = {

    trainings: TrainingType[];
};
class Calender extends Component <TrainingListProps> {


  render() {

    const eventss = this.props.trainings.map(t => ({
        title: t.activity,
        start: new Date(t.date),
        end: new Date(t.date)
    }))
    return (
        
      <div className="Calender">
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={eventss}
          style={{ height: "100vh" }}
        />
      </div>
    );
  }
}

export default Calender;