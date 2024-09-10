import { useState } from "react";
import { InputField } from "./smallComponents/InputField";

export const ContactForm = ({
	formWrapperClass,
	formTitleClass,
	formSumbitBtnClass,
}) => {
	const [form, setForm] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(form);
	};

	return (
		<>
			<form onSubmit={""}>
				<fieldset className={formWrapperClass}>
					<legend className={formTitleClass}>Contact Me</legend>
					<InputField
						inputFieldClass={"contact-form__input flex-col"}
						labelClass={"contact-form__label"}
						type="text"
						name="name"
						placeholder="Your Name"
						value={form.name}
						onChange={handleChange}
					>
						Name
					</InputField>

					<InputField
						inputFieldClass={"contact-form__input flex-col"}
						labelClass={"contact-form__label"}
						type="email"
						name="email"
						placeholder="Email address"
						value={form.email}
						onChange={handleChange}
					>
						Email
					</InputField>

					<InputField
						inputFieldClass={"contact-form__input flex-col"}
						labelClass={"contact-form__label"}
						type="text"
						name="subject"
						placeholder="Subject"
						value={form.subject}
						onChange={handleChange}
					>
						Subject
					</InputField>

					<InputField
						inputFieldClass={
							"contact-form__input contact-form__textarea flex-col"
						}
						labelClass={"contact-form__label"}
						type="textarea"
						name="message"
						placeholder="Message"
						value={form.message}
						onChange={handleChange}
					>
						Message
					</InputField>

					<button
						className={formSumbitBtnClass}
						type="submit"
						onSubmit={handleSubmit}
						disabled={isSubmitting}
					>
						{isSubmitting ? "Sending..." : "Submit"}
					</button>
				</fieldset>
			</form>
		</>
	);
};
