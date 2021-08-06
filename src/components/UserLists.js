import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Menu , Input, Button, Table, Space, Modal, Radio } from 'antd';
import '@styles/UserLists.less';
import store from '../store.js';
import {addToUser, deleteToUser} from '../actions/users-actions'
import {addToTask} from '../actions/task-actions'

const { Search } = Input;



class UserLists extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current : 2,
			modalVisible: false,
			userRole : ""
		};
		this.columns = [
			{
				title: '账号',
				dataIndex: 'id',
				key: 'id'
			},{
				title: '姓名',
				dataIndex: 'name',
				key: 'name',
				render: text => <a>{text}</a>
			},{
				title: '角色',
				dataIndex: 'role',
				key: 'role'
			},{
				title: '操作',
				key: 'action',
				render: (text, record) => (
			      <div size="middle">
			        <a onClick={this.deleteUser.bind(this,record)}>删除</a>
			      </div>
			    ),
			}
		]
	}

  	handleClick = e => {
	    this.setState({ current: e.key });
	};

	deleteUser = record => {
		store.dispatch(deleteToUser(record.id));
		store.dispatch(addToTask(store));
	}

	onSearch(){
		console.log(11);
	}

	onChange(){
		console.log(22);
	}

	showModel(){
		this.setState({
			modalVisible:true
		})
	}

	handleOk(){

		let userrole = this.state.userRole;

	}

	handleCancel(){
		this.setState({
			modalVisible:false
		})
	}

	handleChange(e){
		this.setState({
            userRole:e.target.value
        })
	}
  
	render(){
		const { userRole, modalVisible } = this.state;
		let userData = store.getState().users;

		return(
			<React.Fragment>
			<div className="basicContainer">
				<Menu onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current.toString()]} mode="horizontal">
					<Menu.Item key="1">
						基础信息
					</Menu.Item>
					<Menu.Item key="2">
						项目成员
					</Menu.Item>
				</Menu>
				<Space className="addMember">
					<Search placeholder="input search text" allowClear onSearch={this.onSearch} style={{ width: 200 }} />
					<Button type="primary" onClick={this.showModel.bind(this)}>添加成员</Button>
				</Space>
				<div className="container">
					{this.state.current == 1 ? <div className="info">
						项目目标XXX
					</div> : <Table rowKey={"id"} columns={this.columns} dataSource={userData.userData} />}
				</div>
				<Modal title = "添加成员"  visible={modalVisible} onOk={this.handleOk.bind(this)} confirmLoading={this.confirmLoading} onCancel={this.handleCancel.bind(this)}>
					<div className="addId">
						<div>账号:</div>
						<Input ref="userId" placeholder="请输入账号信息" />
					</div>
					<div className="addName">
						<div>用户:</div>
						<Input ref="userName" placeholder="请输入用户姓名" />
					</div>
					<div className="addRole">
						<div>权限:</div>
						<Radio.Group onChange={this.handleChange.bind(this)} >
					      <Radio value={"Visitor"} checked={userRole == 'Visitor'}>Visitor</Radio>
					      <Radio value={"Developer"} checked={userRole == 'Developer'}>Developer</Radio>
					      <Radio value={"Maintainer"} checked={userRole == 'Maintainer'}>Maintainer</Radio>
					    </Radio.Group>
					</div>
				</Modal>
			</div>
			</React.Fragment>
			)
		
	}
}

const stateToProps=(state)=>{
  return{
    userData:state.users
  }
}


export default connect(stateToProps)(UserLists);