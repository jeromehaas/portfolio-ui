// CREATE HTML
const createHtmlTemplate = ({firstname, lastname, email, phone, message}) => (`
	<p>You have received a new message from your website contact form.</p>
	<p>Here are the details:</p>
	<ul>
	  <li><strong>Firstname:</strong> ${firstname}</li>
	  <li><strong>Lastname:</strong> ${lastname}}</li>
	  <li><strong>E-Mail:</strong> ${email}</li>
	  <li><strong>Phone:</strong> ${phone}</li>
	  <li><strong>Message:</strong> ${message}</li>
	</ul>
`);

// TEXT
const createTextTemplate = ({firstname, lastname, email, phone, message}) => (`
You have received a new message from your website contact form.
Here are the details:
  Firstname: ${firstname}
  Lastname: ${lastname}
  Phone: ${phone}
  E-Mail: ${email}
  Message: ${message}
`);

// EXPORTS
export {
	createTextTemplate,
	createHtmlTemplate,
};