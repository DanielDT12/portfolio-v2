import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

export default function ContactInfo() {
	return (
		<div className="contact-info">
			<h1 className="contact-info__title">Contact Me</h1>
			<p className="contact-info__text">
				If you have any questions or would like to get in contact with me, here
				are my contact details.
			</p>
			<div className="contact-info__details">
				<div className="contact-info__details-wrapper">
					<CiPhone className="contact-info__icon" />
					<p className="contact-info__text">+47 47901426</p>
				</div>

				<div className="contact-info__details-wrapper">
					<CiMail className="contact-info__icon" />
					<a
						className="contact-info__link"
						href="mailto:daniel.digitaletalenter@gmail.com"
					>
						daniel.digitaletalenter@gmail.com
					</a>
				</div>
			</div>
		</div>
	);
}
