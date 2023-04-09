/**
 * HOC компонента для вывода даты в формате "со времени публикации прошло..."
 * Используется библиотека работы с датой moment.js
 */

import React from "react";
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

const withDateTimePretty = (Component) => {
	return class extends React.Component {
		state = {};
		componentDidMount () {
			this.setState({ date: moment(this.props.date).fromNow() });
		}
		render() {
			return <Component {...this.props} date={this.state.date} />
		}
	}
}

export default withDateTimePretty;