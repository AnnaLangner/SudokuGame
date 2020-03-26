export default class App extends React.Component{
    render () {
        return (
            <div>
                <h1>Sudoku</h1>
                <Board />
                <div className="buttons">
                    <button>Check</button>
                    <button>New Game</button>
                    <button>Solve</button>
                    <button>Restart</button>
                </div>
            </div>
        )
    }
};