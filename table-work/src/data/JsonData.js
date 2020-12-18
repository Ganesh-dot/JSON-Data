var GridTable = React.createClass({
    render: function(){
        var rows = [];
        var headers = [];
        this.props.movies.forEach(function(movie){
            headers.push(<GridHeaders movie={movie} key={movie.id}/>);
            rows.push(<GridRows movie={movie} key={movie.id}/>);
        });
        return(
            <table>
                <thead>{headers}</thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});
var GridHeaders = React.createClass({
    render: function(){
        return(<tr><th>{this.props.movie.key}</th></tr>);
    }
});
var GridRows = React.createClass({
    render: function(){
        return(
            <tr>
                <td>{this.props.movie.id}</td>
                <td>{this.props.movie.category}</td>
                <td>{this.props.movie.title}</td>
                <td>{this.props.movie.director}</td>
                <td>{this.props.movie.year}</td>
            </tr>
        );
    }
});
var MovieGrid = React.createClass({
    render: function(){
        return(
            <GridTable movies={this.props.movies}/>
        );
    }
});
var MOVIES = [
    {
        "id": 1388534400000,
        "category": "SciFi",
        "title": "Star Wars: The Force Awakens",
        "director": "J.J. Abrams",
        "year": 2015
    },
    {
        "id": 1420070400000,
        "category": "Horror",
        "title": "The Shining",
        "director": "Stanley Kubrick",
        "year": 1980
    }
];
ReactDOM.render(
    <MovieGrid movies={MOVIES}/>,
    document.getElementById("content")
);

export default JsonData;