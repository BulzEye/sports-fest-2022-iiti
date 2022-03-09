import "./Schedule.css";

const Schedule = (props) => {
    return ( 
        <table className="table table-bordered mx-auto">
            {/* <thead>
            </thead> */}
            <tbody>
                <tr>
                    <th>Timeline</th>
                    <th>Date</th>
                </tr>
                <tr>
                    <td>
                        Sports Events
                    </td>
                    <td>
                        7th to 15th March
                    </td>
                </tr>
                <tr>
                    <td>
                        Online Events
                    </td>
                    <td>
                        11th to 13th March
                    </td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default Schedule;