import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../redux/actions';

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ''};
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        // dispatches actions to add todo
        this.props.addTodo(this.state.input);

        // sets state back to empty string
        this.setState({ input: ''});
    };

    render() {
        return(
            <div>
                <input
                  onChange={e => this.updateInput(e.target.value)}
                  value={this.state.input} />
                  
                <button className='add-todo' onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

/**
 *  const  mapStateToProps = ( state, OwnProps ) => ({
 *      // 
 *  })
 * 
 * const  mapDispatchToProps = {
 *   // ... es un obbjeto lleno de acciones creadoras
 * }
 * 
 * const connectToStore = connect(
 *   mapStateToProps,
 *   masDispatchToProps
 * )
 * 
 * // 
 * 
 * 
 * connect(
 *  mapStateToProps,
 *  mapDispatchToProps
 * )(Component);
 * 
 */

export default connect(
    null,
    { addTodo }
)( AddTodo );

