import "./ScheduleEvent.css";

const Schedule = (props) => {
    return ( 
        <table className="table table-bordered mx-auto">
            <thead>
                <tr>
                    <th>Timeline</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        Registrations start
                    </td>
                    <td>
                        {props.data.regstart}
                    </td>
                </tr>
                <tr>
                    <td>
                        Registration deadline
                    </td>
                    <td>
                        {props.data.regend}
                    </td>
                </tr>
                <tr>
                    <td>
                        Event Duration
                    </td>
                    <td>
                        {props.data.duration}
                    </td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default Schedule;