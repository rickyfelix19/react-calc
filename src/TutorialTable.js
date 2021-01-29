//Table using JavaScript
import React, {Component} from 'react'

class TutorialTable extends Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>James Charles</td>
                        <td>Only Fans</td>
                    </tr>
                    <tr>
                        <td>Ricky</td>
                        <td>Cook</td>
                    </tr>
                    <tr>
                        <td>Felixx</td>
                        <td>Programming</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default TutorialTable