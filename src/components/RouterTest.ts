
import Cookies from "js-cookie";

export function get_cookie() {
	return Cookies.get("word");
}

export function set_cookie(value) {
	Cookies.set("word", value);
}
