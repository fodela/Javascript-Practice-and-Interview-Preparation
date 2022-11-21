// React is loaded and is available as React and ReactDOM
// imports should NOT be used
const FocusableInput = (props) => {
	// Write your code here
	const inputRef = React.useRef();
	React.useEffect(() => {
		if (props.shouldFocus) {
			inputRef.current.addEventListener("focus", props.shouldFocus);
		}
		console.log("Is working so far");
	}, [props.shouldFocus]);

	return <input />;
};

document.body.innerHTML = "<div id='root' />";
ReactDOM.render(
	<FocusableInput shouldFocus={true} />,
	document.getElementById("root")
);
setTimeout(() => console.log(document.getElementById("root").innerHTML));
