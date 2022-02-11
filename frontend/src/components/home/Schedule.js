import "./Schedule.css";

const Schedule = (props) => {
    return ( 
        <table className="table table-bordered mx-auto">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Timeline</th>
                </tr>
            </thead>
            <tbody>
                <tr colSpan={2} className="text-center">
                    <td>
                        <em>Coming soon...</em>
                    </td>
                    <td>
                        <em>Coming soon...</em>
                    </td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default Schedule;