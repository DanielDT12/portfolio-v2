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
	const [responseMessage, setResponseMessage] = useState("");
	const [error, setError] = useState("");

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");
		setResponseMessage("");

		try {
			const res = await fetch("http://localhost:5000/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(form),
			});

			if (res.ok) {
				setResponseMessage("Your message has been sent successfully!");
				setForm({
					name: "",
					email: "",
					subject: "",
					message: "",
				});
			} else {
				const data = await res.json();
				setError(data.error || "Something went wrong.");
			}
		} catch (err) {
			setError("Something went wrong. Please try again later.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
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
						disabled={isSubmitting}
					>
						{isSubmitting ? "Sending..." : "Submit"}
					</button>
				</fieldset>
			</form>
		</>
	);
};
