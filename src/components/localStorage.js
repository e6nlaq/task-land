
function has_localStorage(key) {
	return key in Object(localStorage);
}

export default {
	has_localStorage
}
