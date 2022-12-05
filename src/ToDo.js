import { Component } from 'react';
import Delete from './delete.svg';
export class ToDo extends Component {
	state = {
		userInput: '',
		userTodo: [],
	};

	onChangeEvent(e) {
		this.setState({ userInput: e });
	}

	addItem(input) {
		if (input === '') {
			alert('Please enter an item');
		} else {
			let listArray = this.state.userTodo;
			listArray.push(input);
			this.setState({ userTodo: listArray, userInput: '' });
		}
	}
	doneCase(event) {
		const li = event.currentTarget;
		li.classList.toggle('done');
	}

	onFormSubmit(e) {
		e.preventDefault();
	}

	deleteItem() {
		let listArray = this.state.userTodo;
		listArray = [];
		this.setState({ userTodo: listArray });
	}

	render() {
		return (
			<div className="main">
				<form onSubmit={this.onFormSubmit}>
					<div>
						<input
							type="text"
							onChange={(e) => {
								this.onChangeEvent(e.target.value);
							}}
							value={this.state.userInput}
							placeholder="✍️ Add item..."
						/>
					</div>
					<div>
						<button className="btn" onClick={() => this.addItem(this.state.userInput)}>
							ADD
						</button>
					</div>
				</form>
				<ul>
					{this.state.userTodo.map((item, index) => (
						<li onClick={this.doneCase} key={index}>
							{item}
						</li>
					))}
				</ul>
				<button className="delete" onClick={() => this.deleteItem()}>
					<img src={Delete} alt="basket" width="20px" />
					Delete
				</button>
			</div>
		);
	}
}
