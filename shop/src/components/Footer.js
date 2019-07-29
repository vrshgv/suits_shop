import React, { Component } from 'react';
	class Footer extends React.Component {
	       render() {
	         return (
	<footer className="footer">
		<div className="container">
			<div className="row">
				<div className="col text-center">
					<div className="footer_logo"><a href="#">Verona</a></div>
					<nav className="footer_nav">
						<ul>
							<li><a href="//localhost/" >home</a></li>
							<li><a href="//localhost/#promotarget" className="promolink">promo</a></li>
							<li><a href="//localhost/#arrivalstarget" className="arrivalslink">new arrivals</a></li>
							<li><a href="//localhost:3000/">shop</a></li>
							<li><a href="//localhost/contact.html">contact</a></li>
						</ul>
					</nav>
					<div className="footer_social">
						<ul>
							<li><a href="https://www.pinterest.com/kingaken/men-s-suits/" target="_blank"><i className="fa fa-pinterest" aria-hidden="true"></i></a></li>
							<li><a href="https://www.facebook.com/hugoboss/" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
							<li><a href="https://www.instagram.com/dolcegabbana/?hl=ru" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
							<li><a href="https://www.youtube.com/user/vogue/playlists" target="_blank"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
							<li><a href="https://twitter.com/hugoboss" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
						</ul>
					</div>
			</div>
		</div>
		</div>
	</footer>
	         );
	       }
	     }
export default Footer;
