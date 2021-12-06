import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {

	return (

	<div>
		<div className="flex justify-between bg-nav items-center px-5 py-3">


			<Link to="/">
				<div className="logo flex w-12">
					<img src={process.env.PUBLIC_URL + "/images/spursExpress.png"} alt="spursexpress logo" />
				</div>
			</Link>

			<Link to="/shop">
				<div className="links flex justify-center text-lg font-semibold text-white hover:text-blue-200 text-opacity-100">Shop</div>
			</Link>

			<Link to="/checkout" className="hover:text-blue-500">
				<div className="flex content-end w-10 hover:bg-blue-300">
					<img src={process.env.PUBLIC_URL + "/images/cart3.png"} alt="shopping cart" />
				</div>
			</Link>
		</div>
	</div>
	)
}

export default Header;