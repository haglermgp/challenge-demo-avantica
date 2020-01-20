import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { loadMangeList  } from '../../redux/actions'
import {
  Switch,
  Route,
} from 'react-router-dom'

// ui components
import Grid from '@material-ui/core/Grid';

// components
import { TitleSection } from '../../components'
import ManageKeyList from './manage-list'
import ManageKeyDetail from './manage-detail'
import ManageKeyEdit from './manage-edit'

class Manage extends React.Component {

	componentDidMount() {
		const { manageList, onLoadMangeList } = this.props;

		// API call
		if (manageList.data.length === 0) onLoadMangeList()
	}

	render() {

		return (
			<React.Fragment>
				<Helmet> <title>Manage | Code Challenge </title> </Helmet>
				<TitleSection title="Manage data" />
				<Grid container spacing={3} >
					<Grid item xs={12} sm={12} md={4} lg={3} >
						<ManageKeyList/>
					</Grid>
					<Grid item xs={12} sm={12} md={8} lg={9} >
						<Switch>
				      <Route exact path="/manage" component={ManageKeyDetail} />
				      <Route exact path="/manage/edit" component={ManageKeyEdit} />
				    </Switch>
					</Grid>
				</Grid>
			</React.Fragment>
		)
	}
}

const mapDispatchToProps = dispatch => {
  return {
  	onLoadMangeList() {
  		dispatch(loadMangeList())
  	},
  }
}

const mapStateToProps = ({
  manageList,
}) => ({
  manageList,
})

export default connect(mapStateToProps, mapDispatchToProps)(Manage)
